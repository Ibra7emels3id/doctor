import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='flex items-center fixed top-0 left-0 w-full bg-white border border-b border-[#e1e0e0] h-[70px]'>
            <div className="max-w-7xl w-full m-auto flex items-center justify-between px-5">
                <div className="logo">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        className="w-36"
                        width={20}
                        height={20}
                    />
                </div>
                <div className="btn">
                    <Link href="/login" className="bg-blue text-white w-[130px] m-auto py-2 block text-center rounded-full">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
