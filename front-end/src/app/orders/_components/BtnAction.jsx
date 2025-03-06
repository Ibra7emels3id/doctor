'use client'
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { useAuth } from '../../context/context';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const BtnAction = ({ item }) => {
    const [showPayment, setShowPayment] = useState(false)
    const { user } = useUser();
    const { getOrders } = useAuth()
    const Router = useRouter()

    // Handle Cancel Appointment Server
    const HandleCancelAppointment = async (id) => {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/order/${user?.id}/${id}`)
            console.log(res.data);
            toast.success(res.data.message)
            getOrders(user?.id)
        } catch (error) {
            console.error(error);
        }
    };

    // Show Item Payment
    const HandleShowPayment = async (id, user, price) => {
        console.log(id, user, price);
        localStorage.setItem('payment-data', JSON.stringify({ id, user, price }));
        setShowPayment(!showPayment)
        Router.push(`/orders/payment-stripe/${id}`)

    };



    return (
        <div className="btn flex flex-col gap-2">
            <button disabled className={`${item.status === 'pending' && ' bg-[#ff1f1f7b] text-[#a32222]'} ${item.status === 'in the reveal' && ' bg-yellow-300 text-yellow-700'} ${item.status === 'finish' && ' bg-[#41f93bba] text-[#0d3709]'} w-full py-2 block  px-4 capitalize`}>{item.status}</button>
            {
                item.payment_Status === 'unpaid' ? showPayment ?
                    <>
                        <button onClick={() => {
                            HandleShowPayment(item._id, user?.id, item.price)
                        }} className='w-full py-2 flex items-center justify-center text-gray border border-gray hover:border-blue hover:text-white px-4 transition-all duration-200'>
                            <Image
                                src={'/images/stripe_logo.png'}
                                alt="stripe logo"
                                width={20}
                                height={10}
                                className='w-14 flex items-center justify-center'
                            />
                        </button>
                    </>
                    :
                    <button onClick={() => {
                        setShowPayment(!showPayment)
                    }} className='w-full py-2 block text-gray border border-gray hover:border-blue hover:text-white px-4 transition-all duration-200 hover:bg-blue'>Pay Online</button>
                    : 
                    <button disabled className='w-full py-2 block text-[#0d3709] border border-[#41f93bba] bg-[#41f93bba] px-4 transition-all duration-200 '>Paid</button>
            }
            <button onClick={() => {
                toast('Do You Delete Doctor!', {
                    action: {
                        label: 'Confirm',
                        onClick: () => HandleCancelAppointment(item._id)
                    },
                })
            }} className='w-full py-2 block text-gray border border-gray hover:border-red hover:text-white px-4 transition-all duration-200 hover:bg-red'>Cancel appointment</button>
        </div>
    );
}

export default BtnAction;
