import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const RightCard = ({ Key, URL, Perception }) => {
    return (
       
        <div className='flex-shrink-0 h-full w-69 relative overflow-hidden rounded-3xl'>
            <img src={URL} alt="Background" className="w-full h-full object-cover" />
            
            <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
                
            
                <h2 className='bg-white text-2xl text-black font-bold rounded-full h-12 w-12 flex items-center justify-center shadow-lg z-20'>
                    {Key}
                </h2>

               
                <div className='text-white'>
                    <p className='mb-4 font-medium drop-shadow-md'>{Perception}</p>
                    <div className='flex items-center justify-between'>
                        <button className='bg-white/30 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full text-sm font-semibold'>
                            Satisfied
                        </button>
                        <button className='bg-white text-black p-3 rounded-full hover:scale-110 transition-transform'>
                            <FaArrowRight size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCard;