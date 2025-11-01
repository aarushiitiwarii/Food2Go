import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const cloudwatch = new AWS.CloudWatchLogs({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export const logToCloudWatch = async (logGroupName, logStreamName, message) => {
  console.log(`[CloudWatch Log] ${message}`);
  // Actual CloudWatch logging will be added once credentials and log streams are ready
};

