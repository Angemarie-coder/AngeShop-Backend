const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmail() {
  console.log('🔍 Testing Email Configuration...');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '***SET***' : 'NOT SET');
  console.log('FRONTEND_URL:', process.env.FRONTEND_URL);

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('❌ Email configuration missing!');
    console.log('Please check your .env file has:');
    console.log('EMAIL_USER=your-gmail@gmail.com');
    console.log('EMAIL_PASSWORD=your-app-password');
    return;
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log('✅ Transporter created successfully');

    // Verify connection
    await transporter.verify();
    console.log('✅ Email connection verified successfully');

    // Send test email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself for testing
      subject: 'Test Email - Ange Shop',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Ange Shop</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333; margin-bottom: 20px;">Email Test Successful! 🎉</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              This is a test email to verify that your email configuration is working correctly.
            </p>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              If you received this email, your Gmail configuration is working properly!
            </p>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            
            <p style="color: #999; font-size: 12px; text-align: center;">
              Sent at: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Check your inbox for the test email');

  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\n🔧 AUTHENTICATION ERROR - Common Solutions:');
      console.log('1. Make sure you\'re using an App Password (not your regular Gmail password)');
      console.log('2. Enable 2-Factor Authentication in your Gmail account');
      console.log('3. Generate a new App Password: Gmail → Settings → Security → App passwords');
      console.log('4. Make sure your .env file has the correct credentials');
    } else if (error.code === 'ECONNECTION') {
      console.log('\n🔧 CONNECTION ERROR - Check your internet connection');
    } else {
      console.log('\n🔧 OTHER ERROR - Check your .env file configuration');
    }
  }
}

testEmail();
