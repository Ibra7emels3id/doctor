'use client'
import { useClerk } from '@clerk/nextjs';
import React from 'react';

const BtnAccount = () => {
    const {openSignIn} = useClerk()
    // Handle Sign in Cleck 
    const HandleSignIn = () => {
        openSignIn()
    }



    return (
        <button
        onClick={HandleSignIn}
            type="button"
            className="bg-blue hover:bg-purple-600 px-4 py-2 rounded-full text-white text-[15px] font-semibold flex items-center justify-center gap-2"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="cursor-pointer fill-white inline w-4 h-4"
            >
                <circle cx={10} cy={7} r={6} data-original="#000000" />
                <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                />
            </svg>
            Create account
        </button>
    );
}

export default BtnAccount;
