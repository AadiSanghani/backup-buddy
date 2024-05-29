var express = require("express");
var router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const { OAuth2Client } = require("google-auth-library");
const fetch = require("node-fetch");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

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

  if (!code) {
    console.error("Authorization code not found in the request.");
    return res.status(400).send("Authorization code not found.");
  }

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

    // Hash the tokens
    const hashedAccessToken = await bcrypt.hash(
      userCredentials.access_token,
      10
    );
    const hashedRefreshToken = await bcrypt.hash(
      userCredentials.refresh_token,
      10
    );

    // Extract user information
    const { sub: googleId, name, picture: profilePicture, email } = userData;

    // Find or create user in database
    let user = await User.findOne({ googleId });
    if (!user) {
      user = new User({
        googleId,
        name,
        email,
        profilePicture,
        accessToken: hashedAccessToken,
        refreshToken: hashedRefreshToken,
      });
    } else {
      user.lastLogin = Date.now();
      user.accessToken = hashedAccessToken;
      user.refreshToken = hashedRefreshToken;
    }

    await user.save();

    // Generate JWT
    const token = jwt.sign(
      {
        googleId: user.googleId,
        name: user.name,
        email: user.email,
        contacts: user.contacts,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Redirect to the frontend with the token
    res.redirect(`http://127.0.0.1:5173/dashboard?token=${token}`);
  } catch (err) {
    console.error("Got an error", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
