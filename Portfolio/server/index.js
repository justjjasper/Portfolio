import express from 'express'
import cors from 'cors'
import  { postContact }  from './controllers.js';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import https from 'https'
import path from 'path';
dotenv.config();

var app = express();
app.use(express.json());
app.use(cors());

app.post('/contact', postContact)

// Paths to your SSL certificate and key files from environment variables
const sslOptions = {
  key: readFileSync('/home/ubuntu/key'),
  cert: readFileSync('/home/ubuntu/cert'),
};

// app.listen(process.env.PORT, () => {
//   console.log(`Server is now listening to porter ${process.env.PORT}`)
// })

// Start the HTTPS server
const PORT = process.env.PORT;
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Secure server running on port ${PORT}`);
});