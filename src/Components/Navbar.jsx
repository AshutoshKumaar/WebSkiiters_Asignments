import React from 'react'
import logo from '../Components/Assets/logo.png'
import { AiOutlineUser } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

function Navbar() {
    return (
        <div className='flex flex-row justify-around items-center bg-[#ffffff] py-3 px-5 shadow-sm border-b-[0.5px] border-[#dca827]'>
            {/* Logo of website */}
            <div>
                <img src={logo} alt="logo_img" />
            </div>
            <div>
                {/* NavBar  */}
                <nav className='flex flex-row  justify-between items-center'>
                    {/* Navlist */}
                    <ul className='flex flex-row justify-around items-center'>
                        <li className='ml-0 flex items-center drop-shadow-lg'><a href="/home" className='text-[18px] uppercase px-4 text-[#dca827] font-[400]'>Home</a><p className='bg-black w-[1px] h-[15px]'></p></li>
                        <li className='ml-2 flex items-center'><a href="/product" className='text-[18px] uppercase px-3 text-slate-600 font-[400] hover:text-[#dca827] ease-in-out duration-150'>Product</a><p className='bg-black w-[1px] h-[15px]'></p></li>
                        <li className='ml-2 flex items-center'><a href="/seller" className='text-[18px] uppercase px-3 text-slate-600 font-[400] hover:text-[#dca827] ease-in-out duration-150'>Become a member</a><p className='bg-black w-[1px] h-[15px]'></p></li>
                        <li className='flex flex-row justify-between items-center ml-2'><a href="/login" className='text-[15px] text-slate-600 font-[500] uppercase px-2 hover:text-[#dca827] ease-in-out duration-150'>Login</a><AiOutlineUser className='text-[25px] font-bold' /></li>
                    </ul>
                    {/* Another Box */}
                    <div className='bg-[#dca827] w-[100px] p-2 mx-2 rounded-md'>
                        <BsFillBagCheckFill className='text-[25px] font-bold float-right' />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
