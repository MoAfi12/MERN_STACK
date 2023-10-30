import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function InfoBook() {

    const[loading, setLoding] = useState(false);
    const [bookData,  setBookData] = useState([])
    const{id} = useParams()

    const navigate = useNavigate()

     const fetchData = async ()=>{
      try{
        setLoding(true)
       const respose = await axios.get(`http://localhost:3000/api/books/${id}`)
       console.log("data" , respose.data)
       setBookData(respose.data)
       setLoding(false)
      }catch(error){
        console.log(error.message)
      }
    }
  useEffect(()=>{
    fetchData()
  },[])

  const handleBack = ()=>{
    navigate('/list-books')
  }

  return (
    <>
    {loading ? (
      <p>Loading...</p>
    ) : (
        <>
         <h1>information of book ...</h1>
      <ul className='space-y-5'>
     
         <button className='bg-blue-300 p-2 rounded-md' onClick={handleBack}>⬅ back home</button>
       <div className="bg-slate-50 p-5 flex justify-between md:w-[50%] mx-auto border py-5 relative" key={bookData._id}>
       
         <div className="">
               <h1 key={bookData._id}> <span className="font-semibold">name of book: </span>{bookData.name}</h1>
       <p> <span className="font-semibold">description: </span>{bookData.description}</p>
     
          <h3> <span className="font-semibold">Author book: </span>{bookData.author}</h3>
          <p> <span className="font-semibold">publish-year: </span>{bookData.publishYear}</p>
         </div>
         <div className="">
            <h5 className='text-green-500 font-semibold absolute bottom-2 right-6'><span className='text-black'>price: </span>{bookData.price}$</h5>
         </div>
      </div>
    
     
    
     

      </ul>
      </>
    )}
    </>
  )
}

export default InfoBook