import express from 'express'
import cors from 'cors'
import  { postContact }  from './controllers.js';
import dotenv from 'dotenv';
dotenv.config();

var app = express();
app.use(express.json());
app.use(cors());

app.post('/contact', postContact)

app.listen(process.env.PORT, () => {
  console.log(`Server is now listening to porter ${process.env.PORT}`)
})