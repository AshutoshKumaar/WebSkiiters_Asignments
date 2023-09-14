import React from 'react'
import HeaderImg from '../Components/Assets/Header.png'
import Moneyback from './Assets/moneyback.png'
import Arrow from './Assets/arrow.png'

function Haeder() {
    return (
        <div style={{ backgroundImage: `url(${HeaderImg})` }} className='w-full h-screen bg-cover py-10 px-20'>
            <div className='mt-32 ml-20 border-b-[1px] border-slate-50 w-[500px] py-4'>
                <h3 className='text-[25px] text-[#fff] font-[400]'>
                    <span className='text-[#c39625]'>The highest</span> <br /> <span className='text-[50px] font-[300] uppercase' >Quality Products</span> <br />  <span>At the Lowest Price</span>
                </h3>
            </div>
            <div className='ml-20 flex flex-row justify-start items-center border-b-[1px] border-slate-50 w-[500px] py-4'>
                <div className='w-[100px] h-[100px] rounded-full'><img src={Moneyback} alt="error_img" className='w-full h-full rounded-full' /></div>
                <div className='bg-[#fff] w-[1px] h-[60px] ml-5'></div>
                <div className='text-[24px] text-[#fff] ml-5 uppercase'>
                    100% Money back Guarantee
                </div>
            </div>
            <div className='ml-20 mt-6'>
                <button className='flex flex-row items-center rounded-sm px-10 py-3 text-[18px] capitalize bg-[#c39625] hover:bg-yellow-400 ease-in-out duration-150'>
                    shop now
                    <img src={Arrow} alt="arrow_img" className='ml-3' />
                </button>

            </div>

        </div>
    )
}

export default Haeder
