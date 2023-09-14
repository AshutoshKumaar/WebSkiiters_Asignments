import React from 'react'
import Sectionback from './Assets/Sectionback.png'
import Lab from './Assets/lab.png'

function Section() {
    return (
        <div style={{ backgroundImage: `url(${Sectionback})` }} className='w-full h-[300px] p-10'>
            <div className='flex flex-row justify-around items-center p-10 my-auto'>
                <div className=''>
                    <div className='bg-[#fff] w-[120px] h-[120px] rounded-full px-[4px] py-[5px]'>
                        <div className='w-[110px] h-[110px] border-slate-500 border-2 border-dashed rounded-full relative'>
                            <img src={Lab} alt="Lab_Img" className='absolute top-6 left-6' />

                        </div>
                    </div>
                    <div className='py-3 font-bold font-serif'>
                        Laboratory Tested
                    </div>
                </div>
                <div>
                    <div className='bg-[#fff] w-[120px] h-[120px] rounded-full px-[4px] py-[5px]'>
                        <div className='w-[110px] h-[110px] border-slate-500 border-2 border-dashed rounded-full relative'>
                            <img src={Lab} alt="Lab_Img" className='absolute top-6 left-6' />

                        </div>
                    </div>
                    <div className='py-3 font-bold font-serif'>
                        CMP Certified
                    </div>
                </div>
                <div>
                    <div className='bg-[#fff] w-[120px] h-[120px] rounded-full px-[4px] py-[5px]'>
                        <div className='w-[110px] h-[110px] border-slate-500 border-2 border-dashed rounded-full relative'>
                            <img src={Lab} alt="Lab_Img" className='absolute top-6 left-6' />

                        </div>
                    </div>
                    <div className='py-3 font-bold  font-serif'>
                        Made In USA
                    </div>
                </div>
                <div>
                    <div className='bg-[#fff] w-[120px] h-[120px] rounded-full px-[4px] py-[5px]'>
                        <div className='w-[110px] h-[110px] border-slate-500 border-2 border-dashed rounded-full relative'>
                            <img src={Lab} alt="Lab_Img" className='absolute top-6 left-6' />

                        </div>
                    </div>
                    <div className='py-3 font-bold  font-serif'>
                        Money Back Gurantee
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Section
