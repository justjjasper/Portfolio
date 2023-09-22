import express from 'express'
import cors from 'cors'
import  { postContact }  from './controllers.js';
import dotenv from 'dotenv';
dotenv.config();

var app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.post('/contact', postContact)

app.listen(port, () => {
  console.log(`Server is now listening to porter ${process.env.PORT}`)
})