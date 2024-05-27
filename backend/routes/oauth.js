var express = require("express");
var router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const { OAuth2Client } = require("google-auth-library");
const fetch = require("node-fetch"); // Make sure to install node-fetch
const User = require("../models/users"); // Adjust the path as necessary

async function getUserData(access_token) {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
  );

  const data = await response.json();
  console.log("data", data);
  return data;
}

router.get("/", async function (req, res, next) {
  const code = req.query.code;

  try {
    const redirectUrl = "http://127.0.0.1:3000/oauth";

    const oAuth2Client = new OAuth2Client(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      redirectUrl
    );

    const tokenResponse = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokenResponse.tokens);
    console.log("Tokens got");

    const userCredentials = oAuth2Client.credentials;
    console.log("Credentials", userCredentials);

    const userData = await getUserData(userCredentials.access_token);
    console.log("User Data from Google:", userData);

    // Extract user information
    const { sub: googleId, name, picture: profilePicture } = userData;

    // Find or create user in database
    let user = await User.findOne({ googleId });
    if (!user) {
      user = new User({
        googleId,
        name,
        profilePicture,
        accessToken: userCredentials.access_token,
        refreshToken: userCredentials.refresh_token,
      });
    } else {
      user.lastLogin = Date.now();
      user.accessToken = userCredentials.access_token;
      user.refreshToken = userCredentials.refresh_token;
    }

    await user.save();

    // Send user information back to the client (or set a session, or generate a JWT, etc.)
    res.json(user);
  } catch (err) {
    console.error("Got an error", err);
    res.status(500).send("Internal Server Error"); // Send error response
  }
});

module.exports = router;
