import React from 'react'
import Sectionback from './Assets/Sectionback.png'
import Gmp from './Assets/Gmp.png'
import Lab from './Assets/lab.png'
import Usa from './Assets/Usa.png'
import Vector from './Assets/Vector.png'

function Section() {
    return (
        <div style={{ backgroundImage: `url(${Sectionback})` }} className='w-full h-[230px] bg-cover p-10 bg-[#ede0c1]'>
            <div style={{ fontFamily: 'Josefin Sans' }} className='flex flex-row justify-around items-center px-[60px] z--10'>
                {/* First Circle */}
                <div className=''>
                    <div className='bg-[#fbefef] w-[100px] h-[100px] rounded-full px-[4px] py-[5px]'>
                        <div className='w-[90px] h-[90px] bg-[#fff] border-slate-500 border-2 border-dashed rounded-full relative shadow-md'>
                            <img src={Lab} alt="Lab_Img" className='absolute top-6 left-6 w-[40px] h-[40px]' />

                        </div>
                    </div>
                    <div className='py-3 font-[900] text-[18px] w-[100px] text-center text-[#000]'>
                        Laboratory Tested
                    </div>
                </div>
                {/* Second Circle */}
                <div className=''>
                    <div className='bg-[#fff] w-[100px] h-[100px] rounded-full px-[4px] py-[5px]'>
                        <div className='w-[90px] h-[90px] border-slate-500 border-2 border-dashed rounded-full relative shadow-md'>
                            <img src={Gmp} alt="Gmp_Certified" className='absolute top-6 left-6 w-[40px] h-[40px]' />

                        </div>
                    </div>
                    <div className='py-3 font-[900] text-[18px] w-[100px] text-center text-[#000]'>
                        GMP Certified
                    </div>
                </div>
                {/* Third Circle */}
                <div className=''>
                    <div className='bg-[#fff] w-[100px] h-[100px] rounded-full px-[4px] py-[5px]'>
                        <div className='w-[90px] h-[90px] border-slate-500 border-2 border-dashed rounded-full relative shadow-md'>
                            <img src={Usa} alt="Usa_dollar_Img" className='absolute top-6 left-6 w-[40px] h-[40px]' />



                        </div>
                    </div>
                    <div className='py-3 font-[900] text-[18px] w-[100px] text-center text-[#000]'>
                        Made In USA
                    </div>
                </div>
                {/* Fourth Circle */}
                <div className=''>
                    <div className='bg-[#fff] w-[100px] h-[100px] rounded-full px-[4px] py-[5px]'>
                        <div className='w-[90px] h-[90px] border-slate-500 border-2 border-dashed rounded-full relative shadow-md'>
                            <img src={Vector} alt="money_back_Img" className='absolute top-6 left-6 w-[40px] h-[40px]' />

                        </div>
                    </div>
                    <div className='py-3 font-[900] text-[18px]  w-[100px] text-center text-[#000]'>
                        Money Back Gurantee
                    </div>
                </div>


            </div>

        </div >
    )
}

export default Section
