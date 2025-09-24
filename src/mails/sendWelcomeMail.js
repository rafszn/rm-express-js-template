const transporter = require("./nodemailer.config");
const dotenv = require("dotenv");
const { welcomeHTML } = require("./templates");

dotenv.config();

const sendWelcomeEmail = async ({ toEmail }) => {
  const mailOptions = {
    from: {
      name: "User",
      address: process.env.EMAIL,
    },
    to: toEmail,
    subject: "Welcome",
    html: welcomeHTML,
  };

  try {
    const res = await transporter.sendMail(mailOptions);
    return res;
  } catch (error) {
    return error.message;
  }
};

module.exports = sendWelcomeEmail;
