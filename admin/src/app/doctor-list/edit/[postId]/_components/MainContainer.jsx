import React from 'react';
import FormData from './FormData';

const MainContainer = ({postId}) => {
    return (
        <div className="flex p-2">
            <div className="flex flex-col w-full">
                <div className="title m-3 ">
                    <h2 className='text-2xl font-semibold '>Add Doctor.</h2>
                </div>
                <FormData postId={postId} />
            </div>
        </div>
    );
}

export default MainContainer;