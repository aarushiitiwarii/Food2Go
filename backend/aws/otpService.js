import AWS from "awsConfig.js";

const sns = new AWS.SNS();

export const sendOTP = async (phoneNumber, otp) => {
  const params = {
    Message: `Your Food2Go verification code is ${otp}`,
    PhoneNumber: phoneNumber,
  };

  try {
    await sns.publish(params).promise();
    console.log("✅ OTP sent successfully");
  } catch (err) {
    console.error("❌ Error sending OTP:", err);
  }
};
