import express from 'express'
import connectDB from './config/db.js'
import useRouter from './routes/user.js'


const app = express()

app.use(express.json())


app.use('/api', useRouter)


connectDB()

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})