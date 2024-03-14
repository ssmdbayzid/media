import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  return (
    <div className='bg-slate-200  py-4'>
      <div className=" container flex items-center justify-between">
      <a href="/">
        <p className='text-2xl font-light text-black'>Photo<span className='text-primaryColor font-bold'>Hub</span></p>
      </a>
      <div>
        <ul className='md:flex hidden items-center justify-between gap-5'>
          <NavLink className={navClass=> navClass.isActive ? "font-semibold text-primaryColor" : "text-slate-900"} to={"/home"}>Home</NavLink>
          <NavLink className={navClass=> navClass.isActive ? "font-semibold text-primaryColor" : "text-slate-900"} to={"/media"}>Media</NavLink>
          <NavLink className={navClass=> navClass.isActive ? "font-semibold text-primaryColor" : "text-slate-900"} to={"/message"}>Message</NavLink>
          <NavLink className={navClass=> navClass.isActive ? "font-semibold text-primaryColor" : "text-slate-900"} to={"/about"}>About</NavLink>
          {!user ? <> <NavLink className={navClass=> navClass.isActive ? "font-semibold text-primaryColor" : "text-slate-900"} to={"/login"}>Login</NavLink>
          <NavLink className={navClass=> navClass.isActive ? "font-semibold text-primaryColor" : "text-slate-900"} to={"/signup"}>Signup</NavLink>
          </>
          : <>
          <div className='w-12 h-12 outline rounded-full relative'>
            user
            <div className="absolute top-12 flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
 
  {/* Dropdown menu */}
  <div
    className="z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
    id="user-dropdown"
  >
    <div className="px-4 py-3">
      <span className="block text-sm text-gray-900 dark:text-white">
        Bonnie Green
      </span>
      <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
        name@flowbite.com
      </span>
    </div>
    <ul className="py-2" aria-labelledby="user-menu-button">
      <li>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Dashboard
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Settings
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Earnings
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Sign out
        </a>
      </li>
    </ul>
  </div>
  <button
    data-collapse-toggle="navbar-user"
    type="button"
    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="navbar-user"
    aria-expanded="false"
  >
    <span className="sr-only">Open main menu</span>
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  </button>
</div>

          </div>
          <button onClick={()=> logOut()} className='bg-primaryColor text-white px-2 py-1.5'>Logout</button>
          </> 
        }
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Header