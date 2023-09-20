import React from 'react'
import logo from '../Components/Assets/logo.png'
import { AiOutlineUser } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

function Navbar() {
    return (
        <div className=' w-full fixed top-0 flex flex-row justify-around items-center bg-[#ffffff] py-3 px-5 shadow-sm border-b-[1px] border-[#dca827] z-10'>
            {/* Logo of website */}
            <div>
                <img src={logo} alt="logo_img" />
            </div>
            <div>
                {/* NavBar  */}
                <nav className='flex flex-row justify-between items-center'>
                    {/* Navlist */}
                    <ul className='flex flex-row justify-start items-center'>
                        <li className='mr-6'><a href="/home" style={{ fontFamily: 'Josefin Sans', textShadow: '1px 1px #ccc' }} className='uppercase font-[800] text-slate-800 text-sm hover:text-[#dca827] visited:text-[#e2b33d]'>Home</a><span className='ml-6 text-sm font-[200]'>|</span></li>
                        <li className='ml-2 mr-6'><a href="/product" style={{ fontFamily: 'Josefin Sans', textShadow: '1px 1px #ccc' }} className='uppercase font-[800] text-slate-800  text-sm hover:text-[#dca827]  ease-in-out duration-300'>Products</a><span className='ml-4 font-[200]'>|</span></li>
                        <li className='ml-2 mr-6'><a href="/member" style={{ fontFamily: 'Josefin Sans', textShadow: '1px 1px #ccc' }} className='uppercase font-[800] text-slate-800  text-sm hover:text-[#dca827]  ease-in-out duration-300'>Become a members</a><span className='ml-4 font-[200]'>|</span></li>
                        <li className='ml-2 mr-6'><a href="/login" style={{ fontFamily: 'Josefin Sans' }} className='uppercase text-slate-800 font-[600] hover:text-[#dca827]  text-sm  ease-in-out duration-300'>Login</a> <span><AiOutlineUser className='inline text-[20px] font-[900]' /></span></li>

                    </ul>

                    {/* Another Box */}
                    <div className='bg-[#dca827] w-[140px] px-2 py-[4px]'>
                        <div className='bg-[#2c2c2c] w-[35px] h-[40px]  float-right rounded-sm'>
                            <BsFillBagCheckFill className='text-[20px] font-bold mx-auto mt-[9px] text-[#dca827]' />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
