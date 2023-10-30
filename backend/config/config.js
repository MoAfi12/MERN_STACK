import dotenv from 'dotenv';


dotenv.config()

export const dbURL = process.env.DB_URL
export const port = process.env.PORT