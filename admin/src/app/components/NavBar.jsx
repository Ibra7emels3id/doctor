import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className='fixed top-[70px] h-screen left-0 bg-white w-[75px] lg:w-[250px]  border-r border-[#eee]'>
            <div className="flex">
                <ul className='flex flex-col mt-5 w-full'>
                    <li className='py-1'>
                        <Link href='/' className='flex items-center gap-2 border-b text-blue hover:bg-slate-200 transition-all duration-300 py-4 mx-2 px-4 text-md font-medium text-gray-700 hover:text-gray-900'>
                            <svg
                                className='w-6 h-6'
                                viewBox="-2.4 -2.4 28.80 28.80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V12Z"
                                        stroke="#5f6fff"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />{" "}
                                    <path
                                        d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12V5Z"
                                        stroke="#5f6fff"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />{" "}
                                    <path
                                        d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V17Z"
                                        stroke="#5f6fff"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />{" "}
                                    <path
                                        d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H14C13.4477 8 13 7.55228 13 7V5Z"
                                        stroke="#5f6fff"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />{" "}
                                </g>
                            </svg>
                            <span className='max-lg:hidden'>Dashboard</span>
                        </Link>
                    </li>
                    <li className='py-1'>
                        <Link href='/doctor-list/add-doctor' className='flex items-center gap-2 border-b text-blue hover:bg-slate-200 transition-all duration-300 py-4 mx-2 px-4 text-md font-medium text-gray-700 hover:text-gray-900'>
                            <svg className='w-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                                        stroke="#5f6fff"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />{" "}
                                    <path
                                        d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                                        stroke="#5f6fff"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />{" "}
                                </g>
                            </svg>
                            <span className='max-lg:hidden'>Add Doctor</span>
                        </Link>
                    </li>
                    <li className='py-1'>
                        <Link href='/' className='flex items-center gap-2 border-b text-blue hover:bg-slate-200 transition-all duration-300 py-4 mx-2 px-4 text-md font-medium text-gray-700 hover:text-gray-900'>
                            <svg
                                className='w-6'
                                version="1.1"
                                id="_x32_"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{ __html: " .st0{fill:#5f6fff;} " }}
                                    />{" "}
                                    <g>
                                        {" "}
                                        <path
                                            className="st0"
                                            d="M123.195,172.967c-15.256,0-27.63,12.373-27.63,27.63c0,15.264,12.374,27.63,27.63,27.63 c15.257,0,27.63-12.366,27.63-27.63C150.826,185.34,138.452,172.967,123.195,172.967z"
                                        />{" "}
                                        <path
                                            className="st0"
                                            d="M255.996,172.967c-15.264,0-27.63,12.373-27.63,27.63c0,15.264,12.366,27.63,27.63,27.63 c15.257,0,27.63-12.366,27.63-27.63C283.627,185.34,271.253,172.967,255.996,172.967z"
                                        />{" "}
                                        <path
                                            className="st0"
                                            d="M388.797,228.227c15.257,0,27.63-12.366,27.63-27.63c0-15.258-12.373-27.63-27.63-27.63 c-15.257,0-27.63,12.373-27.63,27.63C361.166,215.862,373.54,228.227,388.797,228.227z"
                                        />{" "}
                                        <path
                                            className="st0"
                                            d="M123.195,282.87c-15.256,0-27.63,12.374-27.63,27.63c0,15.257,12.374,27.63,27.63,27.63 c15.257,0,27.63-12.373,27.63-27.63C150.826,295.244,138.452,282.87,123.195,282.87z"
                                        />{" "}
                                        <path
                                            className="st0"
                                            d="M255.996,282.87c-15.264,0-27.63,12.374-27.63,27.63c0,15.257,12.366,27.63,27.63,27.63 c15.257,0,27.63-12.373,27.63-27.63C283.627,295.244,271.253,282.87,255.996,282.87z"
                                        />{" "}
                                        <path
                                            className="st0"
                                            d="M388.797,338.131c15.257,0,27.63-12.373,27.63-27.63c0-15.257-12.373-27.63-27.63-27.63 c-15.257,0-27.63,12.374-27.63,27.63C361.166,325.758,373.54,338.131,388.797,338.131z"
                                        />{" "}
                                        <path
                                            className="st0"
                                            d="M123.195,392.783c-15.256,0-27.63,12.374-27.63,27.63c0,15.257,12.374,27.63,27.63,27.63 c15.257,0,27.63-12.374,27.63-27.63C150.826,405.156,138.452,392.783,123.195,392.783z"
                                        />{" "}
                                        <path
                                            className="st0"
                                            d="M255.996,392.783c-15.264,0-27.63,12.374-27.63,27.63c0,15.257,12.366,27.63,27.63,27.63 c15.257,0,27.63-12.374,27.63-27.63C283.627,405.156,271.253,392.783,255.996,392.783z"
                                        />{" "}
                                        <path
                                            className="st0"
                                            d="M388.797,448.043c15.257,0,27.63-12.374,27.63-27.63c0-15.256-12.373-27.63-27.63-27.63 c-15.257,0-27.63,12.374-27.63,27.63C361.166,435.67,373.54,448.043,388.797,448.043z"
                                        />{" "}
                                        <path
                                            className="st0"
                                            d="M118.616,89.297c9.483,0,17.169-7.686,17.169-17.168v-54.96C135.784,7.686,128.098,0,118.616,0 c-9.498,0-17.176,7.686-17.176,17.169v54.96C101.44,81.611,109.118,89.297,118.616,89.297z"
                                        />{" "}
                                        <path
                                            className="st0"
                                            d="M255.996,89.297c9.483,0,17.169-7.686,17.169-17.168v-54.96C273.165,7.686,265.479,0,255.996,0 c-9.49,0-17.176,7.686-17.176,17.169v54.96C238.82,81.611,246.506,89.297,255.996,89.297z"
                                        />{" "}
                                        <path
                                            className="st0"
                                            d="M424.284,44.899v27.229c0,17.038-13.862,30.907-30.915,30.907c-17.038,0-30.906-13.87-30.906-30.907V44.899 h-75.559v27.229c0,17.038-13.869,30.907-30.906,30.907c-17.053,0-30.914-13.87-30.914-30.907V44.899h-75.559v27.229 c0,17.038-13.87,30.907-30.907,30.907c-17.052,0-30.914-13.87-30.914-30.907V44.899H17.87V512H494.13V44.899H424.284z M466.646,255.557v109.904v9.15v109.912h-137.38h-9.158H191.886h-9.159H45.347V374.612v-9.15V255.557v-128.23h137.38h9.159h128.222 h9.158h137.38V255.557z"
                                        />{" "}
                                        <path
                                            className="st0"
                                            d="M393.368,89.297c9.49,0,17.176-7.686,17.176-17.168v-54.96C410.545,7.686,402.859,0,393.368,0 C383.886,0,376.2,7.686,376.2,17.169v54.96C376.2,81.611,383.886,89.297,393.368,89.297z"
                                        />{" "}
                                    </g>{" "}
                                </g>
                            </svg>
                            <span className='max-lg:hidden'>Appointments</span>
                        </Link>
                    </li>
                    <li className='py-1'>
                        <Link href='/doctor-list' className='flex items-center gap-2 border-b text-blue hover:bg-slate-200 transition-all duration-300 py-4 mx-2 px-4 text-md font-medium text-gray-700 hover:text-gray-900'>
                            <svg className='w-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z"
                                        fill="#5f6fff"
                                    />{" "}
                                    <path
                                        opacity="0.4"
                                        d="M19.5 7.5C19.5 8.88071 18.3807 10 17 10C15.6193 10 14.5 8.88071 14.5 7.5C14.5 6.11929 15.6193 5 17 5C18.3807 5 19.5 6.11929 19.5 7.5Z"
                                        fill="#5f6fff"
                                    />{" "}
                                    <path
                                        opacity="0.4"
                                        d="M4.5 7.5C4.5 8.88071 5.61929 10 7 10C8.38071 10 9.5 8.88071 9.5 7.5C9.5 6.11929 8.38071 5 7 5C5.61929 5 4.5 6.11929 4.5 7.5Z"
                                        fill="#5f6fff"
                                    />{" "}
                                    <path
                                        d="M18 16.5C18 18.433 15.3137 20 12 20C8.68629 20 6 18.433 6 16.5C6 14.567 8.68629 13 12 13C15.3137 13 18 14.567 18 16.5Z"
                                        fill="#5f6fff"
                                    />{" "}
                                    <path
                                        opacity="0.4"
                                        d="M22 16.5C22 17.8807 20.2091 19 18 19C15.7909 19 14 17.8807 14 16.5C14 15.1193 15.7909 14 18 14C20.2091 14 22 15.1193 22 16.5Z"
                                        fill="#5f6fff"
                                    />{" "}
                                    <path
                                        opacity="0.4"
                                        d="M2 16.5C2 17.8807 3.79086 19 6 19C8.20914 19 10 17.8807 10 16.5C10 15.1193 8.20914 14 6 14C3.79086 14 2 15.1193 2 16.5Z"
                                        fill="#5f6fff"
                                    />{" "}
                                </g>
                            </svg>
                            <span className='max-lg:hidden'>Doctors List</span>
                        </Link>
                    </li>
                    {/* <li className='py-4'>
                        <a href='#' className='block px-4 text-sm font-medium text-gray-700 hover:text-gray-900'>
                            Contact
                        </a>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
