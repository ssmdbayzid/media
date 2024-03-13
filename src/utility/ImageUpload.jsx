
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from "react-icons/fi";


const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  }; 

  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };

  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };
  
const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };

const ImageUpload = ({setInputFiles, inputFiles}) => {

    const [files, setFiles] = useState([])

  useEffect(() => {
    setInputFiles(files)
  }, [files])

   const {getRootProps, getInputProps, isDrugActive} = useDropzone({
    accept: {
        'image/*' : []
    },
    onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })))
    }
   })


   const  thumbs = inputFiles && inputFiles.map(file => (
    <div style={thumb} key={file.name} className="">
        <div style={thumbInner}>
            <img src={file.preview} style={img} onLoad={()=> {URL.revokeObjectURL(file.preview)}} />
        </div>
    </div>
   ))

   useEffect(()=>{
    return () => files.forEach(file => URL.revokeObjectURL(file.preview))
   },[])

   
  return (
    <section className='w-full flex items-center flex-col justify-start '>
    <div className='w-full'>
        <label 
        htmlFor='"dropzone-file'
        {...getRootProps()}
        className='flex  flex-col items-center justify-center w-full border-[#1FB264]/40 border-4 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 '
        >
            <div className='flex flex-col items-center justify-center py-3 w-full'>
                <FiUploadCloud className='h-8 w-8 mb-2' />
                <p className='text-sm text-gray-500 mb-2 '>
                    <span>Click to upload</span> or drug ant drop
                </p>
                <p> SVG, PNG, JPG or GIF (MAX. 800 x 400px)</p>
            </div>
        </label>
    </div>
    <aside style={thumbsContainer}>
    {thumbs}
    </aside>
    </section>
  )
}

export default ImageUpload