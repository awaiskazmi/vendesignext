import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const handler = async (req, res) => {
  const data = req.body;
  try {
    await transporter.sendMail({
      from: `${data.email}`,
      to: process.env.EMAIL_USER,
      subject: `${data.name} says hello!`,
      text: data.message,
    });
    return res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Bad request!" });
  }
};

export default handler;
