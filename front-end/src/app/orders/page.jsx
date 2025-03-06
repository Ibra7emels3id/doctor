import React from 'react';
import Order from './_components/Order'

const Page = async () => {
    return (
        <div className='flex  max-w-7xl m-auto'>
            <div className="flex flex-col my-10 w-full lg:px-10 px-2">
                <div className="title">
                    <h2 className='text-gray text-xl'>My appointments.</h2>
                </div>
                <Order/>
            </div>
        </div>
    );
}

export default Page;
