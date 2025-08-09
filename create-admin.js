const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

async function createAdminUser() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ange-shop');
    console.log('✅ Connected to MongoDB');

    const adminEmail = 'angemarieuwineza1@gmail.com';
    const adminPassword = 'Angem123';
    const adminName = 'Fille';

    // Check if admin with this specific email already exists
    const existingAdmin = await User.findOne({ email: adminEmail });
    
    if (existingAdmin) {
      // Update existing admin user with new credentials
      existingAdmin.name = adminName;
      existingAdmin.password = adminPassword;
      existingAdmin.role = 'admin';
      existingAdmin.isEmailVerified = true;
      
      await existingAdmin.save();
      console.log('✅ Admin user updated successfully!');
      console.log('📧 Email: ' + adminEmail);
      console.log('🔑 Password: ' + adminPassword);
      console.log('⚠️  Please change the password after first login!');
    } else {
      // Create new admin user
      const adminUser = new User({
        name: adminName,
        email: adminEmail,
        password: adminPassword,
        role: 'admin',
        isEmailVerified: true, // Admin doesn't need email verification
      });

      await adminUser.save();
      console.log('✅ Admin user created successfully!');
      console.log('📧 Email: ' + adminEmail);
      console.log('🔑 Password: ' + adminPassword);
      console.log('⚠️  Please change the password after first login!');
    }

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('👋 Disconnected from MongoDB');

  } catch (error) {
    console.error('❌ Error creating/updating admin user:', error);
    process.exit(1);
  }
}

createAdminUser();
