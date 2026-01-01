import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';

import path from 'path';
import { fileURLToPath } from 'url';
import resumeRoutes from './routes/resumeRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());

//connet db
connectDB();

//middleware
app.use(express.json());

app.use('/api/auth', userRouter);
app.use('/api/resume', resumeRoutes);

app.use(express.static(path.join(__dirname, 'uploads'),{
    setHeaders: (res, path) => {
        res.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    }
}));

//routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});