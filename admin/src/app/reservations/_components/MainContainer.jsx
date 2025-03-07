'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Tables from './Tables';
import { useAuth } from '@/context/context';
import axios from 'axios';
import { toast } from 'sonner';
// import Tables from './Tables';

const MainContainer = () => {
    const { userDoctors, getAllUserDoctors } = useAuth()
    const [showDetails, setShowDetails] = useState(null)
    const [showDialog, setShowDialog] = useState(false)
    const [showStatus, setShowStatus] = useState(null)
    const [productId, setProductId] = useState(null)
    const [productName, setProductName] = useState(null)


    // Handle Send Status Server 
    const HandleSendStatus = async (user, id, status) => {
        try {
            // Send status to server using productId and status
            const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/doctor/status/${user}/${id}`, { status })
            if (res.status === 200) {
                getAllUserDoctors()
                toast.success(res.data.message)
                setShowStatus(null)
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Handle Delete User
    const HandleDeleteUser = async (user, id) => {
        try {
            // Delete user from server using productId
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${user}`)
            if (res.status === 200) {
                getAllUserDoctors()
                toast.success(res.data.message)
            }
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div className='flex overflow-auto'>
            <div className="flex flex-col w-full px-2">
                <div className="title my-5">
                    <h1 className='text-3xl ml-5 text-blue font-bold'>Reservations List</h1>
                </div>
                <div className="table px-0 md:px-3">
                    <div className="font-sans overflow-x-auto w-full">
                        <div className="w-full">
                            <div className="bg-gray-100 whitespace-nowrap w-full bg-blue text-white ">
                                <div className='w-full flex justify-between items-center'>
                                    <p className="px-4 w-[240px] py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Image
                                    </p>
                                    <p className="px-4 w-[240px] py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        User Name
                                    </p>
                                    <p className="px-4 w-[240px] py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Name
                                    </p>
                                    <p className="px-4 w-[240px] py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Email
                                    </p>
                                    <p className="px-4 w-[240px] py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </p>
                                </div>
                            </div>
                            <div className=" flex flex-col gap-3 mt-3 whitespace-nowrap">
                                {userDoctors.map((it) => {
                                    return (
                                        <div key={it._id} className=' bg-white w-full flex flex-col items-center justify-between'>
                                            <div className="flex items-center justify-between">
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
                                                        setShowDetails(showDetails === it._id ? null : it._id)
                                                    }} className="text-blue mr-4">{showDetails === it._id ? 'Hide' : 'View'}</button>
                                                    <button onClick={() => {
                                                        // Delete Doctor
                                                        toast('Do You Delete User!', {
                                                            action: {
                                                                label: 'Confirm',
                                                                onClick: () => HandleDeleteUser(it._id)
                                                            },
                                                        })
                                                    }} className="text-red">Delete</button>
                                                </p>
                                            </div>
                                            <div className={`${showDetails === it._id ? 'flex flex-col transition-all duration-500' : 'hidden'} w-full `}>
                                                {it.user.doctors.map((doc) => {
                                                    return (
                                                        <div className="flex flex-col w-full border-b border-blue p-2">
                                                            <div className="flex items-center justify-between w-full">
                                                                <div className="flex w-[200px]">
                                                                    <Image src={doc?.image} alt="Doctor 1" className="" width={100} height={100} />
                                                                </div>
                                                                <h2 className="text-lg font-medium w-[200px]">{doc?.name}</h2>
                                                                <p className='w-[200px]'>{doc?.specialization}</p>
                                                                <p className='w-[200px]'>payment: <span className='text-[#0d3709] w-[70px] flex items-center justify-center rounded-md capitalize'><span className='w-3 h-3 mr-1 block bg-[#0d37] rounded-full'></span>{doc.payment_Status}</span></p>
                                                                <p className='w-[200px]'><span>Location: <span className='block w-[100px]'>{doc?.address.slice(0, 20)}...</span></span><span>Status:<span className={` capitalize ${doc.status === 'finish' && 'text-green'} ${doc.status === 'in the reveal' && 'text-yellow-600'} ${doc.status === 'pending' && 'text-red'} `}> {doc.status}</span></span></p>
                                                                <div className="relative font-[sans-serif] w-max mx-auto">
                                                                    <button
                                                                        onClick={() => {
                                                                            setShowStatus(showStatus === doc._id ? null : doc._id)
                                                                        }}
                                                                        type="button"
                                                                        className="px-5 py-2.5 border border-gray-300 text-gray-800 text-sm outline-none bg-white hover:bg-gray-50"
                                                                    >
                                                                        Reservation Status
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="w-3 fill-gray-500 inline ml-3"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                                                clipRule="evenodd"
                                                                                data-original="#000000"
                                                                            />
                                                                        </svg>
                                                                    </button>
                                                                    <ul
                                                                        id="dropdownMenu"
                                                                        className={`absolute ${showStatus === doc._id ? 'flex flex-col' : 'hidden'} shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto`}
                                                                    >
                                                                        <li onClick={() => {
                                                                            HandleSendStatus(it.user.userId, doc._id, 'finish')
                                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                                            Finish
                                                                        </li>
                                                                        <li onClick={() => {
                                                                            HandleSendStatus(it.user.userId, doc._id, 'in the reveal')
                                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                                            In the reveal
                                                                        </li>
                                                                        <li onClick={() => {
                                                                            HandleSendStatus(it.user.userId, doc._id, 'pending')
                                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                                            Pending
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;
