import React, { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../context/AuthContext'
import { useForm } from 'react-hook-form'

const Signup = () => {
  const {signup, user, googleSignIn } = useContext(AuthContext)
  const {register, handleSubmit} =  useForm()

  
  const onSubmit = async d => {
    console.log(d)
    const result = await signup(d.email, d.password)
    console.log(result)
  }
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[url('https://static.vecteezy.com/system/resources/thumbnails/004/243/021/small/abstract-template-background-white-and-bright-blue-squares-overlapping-with-halftone-and-texture-free-vector.jpg')] bg-no-repeat bg-cover bg-center ">
  <div className="md:w-[450px] w-full bg-white p-5 ">
    <h1 className="text-center font-bld text-2xl text-black font-light py-2">
      Sign Up
    </h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email" className="font-semibold ">
          Email
        </label>
        <input
          {...register("email", {required: true})}
          type="text"
          placeholder="email"
          className="w-full py-1.5 px-2 bg-slate-300 mt-2"
        />
      </div>
      <div>
        <label htmlFor="password" className="font-semibold ">
          Password
        </label>
        <input
        {...register("password", {required: true})}
          type="password"
          placeholder="password"
          className="w-full py-1.5 px-2 bg-slate-300 mt-2"
        />
      </div>
      <button className="w-full px-5 py-2.5 bg-blue-600 text-white mt-8">
        Sign Up
      </button>
    </form>
    <p className='text-center mt-2'>Already have an account? <a href="/login" className='text-blue-500 font-semibold'>Login</a></p>
    <div className='flex items-center justify-center gap-5 mt-2'>
      <hr className='h-1 bg-slate-600 w-1/3' />
      <span>or</span>
      <hr className='h-1 bg-slate-600 w-1/3' />
    </div>
    <div onClick={()=> googleSignIn()} className="flex cursor-pointer items-center justify-center gap-3 text-xl mt-2 border border-slate-300 py-1.5">
      <FcGoogle className='text-2xl' /> <p>Google</p>
    </div>
  </div>
  
</div>

  )
}

export default Signup