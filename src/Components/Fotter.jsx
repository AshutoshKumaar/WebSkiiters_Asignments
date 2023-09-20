import React from 'react'
import HeaderImg from '../Components/Assets/Fotter.png'
import Footerlogo from '../Components/Assets/FooterLogo.png'
import payment from './Assets/payment.png'
import { AiOutlineMail, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import { BsFacebook } from 'react-icons/bs'

function Fotter() {
    return (
        <div>
            {/* Email Part of Fotter */}
            <div style={{ backgroundImage: `url(${HeaderImg})` }} className='w-full h-[295px] bg-cover border-b-[1px] border-[#000]'>
                <div style={{ fontFamily: 'Josefin Sans' }} className='pt-20 pl-40'>
                    <h2 className='text-[40px] font-[900px] text-[#fff] my-2'>Subscribe for News Letter</h2>
                    <div className='flex flex-row items-center'>
                        <input type="email" placeholder='Enter Email' className='w-[440px] font-mono h-[50px] px-4 outline-none border-none block' />
                        <button className='h-[51px] w-[100px] bg-[#c39625] hover:bg-yellow-500 ease-in-out duration-200 font-[600] block'>Subscribe</button>
                    </div>
                </div>
            </div>
            {/* Black part of footer */}
            <div className='bg-[#151515] w-full h-[400px] flex flex-row justify-around items-center px-20'>
                <div className='w-[300px]'>
                    <div>
                        <img src={Footerlogo} alt="error" />
                    </div>
                    <p style={{ fontFamily: 'Josefin Sans' }} className='text-[#fff] py-4 font-[800] text-sm w-[300px] leading-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt accusamus eaque sequi blanditiis necessitatibus voluptate corrupti porro praesentium excepturi veritatis.</p>
                    <div className='mt-2'>
                        <img src={payment} alt="error" />
                    </div>
                </div>
                <div style={{ fontFamily: 'Josefin Sans' }} className='w-[200px]'>
                    <h3 className='text-[28px] font-mono text-[#c39625] font-[400]'>Quick Links</h3>
                    <ul className='text-[#fff] font-[600] cursor-pointer'>
                        <li className='my-[5px] hover:underline'>AboutCare</li>
                        <li className='my-[5px] hover:underline'>PersonalCare</li>
                        <li className='my-[5px] hover:underline'>HomeCare</li>
                        <li className='my-[5px] hover:underline'>PetCare</li>
                        <li className='my-[5px] hover:underline'>Became a Partner</li>
                        <li className='my-[5px] hover:underline'>Terms and Condition</li>
                        <li className='hover:underline'>Login</li>
                    </ul>
                </div>
                <div style={{ fontFamily: 'Josefin Sans' }} className='w-[250px]'>
                    <h3 className='text-[28px] font-mono text-[#c39625] font-[400]'>Proudct Links</h3>
                    <ul className='text-[#fff] font-[600] cursor-pointer'>
                        <li className='my-[5px] hover:underline'>Fule Tabs</li>
                        <li className='my-[5px] hover:underline'>Hydrox</li>
                        <li className='my-[5px] hover:underline'>TitanCLR</li>
                        <li className='my-[5px] hover:underline'>Foucs</li>
                        <li className='my-[5px] hover:underline'>Bio3x</li>
                        <li className='my-[5px] hover:underline'>Relax</li>
                        <li className='hover:underline'>Login</li>
                    </ul>
                </div>
                <div style={{ fontFamily: 'Josefin Sans' }} className='w-[300px]'>
                    <h3 className='text-[28px] font-mono text-[#c39625] font-[400]'>Contacts</h3>
                    <div className='flex flex-row items-start text-[#ccc] py-3'>
                        <FiMapPin className='text-2xl font-bold bg-slate-200 text-[#000] p-1 rounded-full' />
                        <p className='ml-2 w-[210px] font-[700]'>Xcelerate International LLC 4737 N Ocean Dr Lauderale by the Sea, FL
                            3308</p>
                    </div>
                    <div className='flex flex-row items-center text-[#ccc] py-3'>
                        <AiOutlineMail className='text-2xl font-bold bg-slate-200 text-[#000] p-1 rounded-full' />
                        <p className='ml-2 font-[700]'>Support@webSkitters.com</p>
                    </div>
                    <div className='py-[14px]'>
                        {/* Socail Links */}
                        <ul className='flex flex-row justify-start items-start'>
                            <li><a href="facebook.com"><BsFacebook className='text-[30px] text-[#c39625] hover:text-[#ffd979f1] ease-in-out duration-150 font-bold' /></a></li>
                            <li><a href="instagram.com"><AiFillInstagram className='text-[30px] text-[#c39625] hover:text-[#ffd979f1] ease-in-out duration-150  font-bold ml-3' /></a></li>
                            <li><a href="Youtube.com"><AiFillYoutube className='text-[30px] text-[#c39625] hover:text-[#ffd979f1] ease-in-out duration-150  font-bold ml-3' /></a></li>
                            <li><a href="twitter.com"><AiOutlineTwitter className='text-[30px] text-[#c39625] hover:text-[#ffd979f1] ease-in-out duration-150  font-bold ml-3' /></a></li>
                        </ul>
                    </div>

                </div>

            </div>
            {/* Small Part of fotter */}
            <div style={{ fontFamily: 'Josefin Sans' }} className='bg-[#151515] w-full h-[40px] border-t-[1px] border-slate-600 shadow-md text-center text-slate-400 px-32 py-3'>
                <span className='float-left font-[800]'>© Xcelerate International</span>
                <span className='float-right mr-10 font-[800]'>Terms and Condition  | Privacy</span>

            </div>


        </div>
    )
}

export default Fotter
