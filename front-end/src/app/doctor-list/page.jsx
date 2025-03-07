'use client'
import React, { useState } from 'react';
import Products from './_components/Products'

const Page = () => {
    const [category , setCategory] = useState('')

    // Handle Get Category
    const HandleGetCategory = (category) => {
        setCategory(category)
    }

    console.log(category);


    return (
        <div className='min-h-screen'>
            <div className='flex flex-col max-w-7xl m-auto mt-6'>
                <h1 className='text-start text-gray'>Browse through the doctors specialist.</h1>
                <div className="flex mt-4 gap-4">
                    <div className="category ">
                        <ul className="flex flex-col gap-3 w-[220px]">
                            <li onClick={()=>{
                                HandleGetCategory('general physician')
                            }} className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>General physician</li>
                            <li onClick={()=>{
                                HandleGetCategory('gynecologist')
                            }} className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Gynecologist</li>
                            <li onClick={()=>{
                                HandleGetCategory('dermatologist')
                            }} className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Dermatologist</li>
                            <li onClick={()=>{
                                HandleGetCategory('pediatricians')
                            }} className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Pediatricians</li>
                            <li onClick={()=>{
                                HandleGetCategory('neurologist')
                            }} className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Neurologist</li>
                            <li onClick={()=>{
                                HandleGetCategory('gastroenterologist')
                            }} className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Gastroenterologist</li>
                        </ul>
                    </div>
                    <div className="flex">
                        <div className="grid grid-cols-4 w-full gap-5">
                            <Products category={category} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
