import React from 'react'
import { BsPersonCircle, BsPersonFillAdd, BsCashStack } from 'react-icons/bs'
import { ImHammer2 } from 'react-icons/Im'
import { BiSolidDashboard } from 'react-icons/Bi'
import { NavLink } from 'react-router-dom'
//bg-[#3498db]
const Menu = () => {
  return (
    <div className='min-h-screen md:w-1/4 w-1/3  bg-[#3498db] p-2'>
      <h1 className='p-2 font-bold lg:text-3xl md:text-2xl sm:text-xl'>LegalLink.</h1>
      <div className='flex felx-row items-center px-2 py-4'>
        <BsPersonCircle size={60} />
        <p className='lg:text-xl md:text-sm text-xs mx-auto'>Welcome</p>
      </div>
      <ul className='pt-8' id="my_menu">
        <li className="py-4 cursor-pointer">
          <NavLink to="/Layout2/dashboard">
            <div className='flex items-center'>
              <BiSolidDashboard size={30}></BiSolidDashboard>
              <p className='px-2 md:text-xl text-xs'>Dashboard</p>
            </div>
          </NavLink>
        </li>
        <li className='py-4 cursor-pointer'>
          <NavLink to="/Layout2/clients">
            <div className='flex items-center'>
              <BsPersonFillAdd size={30}></BsPersonFillAdd>
              <p className='px-2 md:text-xl text-xs'>Clients</p>
            </div>
          </NavLink>
        </li>
        <li className='py-4 cursor-pointer'>
          <NavLink to="/Layout2/cases">
            <div className='flex items-center'>
              <ImHammer2 size={30}></ImHammer2>
              <p className='px-2 md:text-xl text-xs'>Cases</p>
            </div>
          </NavLink>
        </li>
        <li className='py-4 cursor-pointer'>
          <NavLink to="/Layout2/income">
            <div className='flex items-center'>
              <BsCashStack size={30}></BsCashStack>
              <p className='px-2 md:text-xl text-xs'>Income</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Menu