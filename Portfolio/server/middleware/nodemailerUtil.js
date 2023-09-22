import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});


export const sendEmail = async (name, email, message) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.MY_EMAIL,
      subject: `[Portfolio Message] from ${name}`,
      text: `The user, '${name}' with an email of '${email}' wanted to say: '${message}'`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('email sent from backend', info.response)
  } catch(err) {
    console.error('Error sending mail: ', err);
  }
};