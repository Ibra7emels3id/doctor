import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import ActionOrder from './ActionOrder';



const Details = async ({ postId }) => {
    // Fetch the post details using the provided postId
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/product/${postId}`);
    const post = response.data;
    console.log(response.data);

    return (
        <div className='flex flex-col'>
            <div className="grid grid-cols-7  gap-4">
                <div className="image  bg-blue col-span-1 lg:col-span-2 max-lg:w-[300px] max-lg:mr-12  m-auto rounded">
                    <Image
                        src={post.image}
                        alt="Product Image"
                        width={200}
                        height={200}
                        className='w-[300px]'
                    />
                </div>
                <div className="text border col-span-7 max-lg:px-3 lg:col-span-5 border-gray/10 py-4 px-10 rounded  flex flex-col gap-3">
                    <div className="title">
                        <h2 className='text-3xl font-semibold'>Dr. {post.name}</h2>
                        <div className="flex items-center gap-2 mt-3">
                            <p className='text-gray/70 '>MBBS - {post.specialization}</p>
                            <span className=' px-2  rounded-full  border border-gray/45 text-[12px] text-gray flex items-center justify-center'>{post.experience}Years</span>
                        </div>
                    </div>
                    <div className="flex flex-col  mt-3">
                        <h4 className='font-semibold'>About.</h4>
                        <p className='text-gray/80'>Dr. {post.description}.</p>
                    </div>
                    <div className="price">
                        <p className='text-lg  mt-3 text-black font-semibold'>Appointment fee: ${post.price}</p>
                    </div>
                </div>
            </div>
            <ActionOrder post={post}/>
        </div>
    );
}

export default Details;
