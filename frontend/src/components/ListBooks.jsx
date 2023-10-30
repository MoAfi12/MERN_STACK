import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


function ListBooks() {
  const[loading , setLoding] = useState(false);
  const [bookData ,  setBookData] = useState([])

  const fetchData = async ()=>{
    try{
      setLoding(true) 
const response = await axios.get("http://localhost:3000/api/books")
setBookData(response.data.reverse());
console.log("Book data:", response.data);
setLoding(false)
console.log(response.data)
    }catch(error){
      console.log(error.message)
    }


  }

useEffect (()=>{
  console.log("useEffect triggered");
fetchData()
}, [])


const handleDelete = async(id)=>{

    try {
        alert("are sure you want to delete")
        await axios.delete(`http://localhost:3000/api/books/${id}`)
    console.log("success deleted")
    fetchData()
    } catch (error) {
        console.log("happened error about deleted", error.message)
    }
    
}


  return (
    <>
   
  {loading ? (
      <p>Loading...</p>
    ) : (
        <>
         <h1>list of books</h1>
      <ul className='space-y-5'>
      {bookData.map((book) => (
       <>
       <div className="bg-slate-50 p-5  md:w-[70%] mx-auto border py-2" key={book._id}>
       <div className="">
         <div className="">
               <h1 key={book._id}><span className='font-semibold'>name book: </span>{book.name}</h1>
       <p> <span className='font-semibold'>description of book: </span>{book.description}</p>
         </div>
         <div className="">
          <h3><span className='font-semibold'>author of book: </span>{book.author}</h3>
          <p> <span className='font-semibold'> publish of year: </span>{book.publisher}</p>
         </div>
         <div className="">
            <h5 className='text-green-500 font-semibold'><span className='font-semibold text-black'>price: </span>{book.price}$</h5>
         </div>
      </div>
      <div className=" space-x-2">
        <Link to={`/books/edit-book/${book._id}`}> <button className='bg-green-400 text-lg px-2 py-2 rounded-md hover:cursor-pointer'>Edit</button></Link>
        <button className='bg-red-500 text-lg px-2 py-2 rounded-md hover:cursor-pointer' onClick={() => handleDelete(book._id)}>Delete </button>
        <Link to={`/books/info-book/${book._id}`}><button className='bg-slate-300 text-lg px-2 py-2 rounded-md hover:cursor-pointer'>info</button></Link>
    
      </div>
      </div>
       </>
     
))}
      </ul>
      </>
    )}
    </>
  )
}

export default ListBooks