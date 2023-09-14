import React from 'react'
import HeaderImg from '../Components/Assets/Header.png'
import logo from '../Components/Assets/logo.png'
import payment from './Assets/payment.png'
import { AiOutlineMail, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import { BsFacebook } from 'react-icons/bs'

function Fotter() {
    return (
        <div>
            {/* Email Part of Fotter */}
            <div style={{ backgroundImage: `url(${HeaderImg})` }} className='w-full h-[300px] bg-cover'>
                <div className='px-[100px] py-[50px]'>
                    <h2 className='text-[40px] font-[300px] font-mono text-[#ccc] my-1'>Subscribe for News Letter</h2>
                    <input type="email" placeholder='Enter Email' className='w-[400px] h-[50px] px-4 outline-none border-none' />
                    <button className='h-[51px] w-[100px] bg-[#c39625]'>Subscribe</button>
                </div>
                {/* Black part of footer */}
                <div className='bg-[#151515] w-full h-[400px] flex flex-row justify-between items-center px-10'>
                    <div className='w-[300px]'>
                        <div>
                            <img src={logo} alt="error" className='text-[#ccc]' />
                        </div>
                        <p className='text-[#fff] py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt accusamus eaque sequi blanditiis necessitatibus voluptate corrupti porro praesentium excepturi veritatis.</p>
                        <div>
                            <img src={payment} alt="error" />
                        </div>
                    </div>
                    <div className='w-[300px]'>
                        <h3 className='text-[28px] font-mono text-[#c39625] font-[400]'>Quick Links</h3>
                        <ul className='text-[#fff]'>
                            <li className='my-1'>AboutCare</li>
                            <li className='my-1'>PersonalCare</li>
                            <li className='my-1'>HomeCare</li>
                            <li className='my-1'>PetCare</li>
                            <li className='my-1'>Became a Partner</li>
                            <li className='my-1'>Terms and Condition</li>
                            <li>Login</li>
                        </ul>
                    </div>
                    <div className='w-[300px]'>
                        <h3 className='text-[28px] font-mono text-[#c39625] font-[400]'>Proudct Links</h3>
                        <ul className='text-[#fff]'>
                            <li className='my-1'>Fule Tabs</li>
                            <li className='my-1'>Hydrox</li>
                            <li className='my-1'>TitanCLR</li>
                            <li className='my-1'>Foucs</li>
                            <li className='my-1'>Bio3x</li>
                            <li className='my-1'>Relax</li>
                            <li>Login</li>
                        </ul>
                    </div>
                    <div className='w-[300px]'>
                        <h3 className='text-[28px] font-mono text-[#c39625] font-[400]'>Contacts</h3>
                        <div className='flex flex-row items-start text-[#ccc] my-3'>
                            <FiMapPin className='text-2xl font-bold' />
                            <p className='ml-2'>Xcelerate International LLC 4737 N Ocean Dr Lauderale by the Sea, FL 3308</p>
                        </div>
                        <div className='flex flex-row items-center text-[#ccc] my-5'>
                            <AiOutlineMail />
                            <p className='ml-2'>Suppor@webSkitters.com</p>
                        </div>
                        <div>
                            {/* Socail Links */}
                            <ul className='flex flex-row justify-around items-start px-10'>
                                <li><a href="facebook.com"><BsFacebook className='text-2xl text-[#c39625] font-bold' /></a></li>
                                <li><a href="instagram.com"><AiFillInstagram className='text-2xl text-[#c39625] font-bold' /></a></li>
                                <li><a href="Youtube.com"><AiFillYoutube className='text-2xl text-[#c39625] font-bold' /></a></li>
                                <li><a href="twitter.com"><AiOutlineTwitter className='text-2xl text-[#c39625] font-bold' /></a></li>
                            </ul>
                        </div>

                    </div>

                </div>
                {/* Small Part of fotter */}
                <div className='bg-[#151515] w-full h-auto border-t-[1px] border-slate-100 shadow-md text-center text-slate-400 p-3'>
                    Terms and Condition  | Privacy

                </div>
            </div>

        </div>
    )
}

export default Fotter
