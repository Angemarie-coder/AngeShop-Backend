const path = require('path');
const fs = require('fs');

console.log('🔍 Debugging Environment Variables...');
console.log('Current directory:', process.cwd());
console.log('.env file exists:', fs.existsSync('.env'));

if (fs.existsSync('.env')) {
  console.log('.env file content:');
  console.log(fs.readFileSync('.env', 'utf8'));
}

console.log('\n--- Before dotenv ---');
console.log('EMAIL_USER:', process.env.EMAIL_USER);

console.log('\n--- Loading dotenv ---');
require('dotenv').config();

console.log('\n--- After dotenv ---');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('JWT_SECRET:', process.env.JWT_SECRET);
