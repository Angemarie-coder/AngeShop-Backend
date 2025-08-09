const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: "Handmade Crochet Blanket",
    description: "Beautiful handcrafted crochet blanket made with premium yarn. Perfect for cozy evenings and home decoration.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&h=500&fit=crop",
    category: "crochet",
    inStock: true,
    stockQuantity: 15,
    tags: ["blanket", "crochet", "handmade", "home-decor"]
  },
  {
    name: "Knitted Winter Scarf",
    description: "Warm and soft knitted scarf perfect for cold weather. Made with 100% wool for maximum comfort.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop",
    category: "knitted",
    inStock: true,
    stockQuantity: 25,
    tags: ["scarf", "knitted", "winter", "accessories"]
  },
  {
    name: "Crochet Market Bag",
    description: "Eco-friendly crochet market bag. Strong and durable, perfect for shopping and carrying groceries.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500&h=500&fit=crop",
    category: "crochet",
    inStock: true,
    stockQuantity: 30,
    tags: ["bag", "crochet", "eco-friendly", "shopping"]
  },
  {
    name: "Handmade Knitted Hat",
    description: "Cozy knitted hat with a modern design. Perfect for keeping warm during winter months.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=500&fit=crop",
    category: "knitted",
    inStock: true,
    stockQuantity: 20,
    tags: ["hat", "knitted", "winter", "accessories"]
  },
  {
    name: "Crochet Coasters Set",
    description: "Set of 6 beautiful crochet coasters. Protect your furniture while adding a touch of handmade charm.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&h=500&fit=crop",
    category: "home-decor",
    inStock: true,
    stockQuantity: 40,
    tags: ["coasters", "crochet", "home-decor", "set"]
  },
  {
    name: "Knitted Baby Booties",
    description: "Adorable knitted booties for babies. Soft and comfortable, perfect for little feet.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop",
    category: "knitted",
    inStock: true,
    stockQuantity: 35,
    tags: ["baby", "booties", "knitted", "gift"]
  },
  {
    name: "Crochet Wall Hanging",
    description: "Beautiful wall hanging made with intricate crochet patterns. Perfect for home decoration.",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500&h=500&fit=crop",
    category: "home-decor",
    inStock: true,
    stockQuantity: 12,
    tags: ["wall-hanging", "crochet", "home-decor", "art"]
  },
  {
    name: "Handmade Knitted Gloves",
    description: "Warm and comfortable knitted gloves. Perfect for cold weather and outdoor activities.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=500&fit=crop",
    category: "knitted",
    inStock: true,
    stockQuantity: 28,
    tags: ["gloves", "knitted", "winter", "accessories"]
  },
  {
    name: "Crochet Plant Hanger",
    description: "Elegant crochet plant hanger. Perfect for displaying your favorite plants and adding greenery to your space.",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&h=500&fit=crop",
    category: "home-decor",
    inStock: true,
    stockQuantity: 18,
    tags: ["plant-hanger", "crochet", "home-decor", "plants"]
  },
  {
    name: "Knitted Headband",
    description: "Stylish knitted headband. Keep your ears warm while looking fashionable.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop",
    category: "accessories",
    inStock: true,
    stockQuantity: 45,
    tags: ["headband", "knitted", "accessories", "winter"]
  },
  {
    name: "Crochet Table Runner",
    description: "Elegant crochet table runner. Add a touch of sophistication to your dining table.",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500&h=500&fit=crop",
    category: "home-decor",
    inStock: true,
    stockQuantity: 22,
    tags: ["table-runner", "crochet", "home-decor", "dining"]
  },
  {
    name: "Handmade Knitted Socks",
    description: "Comfortable and warm knitted socks. Perfect for cold weather and cozy days at home.",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=500&fit=crop",
    category: "knitted",
    inStock: true,
    stockQuantity: 33,
    tags: ["socks", "knitted", "winter", "comfort"]
  }
];

async function seedData() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ange-shop');
    console.log('✅ Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('✅ Sample products seeded successfully!');

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('👋 Disconnected from MongoDB');

  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
}

seedData();
