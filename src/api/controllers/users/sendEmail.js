const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (email, verificationCode) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Email Verification for Mask',
      text: `Your verification code is: ${verificationCode}`,
    });

    // console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;