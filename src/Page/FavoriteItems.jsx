import React, { useEffect, useState } from 'react'
import { images } from '../assets/data'
import { FaRegHeart } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';


const FavoriteItems = () => {
  const [loading,  setLoading] = useState(false)
  const [items, setItems] = useState(null)

  useEffect(()=>{
    setLoading(true)
    if(images){
      const popularItem = images.sort((a,b)=> b.totalLike - a.totalLike)
      setItems(popularItem.slice(0, 3))
      setLoading(false)
    }
  },[images])
  
  console.log(items)
  return (
    <div className='container'>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
         { loading ? 
            <p>Loading</p>          
         :<>         
        {items && items.map((item, index)=>
          <div key={index} className="relative mx-auto w-full group">
              <div className="w-full h-[286px]">
              <img src={item.thumble} alt="" className="w-full h-full rounded-xl" />
              </div>
              <div className="block absolute bg-black/30 h-full top-0 left-0 w-full">
                <div className=" flex items-center gap-2 justify-end mr-3 mt-2">
                <div className="  flex items-center justify-center w-6 h-6  rounded-sm ">
                  <FaRegHeart className='text-xl text-white ' /> / 
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
  )
}

export default FavoriteItems