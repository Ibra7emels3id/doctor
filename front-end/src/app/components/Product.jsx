'use client'
import Link from 'next/link';
import React from 'react';
import { useAuth } from '../context/context';
import Image from 'next/image';

const Product = () => {
    const { doctor } = useAuth()
    console.log(doctor);


    return (
        doctor.map((it) => {
            return (
                <Link key={it._id} href={`/doctor-list/doctor-details/${it._id}`} className="box hover:-translate-y-3 transition-all duration-300 border border-[#0000ff3f] rounded-lg">
                    <div className="image bg-[#EAEFFF] flex items-center m-auto rounded-t-lg">
                        <Image
                            src="/images/doc1.png"
                            alt="Doctor's Image"
                            objectFit="cover"
                            className="rounded-lg w-full"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="text flex flex-col p-4">
                        <div className="flex items-center text-green">
                            <p class="w-2 h-2 rounded-full bg-green"></p>
                            {it.status === 'active' ? <span className="ml-2">Available</span> : <span className="ml-2">Un Available</span>}
                        </div>
                        <h3 className='text-2xl font-semibold my-2'>Dr. {it.name}</h3>
                        <p className='text-gray'>{it.specialization}.</p>
                    </div>
                </Link>
            );
        })
    )

}

export default Product;
