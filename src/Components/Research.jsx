import React from 'react'
import Sign from './Assets/Sign.png'
import HeaderImg from '../Components/Assets/Header.png'
import YellowArrow from './Assets/yellowArrow.png'
import StandardArrow from './Assets/StandardArrow.png'
import Brain from './Assets/Brain.png'
import harsh from './Assets/Harsh.png'
import Hocl from './Assets/Hocl.png'



function Research() {
    return (
        <div className='bg-[#fff]'>
            <div>
                {/* The Heading Div */}
                <div className='p-10 text-center'>
                    <h3 style={{ fontFamily: 'Josefin Sans' }} className='text-[50px] font-[900]'>The Latest Research</h3>
                    <p ><img src={Sign} alt="Sign" className='mx-auto w-[150px] mb-4' /></p>
                    <p style={{ fontFamily: 'Josefin Sans' }} className='text-[25px] font-[600]'>What are the Scientist saying ?</p>
                </div>
                {/* The Whole Items views */}
                <div className='py-10 px-28 flex flex-row justify-around'>
                    {/* First Big Container */}
                    <div className='w-[700px] h-auto relative'>
                        <div className='bg-[#ccc] w-full h-[320px]'>
                            <img src={HeaderImg} alt="Header_img" className='w-full h-full' />
                        </div>
                        <div style={{ fontFamily: 'Josefin Sans' }} className='px-0 py-2'>
                            <h3 className='text-[30px] font-[700]'><span className='font-extrabold'>Paraprobiotic</span>: A New Presceptive for Functional Foods and Nutraceuits</h3>
                            <p className='text-[20px] font-[600] mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis natus quod eos molestiae nisi adipisci consequatur sint est porro expedita?</p>
                            <div className='mt-8 cursor-pointer'>
                                <button className='w-[150px] h-[50px] shadow-sm bg-black hover:bg-slate-800 ease-in-out duration-150'><span className='text-[#fff] font-[900] ml-4'>Submit</span> <span className='ml-8'><img src={YellowArrow} alt="Arrow_img" className='inline' /></span></button>

                            </div>
                        </div>
                        <div className='bg-yellow-600 w-[70px] h-[70px] absolute top-2 left-2 text-center rounded-sm'>
                            <p className='py-2 px-1 text-[#fff]'><span className='font-[700] text-[18px]'>15</span><br /><span className='font-[400] text-[16px]'>March</span></p>
                        </div>

                    </div>
                    {/* Second Side Container*/}
                    <div className='w-[500px] h-auto'>
                        {/* First box */}
                        <div style={{ fontFamily: 'Josefin Sans' }} className='w-full h-[175px] relative flex flex-row justify-start'>
                            <div className='w-[200px]  h-full'>
                                <img src={Brain} alt="brain_img" className='w-full h-full bg-contain' />
                            </div>
                            <div className='w-[300px] h-full px-4 py-1'>
                                <h3 className='text-[25px] font-[900] leading-8'>Beta <span>-</span>Caryophllenene and Your brain</h3>
                                <p className='text-[17px] font-[600]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <div className='mt-[10px]'>
                                    <img src={StandardArrow} alt="Standard_Arrow_Img" className='hover:bg-slate-500 ease-in-out duration-150 cursor-pointer' />
                                </div>

                            </div>
                            <div className='bg-yellow-600 w-[50px] h-[55px] absolute top-2 left-2 text-center rounded-sm'>
                                <p className='py-2 px-1 text-[#fff] leading-6'><span className='font-[700] text-[18px]'>15</span><br /><span className='font-[400] text-[16px]'>March</span></p>
                            </div>
                        </div>
                        {/* Second Box */}
                        <div style={{ fontFamily: 'Josefin Sans' }} className='w-full relative h-[175px]  my-3 flex flex-row justify-start'>
                            <div className='w-[200px]  h-full'>
                                <img src={harsh} alt="brain_img" className='w-full h-full bg-contain' />
                            </div>
                            <div className='w-[300px] h-full px-4 py-1'>
                                <h3 className='text-[25px] font-[900] leading-8'>Beta <span>-</span>Caryophllenene and Your brain</h3>
                                <p className='text-[17px] font-[600]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <div className='mt-[10px]'>
                                    <img src={StandardArrow} alt="Standard_Arrow_Img" className='hover:bg-slate-500 ease-in-out duration-150 cursor-pointer' />
                                </div>

                            </div>
                            <div className='bg-yellow-600 w-[50px] h-[55px] absolute top-2 left-2 text-center rounded-sm'>
                                <p className='py-1 px-1 text-[#fff] leading-6'><span className='font-[700] text-[18px]'>15</span><br /><span className='font-[400] text-[16px]'>March</span></p>
                            </div>

                        </div>
                        {/* Third box */}
                        <div style={{ fontFamily: 'Josefin Sans' }} className='w-full h-[175px] relative flex flex-row justify-start'>
                            <div className='w-[200px]  h-full'>
                                <img src={Hocl} alt="brain_img" className='w-full h-full bg-contain' />
                            </div>
                            <div className='w-[300px] h-full px-4 py-1'>
                                <h3 className='text-[25px] font-[900] leading-8'>Beta <span>-</span>Caryophllenene and Your brain</h3>
                                <p className='text-[17px] font-[600]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <div className='mt-[10px]'>
                                    <img src={StandardArrow} alt="Standard_Arrow_Img" className='hover:bg-slate-500 ease-in-out duration-150 cursor-pointer' />
                                </div>

                            </div>
                            <div className='bg-yellow-600 w-[50px] h-[55px] absolute top-2 left-2 text-center rounded-sm'>
                                <p className='py-1 px-1 text-[#fff] leading-6'><span className='font-[700] text-[18px]'>15</span><br /><span className='font-[400] text-[16px]'>March</span></p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </div >
    )
}

export default Research
