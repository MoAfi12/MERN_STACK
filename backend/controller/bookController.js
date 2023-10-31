import Book from "../model/bookModel.js";



export const getBooks = async(req , res)=>{

    try {

      const book = await Book.find({});
      if(book.length === 0) {
        return res.status(404).send({message: "no books are founded"})
      }
      
        res.status(200).send(book)
    } catch (error) {
        console.log("the books not exist", error);
    }

}
export const getSpecialBooks = async(req , res)=>{

    try {
        const{id} = req.params
      const book = await Book.findById(id);
      if(!book){
        return res.status(404).send({message: "sorry we can't founded",})
      }

      if(book.length === 0) {
        return res.status(404).send({message: "no books are founded"})
      }
      
        res.status(200).send(book)
    } catch (error) {
        console.log("the books not exist", error.message);
    }

}
export const updatedBooks = async(req , res)=>{

    try {
     
        const{id} = req.params
      const updateBook = await Book.findByIdAndUpdate(id, req.body);
      if(!updateBook){
        return res.status(404).send({message: "sorry we can't founded",})
      }

      if(updateBook.length === 0) {
        return res.status(404).send({message: "no books are founded"})
      }
      
        res.status(200).send({message: "successfully updated books" , updateBook})
    } catch (error) {
        console.log("the books not exist", error.message);
    }
 
}
export const deletedBooks = async(req , res)=>{

    try {
     
        const{id} = req.params
      const updateBook = await Book.findByIdAndDelete(id);
      if(!updateBook){
        return res.status(404).send({message: "sorry we can't founded",})
      }

      if(updateBook.length === 0) {
        return res.status(404).send({message: "no books are founded"})
      }
      
        res.status(200).send({message: "successfully deleted books"})
    } catch (error) {
        console.log("the books not exist", error.message);
    }

}


export const addBook = async(req, res) => {
 try {
    const {name , description , author , price , publishYear} = req.body
   const bookExist = await Book.findOne({$or: [
    {name: name.toLowerCase()}
   ]})
     
   if(bookExist){
    if(bookExist.name === name.toLowerCase()){
    return res.status(400).send({message: "the book already exist"})
   }
}

   const newBook = new Book({
    name,
    description,
    author,
    price,
    publishYear
   })
    
   await newBook.save()

   res.status(201).send({message: "the book is added" , newBook})

 } catch (error) {
    console.log("error adding book", error.message);
 }


}