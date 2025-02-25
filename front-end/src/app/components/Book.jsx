import React from 'react';
import BtnAccount from './BtnAccount';
import { currentUser } from '@clerk/nextjs/server';
import { SignInButton } from '@clerk/nextjs';

const Book = async () => {
    const user = await currentUser()



    return (
        <div className="flex max-w-7xl m-auto my-10">
            <div className="flex justify-between  bg-blue rounded-xl w-full h-[450px] px-10">
                <div className="text w-auto flex flex-col justify-center gap-5">
                    <h2 className='text-5xl space-y-10 font-bold text-white'>Book Appointment</h2>
                    <p className='text-5xl space-y-10 font-bold text-white'>With 100+ Trusted Doctors</p>
                    {user ? <></> : <SignInButton className={'bg-white w-[120px] py-2  rounded-full'} />}
                </div>
                <div className="image w-[500px] h-auto z-10" style={{
                    backgroundImage: 'url("/images/appointment_img.png")',
                    backgroundSize: 'cover',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                </div>
            </div>
        </div>
    );
}

export default Book;
