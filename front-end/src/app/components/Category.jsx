import Image from 'next/image';
import React from 'react';

const Category = () => {
    return (
        <div className='flex flex-col  max-w-7xl m-auto mt-10'>
            <div className="flex flex-col items-center justify-center md:w-1/2 m-auto gap-4">
                <h2 className='text-4xl font-medium'>Find by Speciality</h2>
                <p className='text-center text-gray font-normal'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            </div>
            <div className="cart mt-10 m-auto">
                <div className="flex gap-3 m-auto">
                    <div className="box hover:-mt-2 transition-all cursor-pointer duration-500 flex flex-col items-center ">
                        <Image 
                            src="/images/General_physician.svg"
                            className='w-[130px] h-[130px]'
                            alt="Specialist 1"
                            width={300}
                            height={300}
                        />
                        <h3 className='mt-3 text-lg font-normal'>General physician</h3>
                    </div>
                    <div className="box hover:-mt-2 transition-all cursor-pointer duration-500 flex flex-col items-center">
                        <Image 
                            src="/images/Gynecologist.svg"
                            className='w-[130px] h-[130px]'
                            alt="Specialist 2"
                            width={300}
                            height={300}
                        />
                        <h3 className='mt-3 text-lg font-normal'>Gynecologist</h3>
                    </div>
                    <div className="box hover:-mt-2 transition-all cursor-pointer duration-500 flex flex-col items-center">
                        <Image 
                            src="/images/Dermatologist.svg"
                            className='w-[130px] h-[130px]'
                            alt="Specialist 3"
                            width={300}
                            height={300}
                        />
                        <h3 className='mt-3 text-lg font-normal'>Dermatologist</h3>
                    </div>
                    <div className="box hover:-mt-2 transition-all cursor-pointer duration-500 flex flex-col items-center">
                        <Image 
                            src="/images/Pediatricians.svg"
                            className='w-[130px] h-[130px]'
                            alt="Specialist 4"
                            width={300}
                            height={300}
                        />
                        <h3 className='mt-3 text-lg font-normal'>Pediatricians</h3>
                    </div>
                    <div className="box hover:-mt-2 transition-all cursor-pointer duration-500 flex flex-col items-center">
                        <Image 
                            src="/images/Neurologist.svg"
                            className='w-[130px] h-[130px]'
                            alt="Specialist 5"
                            width={300}
                            height={300}
                        />
                        <h3 className='mt-3 text-lg font-normal'>Neurologist</h3>
                    </div>
                    <div className="box hover:-mt-2 transition-all duration-500 cursor-pointer flex flex-col items-center">
                        <Image 
                            src="/images/Gastroenterologist.svg"
                            className='w-[130px] h-[130px]'
                            alt="Specialist 6"
                            width={300}
                            height={300}
                        />
                        <h3 className='mt-3 text-lg font-normal'>Gastroenterologist</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
