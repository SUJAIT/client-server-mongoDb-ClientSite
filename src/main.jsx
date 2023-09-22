
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Main from './Component/Main.jsx';
import Update from './Component/Update.jsx';
import Users from './Component/Users.jsx';
import './index.css';



const router = createBrowserRouter([
 
  {
    path:"/",
    element:<Main></Main>,
    children:[

      {
    path: "/app",
    element: <App></App>,

  },
  {
    path:"/users",
    element:<Users></Users>,
    loader:()=>fetch('http://localhost:5000/users')
  },
  {
    path:'/update/:id',
    element:<Update></Update>,
    loader:({params})=> fetch(`http://localhost:5000/users/${params.id}`)
  }
    ]
},
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
