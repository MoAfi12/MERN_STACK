import express from 'express';
import { getUser } from '../controller/user.js';



const useRouter = express.Router()

useRouter.get('/' , getUser)


export default useRouter