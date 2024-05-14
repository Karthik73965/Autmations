import { config, mailOptions } from "./config.js";
import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport(config);

export const NodemailerController = async (req, res) => {
    try {
      const info = await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: 'Email sent successfully!', info });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while sending email.' });
    }
  }