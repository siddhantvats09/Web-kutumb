import nodemailer from "nodemailer";

export async function POST(req) {

  const { name, phone, email, company, companySize, planPurpose, businessType, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New CRM Demo Request from ${name}`,
    html: `
      <h2>New CRM Demo Request</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Company Size:</strong> ${companySize}</p>
      <p><strong>Purpose:</strong> ${planPurpose}</p>
      <p><strong>Business Type:</strong> ${businessType}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `
  };

  try {

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error) {

    console.error("Error sending email:", error);

    return new Response(
      JSON.stringify({ error: "Email failed" }),
      { status: 500 }
    );

  }
}