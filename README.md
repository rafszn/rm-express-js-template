# RM Studio ExpressJS Template

This template provides a minimal Express + MongoDB setup with common utilities pre-configured.

## Features

- MongoDB connection with Mongoose
- JWT authentication (access & refresh tokens)
- Nodemailer for emails
- Multer for file uploads
- Cloudinary integration
- Input validation & middleware setup
- Predefined routing structure

## Environment Variables

Create a `.env` file in the root with the following values:

MONGO_URL=your_mongo_connection_string
ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_KEY=your_cloudinary_key
CLOUD_SECRET=your_cloudinary_secret
NODE_ENV=development
EMAIL= your_email
EMAIL_APP_PASSWORD= your_email_password
EMAIL_HOST= your_email_host

## Getting Started

1. Clone the repository:
   - git clone https://github.com/rafszn/rm-express-js-template.git
2. Run:
   - npm install
   - npm run dev

## Free Hosting

Can be hosted on Vercel and Render as is. config for vercel already included.