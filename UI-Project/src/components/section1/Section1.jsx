import React from 'react';
import Navbar from './Navbar';
import Page1Content from './Page1Content';

const Section1 = ({images}) =>{
    return (
        <div className='h-screen w-full'>
            <Navbar/>
            <Page1Content images={images}/>
        </div>
        
    )
}

export default Section1;