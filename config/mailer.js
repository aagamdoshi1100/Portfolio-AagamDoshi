import EmailTemplate from "@/components/EmailTemplate";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import SocialLinks from "@/components/SocialLinks";

const user = process.env.APP;
const TOKEN = process.env.TOKEN;

export const sendEmail = async ({ name, email, subject, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass: TOKEN,
      },
    });

    const emailHtml = render(<EmailTemplate name={name} message={message} />);

    const mailOptions = {
      from: user,
      to: email,
      subject,
      html: emailHtml,
    };

    const sendMailConfirmation = await transporter.sendMail(mailOptions);
    return sendMailConfirmation;
  } catch (e) {
    throw new Error(e.message);
  }
};
