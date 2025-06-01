// src/utils/email.js
async function sendEmail(props) {
  // 動態導入 nodemailer
  const nodemailer = await import("nodemailer");
  
  let transporter = nodemailer.default.createTransporter({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  let emailMessage = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `網站聯絡表單 - 來自 ${props.name}`,
    html: `
      <h2>來自網站的聯絡訊息</h2>
      <p><strong>姓名：</strong> ${props.name}</p>
      <p><strong>電子郵件：</strong> ${props.email}</p>
      <p><strong>訊息內容：</strong></p>
      <p>${props.message.replace(/\n/g, '<br>')}</p>
    `,
  };

  let info = await transporter.sendMail(emailMessage);
  return info;
}

export { sendEmail };