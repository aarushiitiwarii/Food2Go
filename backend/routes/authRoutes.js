import express from "express";
import { cognitoClient } from "../aws/awsconfig.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// User signup
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const params = {
    ClientId: process.env.COGNITO_CLIENT_ID,
    Username: email,
    Password: password,
    UserAttributes: [
      { Name: "email", Value: email },
    ],
  };

  try {
    const data = await cognito.signUp(params).promise();
    res.status(200).json({ message: "Signup successful!", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// User login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const params = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: process.env.COGNITO_CLIENT_ID,
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
  };

  try {
    const data = await cognito.initiateAuth(params).promise();
    res.status(200).json({
      message: "Login successful!",
      idToken: data.AuthenticationResult.IdToken,
      accessToken: data.AuthenticationResult.AccessToken,
      refreshToken: data.AuthenticationResult.RefreshToken,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
