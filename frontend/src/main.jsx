import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DeleteBooks from './pages/deleteBooks.jsx';
import CreateBooks from './pages/createBooks.jsx';

import ListBooks from './components/ListBooks.jsx';
import InfoBook from './components/InfoBook.jsx';
import EditBooks from './components/EditBook.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'books/edit-book/:id',
        element: <EditBooks />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'books/info-book/:id',
        element: <InfoBook />,
      },
      {
        path: '/list-books',
        element: <ListBooks/>,
      },
      
      {
        path: 'books/create-book',
        element: <CreateBooks />,
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
