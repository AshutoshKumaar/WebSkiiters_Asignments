import React, { useState } from 'react'
import GroupImg from './Assets/Group.png'
import Sign from './Assets/Sign.png'
import Category from './Assets/Category.png'
import P1 from './Assets/p1.png'
import P2 from './Assets/p2.png'
import p3 from './Assets/p3.png'
import p4 from './Assets/p4.png'
import { BsFillBagCheckFill } from 'react-icons/bs'
function Product() {

    const [hover, setHover] = useState(false)
    const handleHover = () => {
        setHover(!hover)
    }
    const handleMouseOut = () => {
        setHover(!hover)
    }
    return (
        <div style={{ backgroundImage: `url(${GroupImg})` }} className='w-full h-auto p-32'>
            {/* For the Our Product and Category Section */}
            <div className='flex flex-row justify-between'>
                <div className='p-2'>
                    <h3 className='text-[56px] font-[400] font-serif'>Our Products</h3>
                    <p>
                        <img src={Sign} alt="Sign_img" />
                    </p>
                    <p className='text-[28px] w-[300px] font-[200px] p-2 text-slate-500 font-mono'>
                        90-Day Money-Back Guarantee
                    </p>
                </div>
                <div className='p-2'>
                    <img src={Category} alt="" />
                </div>
            </div>
            {/* For the Product div */}
            <div className='grid grid-cols-4 gap-10 p-5'>
                <div className='shadow-md w-[280px] cursor-pointer' onMouseEnter={handleHover} onMouseLeave={handleMouseOut}>
                    <div className='border-[1px] border-[#c39625]'><img src={P1} alt="Product_images_one" className='w-full h-[300px]' /></div>
                    <div className='bg-[#fff] border-[1px] border-[#ccc] p-2 text-center'>
                        <h4 className='capitalize text-[27px] font-[400] p-1'>Xcelerate fuel tabs- 1Pack / 6Tabs</h4>
                        <p className='font-[300] text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p className='py-1 font-bold text-[#c39625]'>$<span>12</span></p>
                        <p className='font-[400] text-slate-500'>Member Price $<span>12</span></p>
                    </div>
                    <div className={`bg-black  ${hover ? 'flex' : 'hidden'} flex-row justify-between items-center text-[#fff] p-3 ease-in-out duration-500`}>
                        <p className='text-md capitalize'>Add to card</p>
                        <p className='bg-[#c39625] p-2 text-[20px] font-bold text-[#000]'><BsFillBagCheckFill /></p>
                    </div>
                </div>
                <div className='shadow-md w-[280px] bg-white cursor-pointer'>
                    <div className='border-[1px] border-[#c39625]'><img src={P2} alt="Product_images_two" className='w-full h-[300px]' /></div>
                    <div className='bg-[#fff] border-[1px] border-[#ccc] p-2 text-center'>
                        <h4 className='capitalize text-[27px] font-[400] p-1'>Xcelerate fuel tabs- 1Pack / 6Tabs</h4>
                        <p className='font-[300] text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p className='py-1 font-bold text-[#c39625]'>$<span>12</span></p>
                        <p className='font-[400] text-slate-500'>Member Price $<span>12</span></p>
                    </div>
                    <div className={`bg-black ${hover ? 'flex' : 'hidden'} flex-row justify-between items-center text-[#fff] p-3`}>
                        <p className='text-md capitalize'>Add to card</p>
                        <p className='bg-[#c39625] p-2 text-[20px] font-bold text-[#000]'><BsFillBagCheckFill /></p>
                    </div>
                </div>
                <div className='shadow-md w-[280px] bg-white cursor-pointer'>
                    <div className='border-[1px] border-[#c39625]'><img src={p3} alt="Product_images_three" className='w-full h-[300px]' /></div>
                    <div className='bg-[#fff] border-[1px] border-[#ccc] p-2 text-center'>
                        <h4 className='capitalize text-[27px] font-[400] p-1'>Xcelerate fuel tabs- 1Pack / 6Tabs</h4>
                        <p className='font-[300] text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p className='py-1 font-bold text-[#c39625]'>$<span>12</span></p>
                        <p className='font-[400] text-slate-500'>Member Price $<span>12</span></p>
                    </div>
                    <div className={`bg-black ${hover ? 'flex' : 'hidden'} flex-row justify-between items-center text-[#fff] p-3`}>
                        <p className='text-md capitalize'>Add to card</p>
                        <p className='bg-[#c39625] p-2 text-[20px] font-bold text-[#000]'><BsFillBagCheckFill /></p>
                    </div>
                </div>
                <div className='shadow-md w-[280px] bg-white cursor-pointer'>
                    <div className='border-[1px] border-[#c39625]'><img src={p4} alt="Product_images_three" className='w-full h-[300px]' /></div>
                    <div className='bg-[#fff] border-[1px] border-[#ccc] p-2 text-center'>
                        <h4 className='capitalize text-[27px] font-[400] p-1'>Xcelerate fuel tabs- 1Pack / 6Tabs</h4>
                        <p className='font-[300] text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p className='py-1 font-bold text-[#c39625]'>$<span>12</span></p>
                        <p className='font-[400] text-slate-500'>Member Price $<span>12</span></p>
                    </div>
                    <div className={`bg-black ${hover ? 'flex' : 'hidden'} flex-row justify-between items-center text-[#fff] p-3`}>
                        <p className='text-md capitalize'>Add to card</p>
                        <p className='bg-[#c39625] p-2 text-[20px] font-bold text-[#000]'><BsFillBagCheckFill /></p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Product
