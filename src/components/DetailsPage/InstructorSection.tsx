import { Star } from '@mui/icons-material';
import React from 'react';

const InstructorSection = ({ instructors }: any) => {
    return (<>
        <h1 className=' text-3xl p-6 ml-32'>Course Instructor:</h1>

        <section className='w-[50%] relative top-8 left-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-16 '>
            {instructors.map((instructor: any, index: any) => (
                <div key={index} className=''>
                    <img
                        src={instructor.image}
                        alt={instructor.name}
                        className='h-24 w-24 object-cover rounded-full  outline-2 outline-slate-300 outline  outline-offset-[10px]'
                    />

                    <p className='mt-5 text-lg'>{` ${instructor.rating} `} <span> <Star className=' text-sm text-yellow-500' /> </span> <span className=' text-sm'>(rating)</span>  </p>
                    <h1 className=' text-lg  font-semibold'>{instructor.name}</h1>
                    <p className=' text-green-600'>{instructor.title}</p>
                </div>
            ))}
        </section>
        <div className="flex  gap-14 mx-36    mt-24">
            <div className="   w-80">
                <div className="">
                    <h3 className=" text-2xl">Rating:</h3>
                    <p>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 unknown printer took a galley of type.</p>
                    <p>Lorem Ipsum is simply dummy text of printing and typesetting industry text ever since</p>
                    <p>Lorem Ipsum is simply dummy text of printing and industry's standard dummy text ever since the 1500 unknown printer took a galley of type.</p>
                </div>
            </div>
            <div className="border-2 text-center rounded-lg h-64 w-80">
                <div className="mt-7">
                    <span className="text-2xl text-green-600">4.8 <Star className='text-yellow-500 text-sm' /></span>
                    <p>Rating (86K+)</p>

                    <div className="flex  flex-col gap-4 justify-center mt-4 w-[100%]  p-5 space-y-2">


                        <div className="flex  ">
                            <Star className="text-yellow-500 text-sm" />
                            <Star className="text-yellow-500 text-sm" />
                            <Star className="text-yellow-500 text-sm" />
                            <Star className="text-yellow-500 text-sm" />
                            <Star className="text-yellow-500 text-sm" />
                            <div className="bg-green-500 rounded-xl h-3 mx-4 w-60"></div>
                        </div>

                        <div className="flex ">
                            <Star className="text-yellow-500 text-sm" />
                            <Star className="text-yellow-500 text-sm" />
                            <Star className="text-yellow-500 text-sm" />
                            <Star className=" text-sm" />
                            <Star className=" text-sm" />
                            <div className="bg-green-500 rounded-xl h-3 mx-4 w-40"></div>
                        </div>

                        <div className="flex  ">
                            <Star className="text-yellow-500 text-sm" />
                            <Star className="text-yellow-500 text-sm" />
                            <Star className=" text-sm" />
                            <Star className=" text-sm" />
                            <Star className=" text-sm" />

                            <div className="bg-green-500 h-3 rounded-xl w-20 mx-4"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </>

    );
};

export default InstructorSection;
