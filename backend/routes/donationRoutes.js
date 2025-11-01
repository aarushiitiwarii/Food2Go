import express from "express";
import { uploadToS3 } from "../aws/s3.js";
import { sendNotification } from "../aws/sns.js";
import { logToCloudWatch } from "../aws/cloudwatch.js";

const router = express.Router();

router.post("/upload", async (req, res) => {
  try {
    // Example: upload a file (replace later with multer)
    const imageUrl = await uploadToS3("uploads/sample.jpg", "food-sample.jpg");

    await sendNotification("A new food donation has been made!");
    await logToCloudWatch("Food2GoLogs", "Donations", "New donation uploaded.");

    res.status(200).json({ message: "Donation uploaded", imageUrl });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to upload donation" });
  }
});

export default router;

