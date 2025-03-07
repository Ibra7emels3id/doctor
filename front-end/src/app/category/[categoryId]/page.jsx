import React from 'react';
import Products from '../../doctor-list/_components/Products';

const Page = ({params}) => {
    const {categoryId} = params

    const decodedCategory = decodeURIComponent(categoryId); 
    console.log(decodedCategory);
    return (
        <div className='min-h-screen'>
            <div className='flex flex-col max-w-7xl m-auto mt-6'>
                <h1 className='text-start text-gray'>Filter Category List .</h1>
                <div className="flex mt-4 gap-4 m-auto w-full">
                    <div className="flex max-sm:mt-4 w-full">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-5">
                            <Products category={decodedCategory} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
