import express from 'express'
import connectDB from './config/db.js'
import useRouter from './routes/book.js'
import cors from 'cors'

const app = express()

app.use(express.json())

const whitelist = ['http://localhost:3000', 'http://localhost:4173'];

// Configure CORS middleware with whitelist
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Deny the request
    }
  },
};

app.use(cors(corsOptions));


var whil


app.use('/api', useRouter)
  



connectDB()

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
}) 