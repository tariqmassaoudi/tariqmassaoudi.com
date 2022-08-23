/* This example requires Tailwind CSS v2.0+ */
import * as React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div>
    <div className="mx-[79px] max-w-container px-4 sm:px-6 lg:px-8">
   
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
             
              <Link to='/' className="text-2xl font-sans font-bold text-black">Tariq Massaoudi</Link>
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
          <Link to='/' className="text-base font-medium font-sans text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link to='/articles' className="text-base font-sans font-medium text-gray-500 hover:text-gray-900">
              Articles
            </Link>
            <Link href="/quotes" className="text-base font-sans font-medium text-gray-500 hover:text-gray-900">
              Quotes
            </Link>
            <Link href="/about" className="text-base font-sans font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
          </nav>
       
        </div>
    </div>
    <div className="border-b-2 border-gray-100"></div>
    </div>
  )
}