import nodemailer from 'nodemailer';

export const prerender = false;

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    console.log('收到表單數據:', { name, email, message });
    
    // 創建 Nodemailer 傳輸器 (使用 Gmail 為例)
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // 使用預設的服務
      auth: {
        user: 'jisyuan.tech@gmail.com',  // 替換為你的 Gmail
        pass: '0502@Rylee'  // 使用 Google 應用程式密碼，不是你的常規密碼
      }
    });
    
    // 郵件選項
    const mailOptions = {
      from: 'jisyuan.tech@gmail.com',
      to: 'jisyuan.js@gmail.com',  // 你想接收聯繫表單內容的郵箱
      subject: `來自網站的訊息: ${name}`,
      text: `
        姓名: ${name}
        郵箱: ${email}
        
        訊息:
        ${message}
      `,
      html: `
        <h3>來自網站的新訊息</h3>
        <p><strong>姓名:</strong> ${name}</p>
        <p><strong>郵箱:</strong> ${email}</p>
        <p><strong>訊息:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };
    
    // 發送郵件
    const info = await transporter.sendMail(mailOptions);
    console.log('郵件已發送:', info.response);
    
    return new Response(
      JSON.stringify({ success: true, message: '訊息已成功發送！' }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('發送郵件時出錯:', error);
    
    return new Response(
      JSON.stringify({ success: false, message: `發送訊息時出錯: ${error.message}` }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}