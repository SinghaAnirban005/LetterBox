import nodemailer from "nodemailer";

async function main() {
  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 1025,
    secure: false,

    logger: true,
    debug: true
  });

  await transporter.sendMail({
    from: "test@smtp-drain.dev",
    to: "anirban20@gmail.com",
    subject: "SMTP Drain Test",
    html: `
      <h1>HI there!</h1>
      <p>I hope you are doing well.</p>
    `,
  });

  console.log("Email sent");
}

main().catch(console.error);