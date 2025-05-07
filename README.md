# Next.js Blog Application

A modern blog application built with Next.js, MongoDB, and Tailwind CSS.

## Features

- Blog post creation and management
- Image upload functionality
- Responsive design with Tailwind CSS
- MongoDB integration for data storage

## Deployment on Render.com

### Prerequisites

1. A Render.com account
2. MongoDB database (you can use MongoDB Atlas)
3. Your project pushed to a Git repository

### Deployment Steps

1. Log in to your Render.com dashboard
2. Click on "New +" and select "Web Service"
3. Connect your Git repository
4. Configure your web service:
   - Name: `next-blog-app`
   - Environment: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

### Environment Variables

Add the following environment variables in your Render.com dashboard:

- `MONGODB_URI`: Your MongoDB connection string
- `NODE_ENV`: Set to `production`

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update the variables
4. Run the development server:
   ```bash
   npm run dev
   ```

## Tech Stack

- Next.js 14.0.4
- MongoDB with Mongoose
- Tailwind CSS
- React 18
- Axios for API calls

## Project Structure

- `/app` - Next.js application routes and API endpoints
- `/Components` - React components
- `/public` - Static assets and uploaded images
- `/lib` - Database configuration and models