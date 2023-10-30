import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditBooks() {
  const[name , setName] = useState('')
  const[description , setDescription] = useState('')
  const[author , setAuthor] = useState('')
  const[publishYear , setPublishYear] = useState('')
  const[price , setPrice] = useState('')
  const[loading , setloading] = useState(false)
 const{id} = useParams()
  const getData = async()=>{
    try {
        setloading(true)
          const response = await axios.get(`http://localhost:3000/api/books/${id}`)
    setName(response.data.name)
    setDescription(response.data.description)
    setPublishYear(response.data.publishYear)
    setPrice(response.data.price)
    setAuthor(response.data.author)
    setloading(false)
    } catch (error) {
        console.log("Error about fetch request", error)
    }
 
  }

  useEffect(()=>{
    getData()
  },[])

const handleEdit = async()=>{
  try{
       const data = {
    name,
    description,
    author,
    publishYear,
    price
   }
    await axios.put(`http://localhost:3000/api/books/${id}`, data)
   console.log("successful the data has updated")
   getData()
  }
    catch(error){
     console.log("error happened", error)
    }
  
  }


  return (
    <>
    {loading ? ( 
        <p>Loading ...</p>
    ):(
       <div className="bg-slate-100 w-[40%] mx-auto my-24">
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
       <button className='bg-blue-300' onClick={handleEdit}>saved</button>
      </div>
    </div>  
    )}
   
    
    </>
  )
}

export default EditBooks