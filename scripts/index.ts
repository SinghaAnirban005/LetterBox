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
    to: "anirban@example.com",
    subject: "SMTP Drain Test",
    html: `
      <h1>Hello!</h1>
      <p>This email should appear in SMTP Drain.</p>
    `,
  });

  console.log("Email sent");
}

main().catch(console.error);