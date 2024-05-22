var express = require("express");
var router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const { OAuth2Client } = require("google-auth-library");
const fetch = require("node-fetch"); // Make sure to install node-fetch

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

    const user = oAuth2Client.credentials;
    console.log("Credentials", user);

    const userData = await getUserData(user.access_token);
    res.json(userData); // Send user data as the response
  } catch (err) {
    console.error("Got an error", err);
    res.status(500).send("Internal Server Error"); // Send error response
  }
});

module.exports = router;
