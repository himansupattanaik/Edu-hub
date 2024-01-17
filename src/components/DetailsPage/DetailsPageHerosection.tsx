import Navbar from '@/layouts/public/Navbar'
import { AccessTime, CreditCard, Facebook, Instagram, LibraryBooks, LinkedIn, Man, Man2, Movie, SignalCellularAlt, Star, TimeToLeave, Timelapse, Twitter, WhatsApp, WorkspacePremium } from '@mui/icons-material'
import React from 'react'
import { InnerNav, UpperNav } from '../home/HeroSection'


export default function DetailsPageHerosection() {

    return (

        <>

            <section className=' bg-emerald-50'>
                <UpperNav />
                <InnerNav />
                <img className=' shape-8 relative left-32 top-10' src="shape-8.webp" alt="" />
                <div className='h-[40vh] main-container  flex items-center justify-between my-9'>

                    <aside className='w-1/2 text-xl '>

                        <div className=' w-fit  '>

                            <div className=' relative left-16   leading-[3rem]'>
                                <span className='hover:text-green-500'>Home// <span className='text-green-500'>Courses Details</span></span>
                                <p className='text-4xl'>Courses <span className='text-green-600'>Details
                                    <span><img className=' w-32 relative left-28   top-4   ' src="shape-4.webp" alt="" /></span>


                                </span>
                                </p>
                            </div>
                            <div className=' relative right-36  top-6'>
                                <img className=' h-[20vh] ' src="shape-23.webp" alt="" />

                            </div>
                        </div>

                    </aside>

                    <aside className='w-1/2 flex   items-center'>
                        <div className='bg-green-600 h-32 w-32 absolute right-1/3  top-72 rounded-full outline-1   outline outline-offset-8 outline-emerald-300'>
                            <WorkspacePremium className=' h-28 w-28 ml-2 text-white' />
                            <img className=' relative top-10 ' src="shape-6.webp" alt="" />
                            <img className=' shape-5 relative left-36 bottom-40' src="shape-5.webp" alt="" />
                        </div>
                        <div className=' absolute right-44 top-1/3'>
                            <img className='rounded-full ' src="author-11.webp" alt="" />
                        </div>
                        {/* Add your third div here if needed */}
                        <div>
                            <img className='    relative bottom-28 left-52' src="shape-24.webp" alt="" />

                        </div>
                    </aside>

                </div>

            </section >
            <DetailsPagemidSection />








        </>

    )
}
export const DetailsPagemidSection = () => {
    return (
        <>
            <div className='flex  w-[80%] main-container my-10 gap-20'>
                {/* Left Side */}
                <div className='w-[60%] overflow-y-auto'>
                    <img className=' rounded-lg w-[100%]' src="Courses-details.webp" alt="" />

                    <button className='text-white bg-yellow-600 h-12 w-32 rounded-lg text-xl relative bottom-16 left-5 '>Finance</button>

                    <p className=' text-3xl h-24'>Finance & Investment Series: Learn to Budget and Calculate Your Net Worth.</p>
                    <div className=' flex gap-16  h-20 w-full items-center '>
                        <div className=' flex gap-3 items-center'>
                            <img className=' h-14 w-14 rounded-full' src="author-01.webp" alt="" />
                            <span>Pamela Foster || <span className=' text-emerald-7~00'>286 Enrolled Students</span></span>
                        </div>
                        <div className=' flex items-center '>
                            <span>4.9 <span className='text-yellow-400'><Star /><Star /><Star /><Star /></span><Star className=' text-slate-300' />(5,764 Rating)</span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className='bg-emerald-50 rounded-xl border border-emerald-300  w-[32%]    h-[100%]'>
                    <h1 className='my-10 text-3xl text-green-700 font-semibold font-mono text-center '>$420.38</h1>

                    <div className='leading-10 w-full  text-center   '>
                        <div className='flex justify-around items-center p-2 border-t-2'> <p> <span><Man2 /></span>Instructor</p> <p>Pamela Foster</p></div>
                        <div className='flex justify-around items-center p-2 border-t-2'>  <p> <span><AccessTime /></span> Duration</p> <p>08 hr 15 mins</p></div>
                        <div className='flex justify-around  gap-16  items-center p-2 border-t-2'>  <p> <span><Movie /></span> Lectures</p> <p>29</p></div>
                        <div className='flex justify-around gap-11 items-center p-2 border-t-2'> <p> <span> <SignalCellularAlt />  </span> Level</p> <p>Secondary</p></div>
                        <div className='flex justify-around gap-11 items-center p-2 border-t-2'> <p> <span><LibraryBooks />  </span>Language</p> <p>English</p></div>
                        <div className='flex justify-around gap-12 items-center p-2 border-t-2 border-b-2'><p> <span> <CreditCard /></span>Certificate</p> <p>Yes</p></div>
                        <button className=' bg-green-600 h-14 w-36 my-10 text-white  text-xl font-semibold rounded-xl hover:bg-black'>Enroll Now</button>
                    </div>


                </div>




            </div>

            <div className=' float-end relative right-48   '>
                <h1 className=' p-5 text-3xl'>Share Course:</h1>
                <div className='  flex gap-7 pt-5 '>
                    <a href=""><Facebook className='text-5xl hover:text-white hover:bg-green-400 hover:border-none border rounded-lg border-slate-500' /></a>
                    <a href=""><LinkedIn className='text-5xl  hover:text-white hover:bg-green-400 hover:border-none border rounded-lg border-slate-500' /></a>
                    <a href=""> <Twitter className='text-5xl  hover:text-white hover:bg-green-400 hover:border-none border rounded-lg border-slate-500' /> </a>
                    <a href=""><WhatsApp className='text-5xl  hover:text-white hover:bg-green-400 hover:border-none border rounded-lg border-slate-500' /></a>
                    <a href=""><Instagram className='text-5xl  hover:text-white hover:bg-green-400 hover:border-none border rounded-lg border-slate-500' /></a>

                </div>
            </div>
        </>
    )
}