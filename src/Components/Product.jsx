import React, { useState } from 'react'
import GroupImg from './Assets/Group.png'
import Sign from './Assets/Sign.png'
import AutoIcon from './Assets/Auto.png'
import PersonalCon from './Assets/Personal.png'
import SupplementryIcon from './Assets/Suppementry.png'
import P1 from './Assets/p1.png'
import P2 from './Assets/p2.png'
import p3 from './Assets/p3.png'
import p4 from './Assets/p4.png'
import { BsFillBagCheckFill } from 'react-icons/bs'
function Product() {

    const [hover, setHover] = useState(false)
    const [SecondDiv, SetSecondDiv] = useState(false)
    const [ThirdDiv, SetThirdDiv] = useState(false)
    const [FourthDiv, SetFourthDiv] = useState(false);

    const handleHover = () => {
        setHover(!hover)
    }
    const handleMouseOut = () => {
        setHover(!hover)
    }
    const handleSecondDivHover = () => {
        SetSecondDiv(!SecondDiv)
    }
    const handleSecondMouseOut = () => {
        SetSecondDiv(!SecondDiv)
    }
    const handleThirdDivHover = () => { SetThirdDiv(!ThirdDiv) }
    const handleThirdDivmouseOut = () => { SetThirdDiv(!ThirdDiv) }
    const handleFourthDivHover = () => { SetFourthDiv(!FourthDiv) }
    const handleFourthDivMouseOut = () => { SetFourthDiv(!FourthDiv) }
    return (
        <div style={{ backgroundImage: `url(${GroupImg})` }} className='w-full h-auto p-32'>
            {/* For the Our Product and Category Section */}
            <div className='flex flex-row justify-between'>
                <div className='p-2'>
                    <h3 className='text-[45px] font-[800] capitalize' style={{ fontFamily: 'Josefin Sans' }}>Our Products</h3>
                    <p>
                        <img src={Sign} alt="Sign_img" />
                    </p>
                    <p className='text-[20px] w-[300px] font-[200px] p-2 text-slate-500 font-mono'>
                        90-Day Money-Back Guarantee
                    </p>
                </div>
                <div className='p-[10px] bg-[#fff] h-14 border-b-[2px] border-[#dca827] shadow-md'>
                    <div className='flex flex-row justify-start items-center cursor-pointer'>
                        <div><img src={AutoIcon} alt="alt" className='inline' /> <span className='ml-[1px] text-[#dca827] font-[600] hover:text-yellow-500'>Auto Care</span> <span className='ml-2 font-[200]'>|</span> </div>
                        <div className='ml-4'><img src={PersonalCon} alt="alt" className='inline' /> <span className='ml-[1px] text-[#797575] font-[600] hover:text-yellow-500 duration-300'>Personal Care</span> <span className='ml-2 font-[200]'>|</span></div>
                        <div className='ml-4'><img src={SupplementryIcon} alt="alt" className='inline' /> <span className='ml-[1px] text-[#797575] font-[600] hover:text-yellow-500 duration-300'>Supplements</span></div>
                    </div>

                </div>
            </div>
            {/* For the Product div */}
            <div className='grid grid-cols-4 gap-10 p-5' style={{ fontFamily: 'Josefin Sans' }}>
                <div className='shadow-xl w-[280px] cursor-pointer' onMouseEnter={handleHover} onMouseLeave={handleMouseOut}>
                    <div className='border-[1px] border-[#ccc]'><img src={P1} alt="Product_images_one" className='w-full h-[270px]' /></div>
                    <div className='bg-[#fff] border-[1px] border-[#ccc] p-2 text-center'>
                        <h4 className='capitalize text-[27px] font-[700] p-1 tracking-tight'>Xcelerate fuel tabs- 1Pack / 6Tabs</h4>
                        <p className='font-[600] text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p className='py-1 font-[900] text-[#c39625] font-sans'>$<span>12</span></p>
                        <p className='font-[700] text-slate-600'>Member Price $<span>12</span></p>
                    </div>
                    <div className={`bg-black  ${hover ? 'flex' : 'hidden'} flex-row justify-between items-center text-[#fff] p-3 ease-in-out duration-500`}>
                        <p className='text-md capitalize'>Add to card</p>
                        <p className='bg-[#c39625] p-2 text-[20px] font-bold text-[#000]'><BsFillBagCheckFill /></p>
                    </div>
                </div>
                {/* Second div */}
                <div className='shadow-xl w-[280px] bg-white cursor-pointer' onMouseEnter={handleSecondDivHover} onMouseLeave={handleSecondMouseOut}>
                    <div className='border-[1px] border-[#ccc]'><img src={P2} alt="Product_images_two" className='w-full h-[270px]' /></div>
                    <div className='bg-[#fff] border-[1px] border-[#ccc] p-2 text-center'>
                        <h4 className='capitalize text-[27px] font-[700] p-1 tracking-tight'>Xcelerate fuel tabs- 1Pack / 6Tabs</h4>
                        <p className='font-[600] text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p className='py-1 font-bold text-[#c39625] font-sans'>$<span>12</span></p>
                        <p className='font-[700] text-slate-500'>Member Price $<span>12</span></p>
                    </div>
                    <div className={`bg-black ${SecondDiv ? 'flex' : 'hidden'} flex-row justify-between items-center text-[#fff] p-3`}>
                        <p className='text-md capitalize'>Add to card</p>
                        <p className='bg-[#c39625] p-2 text-[20px] font-bold text-[#000]'><BsFillBagCheckFill /></p>
                    </div>
                </div>
                {/* Third Div */}
                <div className='shadow-xl w-[280px] h-auto bg-white cursor-pointer' onMouseEnter={handleThirdDivHover} onMouseLeave={handleThirdDivmouseOut}>
                    <div className='border-[1px] border-[#ccc]'><img src={p3} alt="Product_images_three" className='w-full h-[270px]' /></div>
                    <div className='bg-[#fff] border-[1px] border-[#ccc] p-2 text-center'>
                        <h4 className='capitalize text-[27px] font-[700] p-1'>Xcelerate fuel tabs- 1Pack / 6Tabs</h4>
                        <p className='font-[600] text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p className='py-1 font-bold text-[#c39625] font-sans'>$<span>12</span></p>
                        <p className='font-[700] text-slate-500'>Member Price $<span>12</span></p>
                    </div>
                    <div className={`bg-black ${ThirdDiv ? 'flex' : 'hidden'} flex-row justify-between items-center text-[#fff] p-3`}>
                        <p className='text-md capitalize'>Add to card</p>
                        <p className='bg-[#c39625] p-2 text-[20px] font-bold text-[#000]'><BsFillBagCheckFill /></p>
                    </div>
                </div>
                {/* Fourth Div */}
                <div className='shadow-xl w-[280px] bg-transparent cursor-pointer ease-in-out duration-500' onMouseEnter={handleFourthDivHover} onMouseLeave={handleFourthDivMouseOut}>
                    <div className='border-[1px] border-[#ccc]'><img src={p4} alt="Product_images_three" className='w-full h-[270px]' /></div>
                    <div className='bg-[#fff] border-[1px] border-[#ccc] p-2 text-center'>
                        <h4 className='capitalize text-[27px] font-[700] p-1'>Xcelerate fuel tabs- 1Pack / 6Tabs</h4>
                        <p className='font-[600] text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p className='py-1 font-bold text-[#c39625] font-sans'>$<span>12</span></p>
                        <p className='font-[700] text-slate-500'>Member Price $<span>12</span></p>
                    </div>
                    <div className={`bg-black ${FourthDiv ? 'flex' : 'hidden'} flex-row justify-between items-center text-[#fff] p-3`}>
                        <p className='text-md capitalize'>Add to card</p>
                        <p className='bg-[#c39625] p-2 text-[20px] font-bold text-[#000]'><BsFillBagCheckFill /></p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Product
