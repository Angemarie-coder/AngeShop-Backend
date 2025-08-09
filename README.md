# Ange Shop Backend

Express.js backend API for the Ange Shop e-commerce application.

## Features

- **User Authentication**: JWT-based registration and login
- **Product Management**: CRUD operations for products with search and filtering
- **Order Management**: Create and manage user orders
- **Admin Routes**: Protected routes for admin operations
- **MongoDB Integration**: Mongoose ODM for database operations

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/ange-shop
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   PORT=5000
   ```

3. **Seed the database:**
   ```bash
   npm run seed
   ```

4. **Start the server:**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Products
- `GET /api/products` - Get all products (with search, filter, pagination)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Orders
- `GET /api/orders` - Get user orders (protected)
- `GET /api/orders/:id` - Get single order (protected)
- `POST /api/orders` - Create new order (protected)
- `PATCH /api/orders/:id/status` - Update order status (admin only)

### Health Check
- `GET /api/health` - Server health check

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/ange-shop` |
| `JWT_SECRET` | Secret key for JWT tokens | Required |
| `PORT` | Server port | `5000` |

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data

## Database Models

### User
- `name` - User's full name
- `email` - Unique email address
- `password` - Hashed password
- `isAdmin` - Admin privileges flag

### Product
- `name` - Product name
- `description` - Product description
- `price` - Product price
- `image` - Product image URL
- `category` - Product category
- `inStock` - Stock availability
- `stockQuantity` - Available quantity
- `tags` - Product tags for search

### Order
- `user` - Reference to user
- `items` - Array of order items
- `totalAmount` - Order total
- `status` - Order status
- `shippingAddress` - Shipping information
- `paymentStatus` - Payment status

## CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (Next.js frontend)
- Any origin in development

## Error Handling

All endpoints include proper error handling with appropriate HTTP status codes and error messages.

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected routes with middleware
- Input validation and sanitization
- CORS protection
