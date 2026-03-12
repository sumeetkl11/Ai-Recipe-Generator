import dotenv from 'dotenv';


import express from 'express';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || `http://localhost:${PORT}`,
    credentials: true
}));
  

// Middleware
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test routes
app.get('/', (req, res) =>{
    res.json({message: 'AI RECIPE GENERATOR API'});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`ENVIRONMENT: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Localhost: http://localhost:${PORT}`);
});

