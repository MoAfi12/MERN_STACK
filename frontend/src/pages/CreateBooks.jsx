import axios from 'axios'
import React, { useState } from 'react'

function CreateBooks() {
  const[name , setName] = useState('')
  const[description , setDescription] = useState('')
  const[author , setAuthor] = useState('')
  const[publishYear , setPublishYear] = useState('')
  const[price , setPrice] = useState('')


const handleSved = async()=>{
  try{
       const data = {
    name,
    description,
    author,
    publishYear,
    price
   }
  const checkData = await axios.get("http://localhost:3000/api/books")
  const existingBooks = checkData.data
  const existingBook = existingBooks.find(book => book.name === name)
  if(existingBook){
    alert("this book already exist")
    return
  }
  else{
    const state = await axios.post("http://localhost:3000/api/books/register-book", data)
   console.log("the saved data" , state)

  }
}
    catch(error){
     console.log("error happened", error)
    }
  
  }


  return (
    <>
    <div className="bg-slate-100 md:w-[40%] mx-auto my-24">
      <div className="flex flex-col gap-3 px-4 py-4">
        <div className=" flex flex-col ">
           <label htmlFor="">name</label>
        <input type="text" placeholder='name of book' value={name} onChange={(e)=> setName(e.target.value)} />
        </div>
       <div className=" flex flex-col ">
          <label htmlFor="">description</label>
        <input type="text" placeholder='description of book' value={description} onChange={(e)=> setDescription(e.target.value)}/>
       </div>
      <div className=" flex flex-col "> 
       <label htmlFor="">author</label>
        <input type="text" placeholder='name author of book' value={author}  onChange={(e)=>setAuthor(e.target.value)}/>
      </div>
       <div className=" flex flex-col ">
<label abel htmlFor="">publish-year</label>
        <input type="number" placeholder='year of book' value={publishYear} onChange={(e)=> setPublishYear(e.target.value)}/>

       </div>
       <div className=" flex flex-col ">

         <label htmlFor="">price</label>
        <input type="number" placeholder='name of book' value={price} onChange={(e)=>setPrice(e.target.value)}/>
       </div>
       <button className='bg-blue-300' onClick={handleSved}>saved</button>
      </div>
    </div>
    
    </>
  )
}

export default CreateBooks