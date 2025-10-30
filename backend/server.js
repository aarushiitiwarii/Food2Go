import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";

const app = express();
app.use(cors());
app.use(express.json());

// Cognito details
const REGION = "us-east-1";
const USER_POOL_ID = "us-east-1_cNTPZP6xy"; // your pool ID
const client = jwksClient({
  jwksUri: `https://cognito-idp.${REGION}.amazonaws.com/${USER_POOL_ID}/.well-known/jwks.json`,
});

// helper to get signing key
function getKey(header, callback) {
  client.getSigningKey(header.kid, (err, key) => {
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
}

// verify JWT middleware
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(
    token,
    getKey,
    {
      algorithms: ["RS256"],
    },
    (err, decoded) => {
      if (err) return res.status(401).json({ error: "Invalid token" });
      req.user = decoded;
      next();
    }
  );
}

// public route
app.get("/", (req, res) => {
  res.send("🍔 Food2Go backend is running!");
});

// protected route
app.get("/orders", verifyToken, (req, res) => {
  res.json({
    message: "Welcome to your orders!",
    user: req.user,
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
