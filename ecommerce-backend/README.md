README for Backend Application

# E-Commerce Backend

This is the backend application for an e-commerce platform. It is built using Node.js and Express, with MongoDB as the database. This application provides a RESTful API for user authentication, product management, and order processing.

## Features

- User Authentication and Authorization using JWT
- Role-based access control (Customer, Admin, Superadmin)
- User registration, login, and profile management
- CRUD operations for products
- Order creation, updating, and retrieval
- Input validation and data sanitization
- Centralized error handling and logging

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- bcrypt for password hashing

## Prerequisites

- Node.js installed
- MongoDB installed and running

## Install dependencies

- npm install

## Start the server

- npm start

## API Endpoints

- Auth

   - POST /api/auth/register - Register a new user
   - POST /api/auth/login - Login a user
   - GET /api/auth/profile - Get user profile

- Products
 
   - POST /api/products - Create a new product
   - GET /api/products - Get all products
   - GET /api/products/:id - Get a single product
   - PUT /api/products/:id - Update a product
   - DELETE /api/products/:id - Delete a product

- Orders

   - POST /api/orders - Create a new order
   - GET /api/orders - Get all orders
   - GET /api/orders/:id - Get a single order
   - PUT /api/orders/:id - Update an order

