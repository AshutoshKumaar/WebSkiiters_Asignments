import React from 'react'
import HeaderImg from '../Components/Assets/Header.png'
import Moneyback from './Assets/moneyback.png'
import Arrow from './Assets/arrow.png'

function Haeder() {
    return (
        <div className='px-0 py-[1px]'>
            <div style={{ backgroundImage: `url(${HeaderImg})` }} className='w-full h-screen bg-[100%] py-10 px-20'>
                <div className='mt-32 ml-20 border-b-[1px] border-slate-50 w-[500px] py-4'>
                    <h3 style={{ fontFamily: 'Josefin Sans' }} className='text-[25px] text-[#fff] font-[400]'>
                        <span className='text-[#c39625] capitalize text-[34px] font-[600] tracking-wide'>The highest</span> <br /> <span className='text-[45px] font-[900] uppercase tracking-wide' >Quality Products</span> <br />  <span className='text-[35px] font-[600] tracking-wide'>At the Lowest Price</span>
                    </h3>
                </div>
                <div className='ml-20 flex flex-row justify-start items-center border-b-[1px] border-slate-50 w-[500px] py-4'>
                    <div className='w-[100px] h-[100px] rounded-full'><img src={Moneyback} alt="error_img" className='w-full h-full rounded-full' /></div>
                    <div className='bg-[#ccc] w-[1px] h-[45px] ml-5'></div>
                    <div style={{ fontFamily: 'Josefin Sans' }} className='text-[20px] font-[600] text-[#ccc] ml-5 uppercase'>
                        100% Money back Guarantee
                    </div>
                </div>
                <div className='ml-20 mt-6'>
                    <button className='flex flex-row items-center rounded-sm w-[180px] h-[60px] text-[18px] capitalize bg-[#c39625] hover:bg-yellow-400 ease-in-out duration-150'>
                        <span className='ml-4 font-[600]'>shop now</span>
                        <img src={Arrow} alt="arrow_img" className='ml-[35px]' />
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Haeder
