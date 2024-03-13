import React, { useState } from 'react'
import { images } from '../assets/data'
import { FaRegHeart } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const Media = () => {
  const [loading,  setLoading] = useState(false)

  return (
    <div className="">
    <div className="relative h-[80vh] bg-[url('https://w0.peakpx.com/wallpaper/266/626/HD-wallpaper-crescent-moon-art-cloud-luna-luminos-rock-sky-sea-stones-fantasy-water-blue.jpg')] bg-center bg-no-repeat bg-cover">
   
    <form className="absolute top-1/2 left-1/2 -translate-x-1/2 md:w-2/5 mx-auto">
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-white dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      className="block w-full p-4 ps-10  text-lg  text-white  bg-white/20 focus:ring-blue-500 focus:border-blue-500 "
      placeholder="Search Mockups, Logos..."
      required=""
    />   
  </div>
</form>
    </div>
    <div className='container'>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
         { loading ? 
            <p>Loading</p>          
         :<>         
        {images && images.map((item, index)=>
          <div key={index} className="relative mx-auto w-full group">
              <div className="w-full h-[286px]">
              <img src={item.thumble} alt="" className="w-full h-full rounded-xl" />
              </div>
              <div className="block absolute bg-black/30 rounded-lg h-full top-0 left-0 w-full">
                <div className=" flex items-center gap-2 justify-end mr-3 mt-2">
                <div className="  flex items-center justify-center w-6 h-6  rounded-sm ">
                  <FaRegHeart className='text-xl text-white ' />  
                </div>
                  <p className='text-white'>{item.totalLike}</p>
                
                </div>                            
              </div>
             <div className="absolute w-full bottom-0 left-0">
              <div className="flex items-center py-2 px-3 justify-between gap-3">
              <h3 className="text-xl text-white  font-bold">{item.title}</h3>
              <Link to={`/photo/${item.id}`} className="cursor-pointer flex items-center justify-center gap-2 text-white px-2 py-1 bg-gray-300/30 hover:bg-gray-500">
                <button className=''>Detail </button> 
                <MdArrowForwardIos /> 
              </Link>
              </div>
           
             </div>
                         
          </div>)}
          </>} 
        </div>
    </div>
    </div>

  )
}

export default Media