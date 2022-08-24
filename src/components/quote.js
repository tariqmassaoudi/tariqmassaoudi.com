import * as React from "react"


export default function Quote({author,body,image}) {
    return (
<div>
    <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-1 text-gray-800 mb-24" >
        <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
            <img src={image} alt=""/>
            </div>
        </div>
        <div className="w-full mb-5">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p className="text-xl text-center font-sans px-2">{body}</p>
            <div className="text-2xl text-indigo-500 text-sans text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div className="w-full">
            <p className="text-indigo-500 font-sans font-semibold text-center">{author}</p>
        </div>
    </div>


</div>
    )
  }