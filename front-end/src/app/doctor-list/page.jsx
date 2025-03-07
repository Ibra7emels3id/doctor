'use client'
import React, { useState } from 'react';
import Products from './_components/Products'

const Page = () => {
    const [category , setCategory] = useState('All')

    // Handle Get Category
    const HandleGetCategory = (category) => {
        setCategory(category)
    }


    return (
        <div className='min-h-screen'>
            <div className='flex flex-col max-w-7xl m-auto mt-6'>
                <h1 className='text-start text-gray'>Browse through the doctors specialist.</h1>
                <div className="flex mt-4 gap-4 m-auto w-full">
                    <div className="category px-2 max-sm:hidden">
                        <ul className="flex flex-col gap-3 w-[220px]">
                        <li onClick={()=>{
                                HandleGetCategory('All')
                            }} className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>All</li>
                            <li onClick={()=>{
                                HandleGetCategory('General physician')
                            }} className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>General physician</li>
                            <li onClick={()=>{
                                HandleGetCategory('Gynecologist')
                            }} className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Gynecologist</li>
                            <li onClick={()=>{
                                HandleGetCategory('Dermatologist')
                            }} className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Dermatologist</li>
                            <li onClick={()=>{
                                HandleGetCategory('Pediatricians')
                            }} className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Pediatricians</li>
                            <li onClick={()=>{
                                HandleGetCategory('Neurologist')
                            }} className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Neurologist</li>
                            <li onClick={()=>{
                                HandleGetCategory('Gastroenterologist')
                            }} className='border text-center border-gray py-2 text-gray cursor-pointer hover:bg-blue hover:text-white '>Gastroenterologist</li>
                            
                        </ul>
                    </div>
                    <div className="flex max-sm:mt-4 w-full">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-5">
                            <Products category={category} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
