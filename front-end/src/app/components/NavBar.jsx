import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const NavBar = ({ showNav , HandleShowNavBar }) => {

    // Handle Hidden Scroll
    useEffect(() => {
        if (showNav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showNav])

    return (
        <nav className={` ${showNav ? 'left-[-6px] opacity-[1]' : 'left-[-500px] opacity-0'} bg-white w-[250px] fixed left-[-50%] opacity-0 transition-all duration-500  top-0 h-screen border-r border-blue`}>
            <div className="logo mt-8 mb-5 mx-2">
                <Link href="/" className="">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        className="w-48"
                        width={30}
                        height={30}
                    />
                </Link>
            </div>
            <ul className="list-none m-0 p-0 pt-4 flex flex-col gap-3">
                <li onClick={HandleShowNavBar} className=" hover:bg-blue hover:border-r-8 border-[#dae2ff] hover:text-white transition-all duration-300">
                    <Link href="/" className="block w-full  p-4 hover:text-gray-600">
                        Home
                    </Link>
                </li>
                <li onClick={HandleShowNavBar} className=" hover:bg-blue hover:border-r-8 border-[#dae2ff] hover:text-white transition-all duration-300">
                    <Link href="/doctor-list" className="block w-full  p-4 hover:text-gray-600">
                        ALL Doctors
                    </Link>
                </li>
                <li onClick={HandleShowNavBar} className=" hover:bg-blue hover:border-r-8 border-[#dae2ff] hover:text-white transition-all duration-300">
                    <Link href="/about" className="block w-full  p-4 hover:text-gray-600">
                        About
                    </Link>
                </li>
                <li onClick={HandleShowNavBar} className=" hover:bg-blue hover:border-r-8 border-[#dae2ff] hover:text-white transition-all duration-300">
                    <Link href="/contact" className="block w-full  p-4 hover:text-gray-600">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
