export const prerender = false; // Disable prerendering for this endpoint

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would add code to send the email using nodemailer or another service
    
    return new Response(
      JSON.stringify({ success: true, message: '訊息已成功發送！' }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: '發送訊息時出錯，請稍後再試。' }),
      { status: 500 }
    );
  }
}