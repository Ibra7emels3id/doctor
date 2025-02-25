import Image from 'next/image';
import React from 'react';
import BtnAccount from './BtnAccount';
import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Header = async () => {
    // const  user  = await auth()
    const user = await currentUser()

    console.log(user);

    return (
        <header className="flex shadow-[0px_0px_16px_rgba(17,_17,_26,_0.1)] py-4 px-4 sm:px-6 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
            <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-screen-xl mx-auto">
                <a href="javascript:void(0)" className="max-sm:hidden">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        className="w-36"
                        width={20}
                        height={20}
                    />
                </a>
                <a href="javascript:void(0)" className="hidden max-sm:block">
                    <img
                        src="https://readymadeui.com/readymadeui-short.svg"
                        alt="logo"
                        className="w-9"
                    />
                </a>
                <div
                    id="collapseMenu"
                    className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
                >
                    <button
                        id="toggleClose"
                        className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5 h-3.5 fill-black"
                            viewBox="0 0 320.591 320.591"
                        >
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"
                            />
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"
                            />
                        </svg>
                    </button>
                    <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                        <li className="mb-6 hidden max-lg:block">
                            <a href="javascript:void(0)">
                                <img
                                    src="https://readymadeui.com/readymadeui.svg"
                                    alt="logo"
                                    className="w-36"
                                />
                            </a>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3 px-3">
                            <a
                                href="javascript:void(0)"
                                className="hover:text-[#007bff] text-[#007bff] font-bold block text-base"
                            >
                                Home
                            </a>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3 px-3">
                            <Link
                                href="doctors"
                                className="hover:text-[#007bff] text-gray-600 font-bold block text-base"
                            >
                                ALL DOCTORS
                            </Link>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3 px-3">
                            <a
                                href="javascript:void(0)"
                                className="hover:text-[#007bff] text-gray-600 font-bold block text-base"
                            >
                                About
                            </a>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3 px-3">
                            <a
                                href="javascript:void(0)"
                                className="hover:text-[#007bff] text-gray-600 font-bold block text-base"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center max-lg:ml-auto space-x-4">
                    {user ?
                        <>
                            <Link className='' href={'/order'}>
                                <svg
                                    viewBox="0 0 1024.00 1024.00"
                                    fill="#000000"
                                    className="icon w-6 fill-blue"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#000000"
                                    strokeWidth="20.48"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M53.6 1023.2c-6.4 0-12.8-2.4-17.6-8-4.8-4.8-7.2-11.2-6.4-18.4L80 222.4c0.8-12.8 11.2-22.4 24-22.4h211.2v-3.2c0-52.8 20.8-101.6 57.6-139.2C410.4 21.6 459.2 0.8 512 0.8c108 0 196.8 88 196.8 196.8 0 0.8-0.8 1.6-0.8 2.4v0.8H920c12.8 0 23.2 9.6 24 22.4l49.6 768.8c0.8 2.4 0.8 4 0.8 6.4-0.8 13.6-11.2 24.8-24.8 24.8H53.6z m25.6-48H944l-46.4-726.4H708v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8s-44.8-20-44.8-44.8c0-14.4 7.2-27.2 20-36h0.8v-57.6H363.2v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8-24.8 0-44.8-20-44.8-44.8 0-14.4 7.2-27.2 20-36h0.8v-57.6H125.6l-46.4 726.4zM512 49.6c-81.6 0-148.8 66.4-148.8 148.8v3.2h298.4l-0.8-1.6v-1.6c0-82.4-67.2-148.8-148.8-148.8z"
                                            fill=""
                                        />
                                    </g>
                                </svg>
                            </Link>
                            <UserButton />
                        </>
                        : <BtnAccount />}
                    <button id="toggleOpen" className="lg:hidden">
                        <svg
                            className="w-7 h-7"
                            fill="#000"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
