import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route } from 'react-router-dom'
//import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from'./components/Contact/Contact'
import Github from './components/GitHub/Github'
import User from './components/User/User'
import { githubInfoLoader } from './components/GitHub/Github'
//import Home from './components/Home/Home'
// const router= createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       { 
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       },
//       {
//         path: "Github",
//         element: <Github/>
//       }


//     ]
//   }
// ])
const router= createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>,
<Route path='about' element={<About/>}/>,
<Route path='contact' element={<Contact/>}/>,
{/* <Route path='GitHub' element={<Github/>}/> */}
<Route path='user/:userid' element= {<User/>}/>,

<Route loader = {githubInfoLoader}
path='github' element={<Github/>}/>



</Route>


  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
