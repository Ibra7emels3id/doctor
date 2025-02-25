import Link from 'next/link';
import React from 'react';
import Product from './Product'

const Products = () => {
    return (
        <div className="flex flex-col max-w-7xl m-auto mt-24  py-10">
            <div className="title text-center m-auto">
                <h1 className='text-4xl font-medium mb-4'>Top Doctors to Book</h1>
                <p className='text-gray font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex w-full m-auto mt-10">
                <div className="grid grid-cols-5 w-full gap-5">
                    <Product />
                </div>
            </div>
            <div className="btn mt-16 flex items-center justify-center">
                <Link href={'/'} className="text-gray px-4 py-2 rounded-lg bg-[#EAEFFF] hover:bg-[#dce4ff]">
                    Load More
                </Link>
            </div>
        </div>
    );
}

export default Products;
