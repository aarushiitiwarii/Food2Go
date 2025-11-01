import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import donationRoutes from "./routes/donationRoutes.js";
import authRoutes from "./routes/authRoutes.js"; // <-- import new routes

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Allow all common methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow common headers
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Food2Go Backend is running successfully!");
});

app.use("/api/donations", donationRoutes);
app.use("/api/auth", authRoutes); // <-- add this

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
