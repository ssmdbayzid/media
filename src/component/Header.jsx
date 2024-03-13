import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  return (
    <div className='bg-slate-200  py-4'>
      <div className=" container flex items-center justify-between">
      <div>
        <p className='text-2xl font-light text-black'>Photo<span className='text-primaryColor font-bold'>Hub</span></p>
      </div>
      <div>
        <ul className='md:flex hidden items-center justify-between gap-5'>
          <NavLink className={navClass=> navClass.isActive ? "font-semibold text-primaryColor" : "text-slate-900"} to={"/home"}>Home</NavLink>
          <NavLink className={navClass=> navClass.isActive ? "font-semibold text-primaryColor" : "text-slate-900"} to={"/media"}>Media</NavLink>
          <NavLink className={navClass=> navClass.isActive ? "font-semibold text-primaryColor" : "text-slate-900"} to={"/message"}>Message</NavLink>
          <NavLink className={navClass=> navClass.isActive ? "font-semibold text-primaryColor" : "text-slate-900"} to={"/about"}>About</NavLink>
          {!user ? <> <NavLink className={navClass=> navClass.isActive ? "font-semibold text-primaryColor" : "text-slate-900"} to={"/login"}>Login</NavLink>
          <NavLink className={navClass=> navClass.isActive ? "font-semibold text-primaryColor" : "text-slate-900"} to={"/signup"}>Signup</NavLink>
          </>
          : <button onClick={()=> logOut()} className='bg-primaryColor text-white px-2 py-1.5'>Logout</button>
        }
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Header