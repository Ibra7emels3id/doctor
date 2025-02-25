'use client'
import { useAuth } from '@/context/context';
import Image from 'next/image';
import React, { useState } from 'react';
import Dialog from './dialog';
import Link from 'next/link';

const Tables = () => {
    const { doctor } = useAuth()
    const [showDialog, setShowDialog] = useState(false)
    const [productId, setProductId] = useState(null)
    const [productName, setProductName] = useState(null)




    // Show Dialog Functionality to Delete Doctor
    const HandleShowDialog = (id , name) => {
        setShowDialog(!showDialog)
        setProductId(id)
        setProductName(name)
    }



    return (
        <>
            {doctor.map((it) => {
                return (
                    <tr key={it._id}>
                        <td className="px-4 py-4 text-sm text-gray-800">
                            <Image
                                src={it.image}
                                alt="Doctor 1"
                                width={50}
                                height={50}
                            />
                        </td>
                        <td className="px-4 py-4 text-sm text-gray">{it.name}</td>
                        <td className="px-4 py-4 text-sm text-gray">{it.specialization}</td>
                        <td className="px-4 py-4 text-sm text-gray">{it.date.split('T')[0]}</td>
                        <td className="px-4 py-4 text-sm text-gray">
                            <button className="text-blue mr-4"><Link href={`doctor-list/edit/${it._id}`}>Edit</Link></button>
                            <button onClick={() => {
                                // Delete Doctor
                                HandleShowDialog(it._id , it.name)
                            }} className="text-red">Delete</button>
                        </td>
                    </tr>
                )
            })}
            <Dialog HandleShowDialog={HandleShowDialog} productId={productId} showDialog={showDialog} productName={productName} />
        </>
    );
}

export default Tables;
