import React from "react"
import { Link} from "gatsby"

const ProductCard = ({name,data}) => {
    return (<div className="grid grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md px-2 mb-2">
   
        <img className="rounded-t-lg col-span-1" src={data.img_url} alt="" />
  
    <div className="pl-5 w-full col-span-2">
 
            <div className="mb-2 mt-5 text-lg text-gray-900 font-sans font-medium">{name}</div>
            <div className="flex items-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <div className="ml-2 text-sm font-bold text-gray-900 "> {data.stars_max}</div>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline ">{data.reviewcount} reviews</a>
</div>
           
        <div className="mt-4 mb-4"><span className="text-lg font-sans font-bold mr-4">{data.latest_price} DH </span> <span className="text-md font-sans font-semibold text-gray-600"> {parseFloat(data.dist_from_average).toFixed(2)} % down from average price  </span></div>

        <div className="border border-2 border-green-500 grid grid-cols-2 gap-2 rounded-md py-2 font-sans mb-8">
        <div className="text-center text-green-600">Lowest Price: <span className="text-black font-bold">{data.min_price} DH </span></div>
        <div className="text-center text-red-600">Highest Price : <span className="text-black font-bold">{data.max_price} DH  </span></div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 font-sans  font-semibold">
        <a href={'https://jumia.ma'+data.href} target="_blank" className="flex justify-center py-2 px-3    text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            <div className="inline-flex items-center ">
           <span> Buy On Jumia</span>
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
        </a>
        <Link className="flex  items-center justify-center   text-center  text-white bg-blue-700 rounded-lg hover:bg-blue-800" to={'/pricehistory?id='+data.prod_id}><span>View Price History</span></Link>
        </div>
    </div>
</div>  );
}
 
export default ProductCard;