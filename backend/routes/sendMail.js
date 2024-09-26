import nodemailer from "nodemailer";

const SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "mandarj2412@gmail.com", // your Gmail address
        pass: "ugnt gqhz bpkf wxjf", // use the generated app password here
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let mail = await transporter.sendMail({
      from: "mandarj2412@gmail.com",
      to: EmailTo,
      subject: EmailSubject,
      text: "Hello world?", // plain text body
      html: EmailText, // html body
    });
    console.log("Mail sent successfully");
  } catch (error) {
    console.log("Error sending email:", error);
  }
};
export default SendEmailUtility;
