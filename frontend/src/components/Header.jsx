import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="bg-gray-300">
      <div className="flex justify-between md:w-[70%] mx-auto px-2 py-2 ">
      <div className="">
        <Link to="/" className='font-semibold text-xl'>Logo</Link>
      </div>
      <nav>
        <ul className='flex gap-14 font-semibold text-xl'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list-books">Books</Link>
          </li>
          <li>
            <Link to="books/create-book">Create</Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
    </>
  )
}

export default Header