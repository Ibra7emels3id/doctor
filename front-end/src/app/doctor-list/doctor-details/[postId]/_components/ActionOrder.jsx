'use client'
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useAuth } from '../../../../context/context';

const ActionOrder = ({ post }) => {
    const { user } = useUser();
    const { getOrders } = useAuth()
    const appointments = post.appointments;
    const [IndexBtn, setIndexBtn] = useState(null)
    const [formData, setFormData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [time, setTime] = useState(null);
    const Router = useRouter()


    console.log(user?.fullName);


    // Handle Send Data Book an appointment
    const HandleSendDataBook = async () => {
        // Send appointment data to your server or API here
        try {
            setLoading(true);
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/order/${user?.id}`, formData)
            if (res.status === 200) {
                getOrders(user?.id)
                Router.push('/orders')
                toast.success(res.data.message);
            }
            getOrders(user?.id)
            Router.push('/orders')
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        } finally {
            setError(null);
            setLoading(false);
        }
    }


    // Handle Change Input Data
    useEffect(() => {
        if (user && user.id) {
            setFormData({
                ...formData,
                user: {
                    userId: user?.id,
                    username: user?.username,
                    image: user?.imageUrl,
                    name: user?.fullName || user?.firstName + ' ' + user?.lastName,
                    email: user?.primaryEmailAddress?.emailAddress,
                    doctors: [
                        {
                            specialization: post.specialization,
                            name: post?.name,
                            image: post?.image,
                            doctor_id: post._id,
                            duration: '30 minutes',
                            status: 'pending',
                            price: post.price,
                            date: appointments[IndexBtn]?.date,
                            time: time,
                            address: post.address1,
                        }
                    ]
                }
            });
        }
    }, [user, user?.fullName, time, user?.id]);


    return (
        <div className="order max-md:px-2 w-11/12 lg:w-[60%] m-auto mt-8">
            <h2 className='font-semibold text-xl  text-gray/80'>Booking slots</h2>
            <div className="flex flex-col">
                <div className="grid grid-cols-4 md:grid-cols-7 sm: lg:grid-cols-7 mt-5  px-2">
                    <button onClick={() => {
                        setIndexBtn(null)
                    }} className={`${IndexBtn === null && 'border-blue  bg-blue'} w-14 mt-2 h-20 rounded-full border`}></button>
                    {appointments.map((it, index) => {
                        return (
                            <button onClick={() => {
                                setIndexBtn(index)
                                // setActiveBtn(index)
                            }} key={index} className={`${IndexBtn === index && 'border-blue bg-blue text-white'} w-14 h-20 mt-2 rounded-full flex flex-col border items-center justify-center`}>
                                <p>{it.date.split(' ')[1]}</p>
                                <span>{it.date.slice(0, 1)}</span>
                            </button>
                        )
                    })}
                </div>
                <div className="w-full grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6  lg:grid-cols-6 gap-y-2 mt-8 justify-center gap-2">
                    {appointments[IndexBtn]?.time?.map((it, index) => {
                        return (
                            <button onClick={() => {
                                setTime(it)
                            }} key={index} className={`${time === it && 'bg-blue text-white'} w-full h-10 rounded-full flex flex-col border items-center justify-center`}>
                                <p>{it}</p>
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="gap-2 mt-8">
                {
                    loading ? (
                        <button disabled className={`w-full py-3 text-white rounded-full bg-blue hover:bg-blue-700`}>
                            Loading...
                        </button>
                    ) : (
                        <button onClick={HandleSendDataBook} disabled={!time} className={`w-full py-3 text-white rounded-full bg-blue hover:bg-blue-700 ${!formData.time || !formData.date && 'opacity-50 cursor-not-allowed'}`}>
                            Book appointment
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default memo(ActionOrder);
