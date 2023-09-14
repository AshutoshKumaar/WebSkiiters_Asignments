import React from 'react'
import Sign from './Assets/Sign.png'
import HeaderImg from '../Components/Assets/Header.png'
import Arrow from './Assets/arrow.png'



function Research() {
    return (
        <div>
            <div>
                {/* The Heading Div */}
                <div className='p-10 text-center'>
                    <h3 className='text-[40px] font-[400] font-sans'>The Latest Research</h3>
                    <p ><img src={Sign} alt="Sign" className='mx-auto' /></p>
                    <p className='text-[20px]'>What are the Scientist saying ?</p>
                </div>
                <div className='flex flex-row justify-around items-center p-10'>
                    <div className='w-[700px] h-auto  relative'>
                        <div className='w-full'>
                            <img src={HeaderImg} alt="Img" className='w-full' />
                        </div>
                        <div className='p-5'>
                            <h2 className='text-[30px]'>Paraproboitics: A new percesptive for functional food and nutriens</h2>
                            <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, facilis voluptatem. Magni facere, exercitationem quas ea dolor explicabo consectetur natus!</p>
                            <button className='bg-black px-6 py-2 font-bold text-[#fff] my-3'>Read more</button>

                        </div>
                        <div className='absolute w-[50px] h-[50px] bg-[#e5be60] top-3 left-3 text-center font-bold'>
                            15 <br /> March
                        </div>

                    </div>
                    <div className='w-[500px] h-[600px]'>
                        <div className='flex flex-row justify-start items-start relative'>
                            <div className="w-[300px] h-[200px]">
                                <img src={HeaderImg} alt="erroer" className='w-full h-full' />
                            </div>
                            <div className='text-[#000] p-3'>
                                <h3 className='text-[20px]'>Beta-cylcophelene and your brain</h3>
                                <p className='py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, nobis.</p>
                                <div>
                                    <button className='border-[1px] border-black'><img src={Arrow} alt="error" /></button>
                                </div>
                                <div className='absolute w-[50px] h-[50px] bg-[#e5be60] top-3 left-3 text-center font-bold'>
                                    15 <br /> March
                                </div>
                            </div>


                        </div>
                        <div className='flex flex-row justify-start items-start relative'>
                            <div className="w-[300px] h-[200px]">
                                <img src={HeaderImg} alt="erroer" className='w-full h-full' />
                            </div>
                            <div className='text-[#000] p-3'>
                                <h3 className='text-[20px]'>Beta-cylcophelene and your brain</h3>
                                <p className='py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, nobis.</p>
                                <div>
                                    <button><img src={Arrow} alt="error" /></button>
                                </div>
                            </div>
                            <div className='absolute w-[50px] h-[50px] bg-[#e5be60] top-3 left-3 text-center font-bold'>
                                15 <br /> March
                            </div>


                        </div>
                        <div className='flex flex-row justify-start items-start relative'>
                            <div className="w-[300px] h-[200px]">
                                <img src={HeaderImg} alt="erroer" className='w-full h-full' />
                            </div>
                            <div className='text-[#000] p-3'>
                                <h3 className='text-[20px]'>Beta-cylcophelene and your brain</h3>
                                <p className='py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, nobis.</p>
                                <div>
                                    <button><img src={Arrow} alt="error" /></button>
                                </div>
                            </div>
                            <div className='absolute w-[50px] h-[50px] bg-[#e5be60] top-3 left-3 text-center font-bold'>
                                15 <br /> March
                            </div>


                        </div>

                    </div>
                </div>
            </div>


        </div >
    )
}

export default Research
