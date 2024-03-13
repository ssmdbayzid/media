import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import ImageUpload from '../utility/ImageUpload'
const AddMedia = () => {
const {register, reset, handleSubmit, formState: { errors },} = useForm()
const [inputFiles, setInputFiles] = useState(null)
const [inputFilesError, setInputFilesError] = useState("")


const submit = async d => {
if (!inputFiles?.length) return   setInputFilesError("Photo is required")

const formData = new FormData()
// Append each file individually
inputFiles.forEach(file => formData.append("file", file))

formData.append("cloud_name", "dxspmmowc")
formData.append("upload_preset", "walmart")

const url = "https://api.cloudinary.com/v1_1/dxspmmowc/image/upload"

const data = await fetch(url, {
 method: "POST",
 body: formData,
})
.then(res => res.json())

// console.log(data)
alert(data.error)
console.log(d, data?.secure_url)
}

  return (    
    <>       
 <div className="bg-white w-[600px] mx-auto my-0 p-5">
  <h3 className='text-center text-2xl font-semibold mb-1'>Add Image</h3> 
  <form action="" onSubmit={handleSubmit(submit)}>
    <div className='mb-3'>
      <label htmlFor="title" className='text-xl font-semibold'>Title</label>
      <input 
      {...register("title", {required: true})}
      type="text" id='title' className='w-full mt-2 py-1.5 px-5 border-2' />
    </div>
    <div className='mb-5'>
      <label htmlFor="description" className='text-xl font-semibold'>Description</label>
      
      <textarea {...register("description", {required: true})} rows={3} type="text" id='description' className='w-full mt-2 py-2 px-5 border-2' />
    </div>
    <ImageUpload setInputFiles={setInputFiles} inputFiles={inputFiles} /> 

  {/* <div className="mb-10 border-4 border-dashed border-[#1FB264] relative h-48 flex items-center justify-center">
    <input className="absolute m-0 p-0 w-full h-full opacity-0 cursor-pointer" type='file' accept="image/*" />
    <div className="text-center">
      <h3 className="font-light text-uppercase text-[#15824B] py-60px">Drag and drop a file or select add Image</h3>
    </div>
  </div>   */}
  <button className="w-full m-0 text-white bg-[#1FB264] border-none py-[10px] rounded-4px border-b-4 border-[#15824B] transition-all duration-200 uppercase font-bold focus:outline-none hover:bg-[#1AA059] hover:text-white active:border-0 active:transition-all">
    Submit
  </button>
  </form>
 
</div>
    </>
   
  )
}

export default AddMedia