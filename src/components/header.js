/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from "react"
import { Link } from "gatsby"

export default function Header() {
  const [hidden,setHidden]=useState(true)
  const handleClick=()=>{
setHidden(!hidden)
  }
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <Link to='/' className="text-2xl font-['Fuzzy_Bubbles'] font-bold text-green-800 ">Tariq Massaoudi</Link>
    <button onClick={()=>handleClick()}  data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center  ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className={hidden?"w-full font-sans md:flex md:items-center md:w-auto md:block hidden":"w-full font-sans md:flex md:items-center md:w-auto md:block"} id="navbar-default">
      <ul className="list-none flex  flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link  to='/'   className="block text-base py-2 pr-4 pl-3 text-white  md:bg-transparent text-gray-500 hover:text-gray-900 md:p-0 dark:text-white" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to='/articles' className="block text-base py-2 pr-4 pl-3 text-gray-500 hover:text-gray-900   md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Articles</Link>
        </li>
        <li>
          <Link to="/quotes" className="block text-base py-2 pr-4 pl-3 text-gray-500 hover:text-gray-900  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Quotes</Link>
        </li>
        <li>
          <Link to='/about' className="block text-base py-2 pr-4 pl-3 text-gray-500 hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}