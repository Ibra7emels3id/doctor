import Image from 'next/image';
import React from 'react';
import Tables from './Tables';

const MainContainer = () => {
    return (
        <div className='flex overflow-auto'>
            <div className="flex flex-col w-full px-2">
                <div className="title my-5">
                    <h1 className='text-3xl text-blue font-bold'>Doctor List</h1>
                </div>
                <div className="table px-0 md:px-3">
                    <div className="font-sans overflow-x-auto">
                        <table className="w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100 whitespace-nowrap">
                                <tr>
                                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Image
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Specialization
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Joined At
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                                <Tables />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;
