import React from 'react';
import Details from './_components/details'

const Page = ({params}) => {
    const {postId} = params
    return (
        <div className='max-w-7xl m-auto my-10'>
            <Details postId={postId} />
        </div>
    );
}

export default Page;
