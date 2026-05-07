import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';



const Page1Content = ({images}) =>{
    return(
        <div className='py-3 px-18 flex items-center gap-10 h-[90vh]'>
        <LeftContent/>
        <RightContent images={images}/>
        </div>
    )
}
export default Page1Content;