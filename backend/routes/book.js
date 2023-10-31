import express from 'express';
import { addBook, deletedBooks, getBooks, getSpecialBooks, updatedBooks} from '../controller/bookController.js';



const useRouter = express.Router()
 
useRouter.get('/books' , getBooks)
useRouter.get('/books/:id' , getSpecialBooks)
useRouter.put('/books/:id' , updatedBooks) 
useRouter.post('/books/register-book', addBook)
useRouter.delete('/books/:id',deletedBooks)


export default useRouter 