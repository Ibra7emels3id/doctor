import { useAuth } from '@/context/context';
import axios from 'axios';
import React, { useEffect } from 'react';
import { toast } from 'sonner';

const Dialog = ({ HandleShowDialog, productId, showDialog, productName }) => {
    const { getAllDoctor } = useAuth()


    // Handle show hidden Scroll body
    useEffect(() => {
        document.body.style.overflow = showDialog ? 'hidden' : 'auto';
    }, [showDialog]);



    // Handle Delete Product
    const HandleDeleteProduct = async () => {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/product/${productId}`)
            toast.success(res.data.message,{
                autoClose: 2000,
            })
            getAllDoctor()
            HandleShowDialog()
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <div className={`${showDialog ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-200 fixed inset-0 p-4 flex-wrap flex justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]`}>
            <div className={` ${showDialog ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"} transition-all duration-300 w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative`}>
                <svg
                    onClick={HandleShowDialog}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 cursor-pointer shrink-0 fill-gray hover:fill-red float-right"
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
                <div className="my-8 text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-14 fill-red inline"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                        />
                        <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                        />
                    </svg>
                    <h4 className="text-gray-800 text-lg font-semibold mt-4">
                        Are you delete a doctor?
                    </h4>
                    <p className="text-md text-gray font-medium mt-4">
                        Dr/ {productName}
                    </p>
                </div>
                <div className="flex flex-col space-y-2">
                    <button
                        onClick={HandleDeleteProduct}
                        type="submit"
                        className="px-4 py-2 rounded-lg text-white text-sm tracking-wide bg-blue  active:bg-red-500"
                    >
                        Delete
                    </button>
                    <button
                        onClick={HandleShowDialog}
                        type="button"
                        className="px-4 py-2 rounded-lg text-gray-800 text-sm tracking-wide text-white bg-gray active:bg-gray-200"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Dialog);