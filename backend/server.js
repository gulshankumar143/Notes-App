import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import notesRoutes from './routes/noteRoutes.js';
import cors from 'cors';
const app = express();
//loading env variables
dotenv.config();
//middleware
const corsOptions={
    origin:process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}
app.use(cors(corsOptions));

//connecting to db
connectDB();
app.use(express.json());
const port = process.env.PORT || 5000;
app.use('/api/notes',notesRoutes);

app.listen(
    port,
    () => console.log(`server is running on port ${port}`)
);