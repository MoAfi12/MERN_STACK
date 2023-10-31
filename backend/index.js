import express from 'express'
import connectDB from './config/db.js'
import useRouter from './routes/book.js'
import cors from 'cors'

const app = express()

app.use(express.json())


app.use(cors());

app.use('/api', useRouter)
  



connectDB()

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
}) 