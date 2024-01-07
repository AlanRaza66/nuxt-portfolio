import Mail from "nodemailer/lib/mailer";
import { SMTPTransporter } from "~/server/utils/emails/SMTPTransporter";

const sendEmail = async ({
  from,
  to,
  subject,
  body, // can be an html
  attachments,
}: {
  from: string;
  to: string;
  subject: string;
  body: string;
  attachments?: Mail.Attachment[] | undefined;
}) => await
SMTPTransporter.sendMail({
  from,
  to,
  subject,
  text: body,
  attachments,
});

export { sendEmail };