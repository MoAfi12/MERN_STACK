import express from 'express'
import connectDB from './config/db.js'
import useRouter from './routes/book.js'
import cors from 'cors'

const app = express()

app.use(express.json())

const whitelist = ['http://localhost:3000', 'http://localhost:5173', 'https://store-books.onrender.com/'];
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };  // Reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false };  // Disable CORS for this request
    }
    callback(null, corsOptions);  // Callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

app.use('/api', useRouter)
  



connectDB()

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
}) 