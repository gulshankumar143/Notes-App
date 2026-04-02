# Notes App

## Description

The Notes App is a full-stack note management application built with React for the frontend and Node.js/Express for the backend. It enables users to create, read, update, and delete notes, and stores data in MongoDB.

## Features

- Create notes with title, content, and status.
- View all notes in card or table view.
- Edit and delete notes.
- View note creation date details.
- Responsive UI with modal support.

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- React Icons

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

## Prerequisites

- Node.js installed
- npm installed
- MongoDB database available

## Setup

### 1. Clone the project

```bash
git clone https://github.com/gulshankumar143/Notes-App.git
cd Notes-App
```

### 2. Configure backend environment variables

Create a `.env` file inside `backend/` with the following values:

```env
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
FRONTEND_URL=http://localhost:5173
```

### 3. Install dependencies

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## Running the app

### Backend

```bash
cd backend
npm run dev
```

The backend API will run at:

```text
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm run dev
```

By default, Vite will serve the frontend at:

```text
http://localhost:5173
```

## Notes

- Make sure the backend is running before using the frontend application.
- The frontend expects the API at `http://localhost:5000/api/notes`.
- If you need a different frontend port, update `FRONTEND_URL` in `backend/.env`.

## Scripts

### Backend

- `npm run dev` — start backend with nodemon
- `npm start` — start backend with Node

### Frontend

- `npm run dev` — start Vite development server
- `npm run build` — build frontend for production
- `npm run preview` — preview the production build

## Troubleshooting

- If the frontend fails to load, verify `npm install` completed successfully in `frontend/`.
- If the backend fails to connect, verify `MONGO_URI` in `backend/.env`.
- Use browser console and terminal logs to check API request errors.
