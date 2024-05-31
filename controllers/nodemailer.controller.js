import { config } from "./config.js";
import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport(config);


export const NodemailerController = async (req, res) => {
  console.log("hiited this route ")
  const { formdata, email , endpoint  } = req.body
  const setformdata = []
  for(const key in formdata){
    setformdata.push({
      name :key ,
      value :formdata[key]
      
    })
  }
  const mailOptions = {

    from: "noreply@gmail.com",
    to: email,
    subject: `Form submitted to  https://zyock.vercel.app/r/${endpoint}`,
    html: `
    <h1>Form submitted</h1>
    <ul>
    ${setformdata.map((item) => (
      `<li><b>${item.name}:</b> ${item.value}</li>`
    ))}
    </ul>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info)
    res.status(200).json({ message: 'Email sent successfully!' ,});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while sending email.' });
  }
}