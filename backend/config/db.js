import dotenv from 'dotenv';
dotenv.config();

import pkg from 'pg';
const {Pool} = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:process.env.DATABASE_URL ? {
        rejectUnauthorized: false
    } : false
});

pool.on('connect', () => {
    console.log('Connected to Neon postgres database');
});

pool.on('error', (err) =>{
    console.error('Database error:', err);
    process.exit(- 1);
})

export default {
    query: (text,param) => pool.query(text,param)
    ,pool
    };
