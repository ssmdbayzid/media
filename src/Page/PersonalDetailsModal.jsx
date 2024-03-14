
import React from 'react'
import { useForm } from 'react-hook-form'
import { RxCross2 } from "react-icons/rx";

const PersonalDetailsModal = ({formData, setFormData, onClose}) => {
  const {register, handleSubmit, } = useForm()


  const onSubmit = async d => {console.log(d); onClose()}

  const handleChange = e => {
    setFormData(prevData => ({
      ...prevData, [e.target.name]: e.target.value
    }))
  }

    return (
     <div className="fixed bg-black/50 z-50 w-full h-full top-16 left-0 flex items-center justify-center">
     <div className=" w-full md:w-[400px]  bg-slate-400 p-2 rounded-lg ">
          <div className="flex items-center justify-between w-4/5 md:w-4/5 ml-auto py-5">
          <h2 className="text-center text-2xl font-bold uppercase">Personal Details</h2>
         
        </div>
     
      <form onSubmit={handleSubmit(onSubmit)} className=" px-3 py-2">
        <div>
          <label htmlFor="name" className=" text-lg font-light">
            Name
          </label>
          <input
          {...register("name", {required: true})}
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="name"
            className=" my-2 w-full py-1.5 px-2 bg-slate-200"
          />
        </div>
        <div>
          <label htmlFor="name" className=" text-lg font-light">
            Email
          </label>
          <input
          {...register("email", {required: true})}
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            className=" my-2 w-full py-1.5 px-2 bg-slate-200"
          />
        </div>
        <div>
          <label htmlFor="university" className=" text-lg font-light">
            Universiy
          </label>
          <input
          {...register("university", {required: true})}
            type="text"
            value={formData.university}
            onChange={handleChange}
            placeholder="university"
            className=" my-2 w-full py-1.5 px-2 bg-slate-200"
          />
        </div>
        <div>
          <label htmlFor="address" className=" text-lg font-light">
            Address
          </label>
          <input
          {...register("address", {required: true})}
            type="text"
            value={formData.address}
            onChange={handleChange}
            placeholder="address"
            className=" mt-2 mb-5 w-full py-1.5 px-2 bg-slate-200"
          />
        </div>
        <button className="bg-blue-600 py-1.5 w-full text-white">Save</button>
      </form>
    </div>
    </div>
  )
}

export default PersonalDetailsModal