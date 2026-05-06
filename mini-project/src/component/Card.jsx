import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import "../index.css";

const Card = ({data}) => {
    if (!data) return null;
    return (
        <div className='card'>

            <div className='top'>
                <img
                    src={data.brandLogo}
                    alt={data.company}
                />
                <button> Save <FaRegBookmark size={16} /> </button>
            </div>

            <div className='center'>
                <h3>
                    {data.company} <span>{data.time}</span>
                </h3>
                <h2>{data.role}</h2>
                <div className='tag'>
                    <h4>{data.tag1}</h4>
                    <h4>{data.tag2}</h4>
                </div>
            </div>

            <div className='bottom'>
                <div>
                    <h3>{data.pay}</h3>
                    <p>{data.location}</p>
                </div>
                <div>
                    <button>Apply Now</button>
                </div>
            </div>

        </div>
    )
}
export default Card;