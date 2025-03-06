'use client'
import React from 'react';
import BtnAction from './BtnAction';
import Image from 'next/image';
import { useAuth } from '../../context/context';

const Order = () => {
    const { data } = useAuth()
    data?.doctors?.sort((a, b) => new Date(b.new_date) - new Date(a.new_date));




    return (
        <div className="flex flex-col gap-5  mt-3 w-full">
            {data?.doctors?.map((item) => (
                <div key={item._id} className="flex justify-between max-md:flex-col  border-[#cdcdcd] border-y py-4 w-full ">
                    <div className="flex ">
                        <div className="image flex items-center justify-center bg-[#EAEFFF]">
                            <Image
                                src={item.image}
                                alt="Doctor 1"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="details flex flex-col p-4 max-w-[300px] gap-1">
                            <h3 className='text-gray text-2xl font-semibold'>Dr. {item.name}</h3>
                            <p className='text-gray text-md'>{item.specialization}</p>
                            <p className='text-black text-md font-medium'>Address:</p>
                            <p className='text-gray text-md'>{item?.address}</p>
                            <p className='text-gray text-sm'><span className='font-medium text-black'>Date & Time:</span> {item.date} , {item.time}</p>
                        </div>
                    </div>
                    <div className="flex items-end justify-end p-3">
                        <BtnAction item={item} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Order;
