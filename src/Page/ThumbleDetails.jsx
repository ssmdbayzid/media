import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { images } from '../assets/data';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const ThumbleDetails = () => {
    const  [image, setImage] = useState(null);
    const [like, setLike] = useState(false)

    const {id} = useParams()
    useEffect(()=>{
        setImage(images.filter(item=> item.id == id))
    },[])

    console.log(image)
  return (
    <div className='max-w-[1170px] w-full lg:px-0 px-5 mx-auto flex justify-center'>
        {image && image.map((item => <div key={item.title} className="">
           
            <img src={item.thumble} alt="" />
            <div className="flex justify-between px-10">
                <p className='text-xl'>{item.title}</p>
                <p className='flex text-xl items-center gap-1 '><FaHeart className='text-red-600' /> ({item.totalLike})</p>
            </div>

            <form action="" className='mt-3'>
                <div>
                    <p htmlFor="like" className='flex items-center  text-lg'> Like <span className='text-red-600 px-2'>*</span> : {!like ? <FaRegHeart onClick={()=> setLike(!like)} className='cursor-pointer ml-2' /> : <p> <FaHeart onClick={()=> setLike(!like)} className='text-red-600 cursor-pointer ml-2' /></p> } </p>
                    <div className="mt-2">
                    <label htmlFor="comment" className='font-semibold'>Comment</label> <br />
                    <textarea name="" id="comment" cols="30" rows="3" className=' border-2 mt-2 w-full px-4 py-2'></textarea>

                    <button className='text-center w-full py-2 bg-blue-600 text-white'>Submit</button>                    
                    </div>
                    
                </div>
            </form>
        </div> ))}
        
    </div>
  )
}

export default ThumbleDetails