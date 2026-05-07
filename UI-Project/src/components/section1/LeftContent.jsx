import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const LeftContent = () => {
    return (
        <div className='h-full flex flex-col justify-between w-1/3'>
            <div className='p-4' >
                <h3 className='mb-7 leading-1.1 text-6xl font-bold'>Prospective <br /><span className='text-gray-500' >customer</span> <br />segmentation</h3>
                <p className='text-xl font-medium text-gray-500'>We certainly appreciate your patience and hope you enjoy the fast, efficient, and friendly service our expert team has provided to ensure a completely satisfying and impressive experience.</p>
            </div>
            <div><FiArrowUpRight size={80} color="black" /></div>
        </div>
    )
}

export default LeftContent;