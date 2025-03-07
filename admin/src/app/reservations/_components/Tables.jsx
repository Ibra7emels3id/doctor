'use client'
import { useAuth } from '@/context/context';
import Image from 'next/image';
import React, { useState } from 'react';
// import Dialog from './dialog';
import Link from 'next/link';

const Tables = () => {




    return (
        <>
            {userDoctors.map((it, index) => {
                return (
                    <div key={it._id} className=' bg-white w-full flex items-center justify-between'>
                        <p className="px-4  w-[240px] py-4 text-sm text-gray-800">
                            <Image
                                src={it?.user?.image}
                                alt="Doctor 1"
                                width={50}
                                height={50}
                            />
                        </p>
                        <p className="px-4  w-[240px] py-4 text-sm text-gray">{it?.user?.username}</p>
                        <p className="px-4  w-[240px] py-4 text-sm text-gray">{it?.user?.name}</p>
                        <p className="px-4  w-[240px] py-4 text-sm text-gray">{it?.user?.email}</p>
                        <p className="px-4  w-[240px] py-4 text-sm text-gray">
                            <button onClick={() => {
                                // View Doctor Details
                                setShowDetails(showDetails !== null ? null : index)
                            }} className="text-blue mr-4">View</button>
                            <button onClick={() => {
                                // Delete Doctor
                                HandleShowDialog(it._id, it?.user?.name)
                            }} className="text-red">Delete</button>
                        </p>
                    </div>
                )
            })}
            {
                showDetails !== null && <div className="flex flex-col">
                    <div className="flex flex-col mt-7">
                        <h3 className='text-3xl font-bold'>Doctors.</h3>
                        <div className="w-full flex items-center justify-between px-3">
                            <p className='w-[200px] m-auto'>image</p>
                            <p className='w-[200px] m-auto'>name</p>
                            <p className='w-[200px] m-auto'>specialization</p>
                            <p className='w-[200px] m-auto'>experience</p>
                            <p className='w-[200px] m-auto'>location</p>
                            <p className='w-[200px] m-auto'>fee</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        {userDoctors[showDetails]?.user?.doctors?.map((it) => {
                            return (
                                <div className="flex w-full border-y bg-white">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex w-[200px]">
                                            <Image src={it?.image} alt="Doctor 1" className="" width={100} height={100} />
                                        </div>
                                        <h2 className="text-lg font-medium w-[200px]">{it?.name}</h2>
                                        <p className='w-[200px]'>{it?.specialization}</p>
                                        <p className='w-[200px]'>{it?.experience} years of experience</p>
                                        <p className='w-[200px]'>Location: <span className='block w-[100px]'>{it?.address.slice(0, 20)}...</span></p>
                                        <p className='w-[200px]'>Fee: {it?.fee} per visit</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            {/* <Dialog HandleShowDialog={HandleShowDialog} productId={productId} showDialog={showDialog} productName={productName} /> */}
        </>
    );
}

export default Tables;
