# Ange Shop API Testing Guide

## Base URL
```
http://localhost:5000/api
```

## 1. Authentication Endpoints

### 1.1 Register User
**POST** `/auth/register`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123"
}
```

### 1.2 Login User
**POST** `/auth/login`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

### 1.3 Login Admin
**POST** `/auth/login`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "email": "admin@angeshop.com",
  "password": "admin123456"
}
```

### 1.4 Verify Email
**GET** `/auth/verify-email/{token}`

### 1.5 Get Current User
**GET** `/auth/me`

**Headers:**
```
Authorization: Bearer {your_token}
```

### 1.6 Create User (Admin Only)
**POST** `/auth/create-user`

**Headers:**
```
Content-Type: application/json
Authorization: Bearer {admin_token}
```

**Body:**
```json
{
  "name": "New User",
  "email": "newuser@example.com",
  "password": "password123",
  "role": "client",
  "skipEmailVerification": false
}
```

### 1.7 Get All Users (Admin Only)
**GET** `/auth/users`

**Headers:**
```
Authorization: Bearer {admin_token}
```

**Query Parameters:**
- `search` - Search by name or email
- `role` - Filter by role (client, admin)
- `status` - Filter by status (active, suspended, pending)
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

**Example:**
```
GET /auth/users?search=john&role=client&status=active&page=1&limit=10
```

## 2. Product Endpoints

### 2.1 Get All Products
**GET** `/products`

### 2.2 Get Products with Filters
**GET** `/products?search=crochet&category=crochet&sort=price-low&page=1&limit=10`

### 2.3 Create Product (Admin Only)
**POST** `/products`

**Headers:**
```
Content-Type: application/json
Authorization: Bearer {admin_token}
```

**Body:**
```json
{
  "name": "Test Product",
  "description": "A beautiful test product",
  "price": 29.99,
  "image": "https://example.com/image.jpg",
  "category": "crochet",
  "stockQuantity": 10
}
```

## 3. Health Check

### 3.1 Health Check
**GET** `/health`

## Testing Steps

### Step 1: Setup
1. Make sure MongoDB is running
2. Start the backend: `npm run dev`
3. Create admin user: `npm run create-admin`

### Step 2: Test Registration
1. Register a new user
2. Check your email for verification link
3. Click the verification link

### Step 3: Test Login
1. Login with the verified user
2. Save the token for other requests
3. Test admin login

### Step 4: Test Products
1. Get all products (no auth required)
2. Create a product (admin only)

## Environment Variables Setup

Make sure your `.env` file has:
```
MONGODB_URI=mongodb://localhost:27017/ange-shop
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
FRONTEND_URL=http://localhost:3000
```
