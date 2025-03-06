import React from 'react';
import Products from './_components/Products'

const Page = () => {
    return (
        <div className='min-h-screen'>
            <div className='flex flex-col max-w-7xl m-auto mt-6'>
                <h1 className='text-start text-gray'>Browse through the doctors specialist.</h1>
                <div className="flex mt-4 gap-4">
                    <div className="category ">
                        <ul className="flex flex-col gap-3 w-[220px]">
                            <li className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>General physician</li>
                            <li className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Gynecologist</li>
                            <li className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Dermatologist</li>
                            <li className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Pediatricians</li>
                            <li className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Neurologist</li>
                            <li className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Gastroenterologist</li>
                        </ul>
                    </div>
                    <div className="flex">
                        <div className="grid grid-cols-4 w-full gap-5">
                            <Products />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
