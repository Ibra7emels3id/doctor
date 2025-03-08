'use client'
import React, { useState } from 'react';
import NavBar from './NavBar';

const BtnNavBar = () => {
    const [showNav , setShowNav] = useState(false)

    // Handle Show NAvBar
    const HandleShowNavBar = () => {
        setShowNav(!showNav)
    }
    return (
        <>
            <button onClick={HandleShowNavBar} id="toggleOpen" className="lg:hidden">
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
            <NavBar showNav={showNav} HandleShowNavBar={HandleShowNavBar} />
        </>
    );
}

export default BtnNavBar;
