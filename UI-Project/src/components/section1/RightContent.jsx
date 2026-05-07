import React from 'react';
import RightCard from './RightCard';

const RightContent = ({images}) => {
    return (
        <div className='flex h-full w-3/4 bg-gray-500 p-5 gap-6 overflow-x-auto no-scrollbar'>
           {images.map((Item) => (
            <RightCard Key={Item.id} URL={Item.url} Perception={Item.perception}/>
           ))
        }
        </div>

    )
}

export default RightContent;