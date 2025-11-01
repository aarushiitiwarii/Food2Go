import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const sns = new AWS.SNS({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export const sendNotification = async (message) => {
  const params = {
    Message: message,
    TopicArn: process.env.SNS_TOPIC_ARN,
  };

  await sns.publish(params).promise();
  console.log("Notification sent:", message);
};

