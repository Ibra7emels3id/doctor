import Image from 'next/image';
import React from 'react';

const MainHeader = () => {
    return (
        <div className="font-sans bg-gray-800 px-6 py-12 overflow-hidden">
            <div className="bg-blue max-w-7xl max-md:max-w-md mx-auto px-5 pt-5 rounded-xl">
                <div className="grid lg:grid-cols-2 items-center gap-12 h-[600px]  lg:h-[500px] md:px-10">
                    <div className='w-full flex justify-start lg:justify-center flex-col h-full max-md:pt-5 max-md:text-center'>
                        <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px]">
                            Book Appointment
                            With Trusted Doctors.
                        </h2>
                        <div className="flex max-lg:flex-col items-center justify-center gap-2">
                            <div className="icons">
                                <Image
                                    src="/images/group_profiles.png"
                                    alt="Icon 1"
                                    width={100}
                                    height={100}
                                    className="inline-block mr-3"
                                />
                            </div>
                            <p className="text-white text-sm leading-relaxed">
                                Simply browse through our extensive list of trusted doctors,
                                schedule your appointment hassle-free.
                            </p>
                        </div>
                        <div className="mt-12 flex lg:justify-start justify-center  ">
                            <button
                                type="button"
                                className="bg-white flex justify-center gap-2 hover:scale-105 hover:bg-gray-100 transition-all text-gray-800 font-bold text-sm text-gray rounded-full px-5 py-3"
                            >
                                Book appointment <svg viewBox="0 0 24 24" className='w-6 stroke-gray2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <g id="Arrow / Arrow_Right_LG">
                                            {" "}
                                            <path
                                                id="Vector"
                                                d="M21 12L16 7M21 12L16 17M21 12H3"
                                                stroke="#000000"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />{" "}
                                        </g>{" "}
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className=' relative w-full h-full flex items-center justify-center'>
                        <Image
                            src="/images/header_img.png"
                            alt="Main Header Image"
                            width={600}
                            height={300}
                            className="shrink-0 lg:w-full sm:w-[370px] m-auto lg:h-auto lg:right-0 bottom-0 rounded-md object-contain absolute "
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainHeader;
