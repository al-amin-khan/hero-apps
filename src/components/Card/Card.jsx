import React from 'react';
import { CiStar } from 'react-icons/ci';
import { MdFileDownload, MdStar } from 'react-icons/md';

// {id, title, companyName, description, downloads, image, ratingAvg, ratings, reviews, size}
const Card = ({ appData }) => {
    const { id, title, downloads, image, ratingAvg} = appData;

    return (
        <div className="card bg-base-100 shadow-md">
            <figure>
                <img
                    className='h-40 w-40 px-2 py-3 object-contain'
                    src={image}
                    alt={`alt-${title}-image`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="card-actions justify-between">
                    <div className="badge badge-soft text-[#00D390] inline-flex items-center gap-1">
                        <MdFileDownload className='font-bold shrink-0' />
                        {downloads / 1000000000}M
                    </div>
                    <div className="badge bg-[#FFF0E1] text-[#FF8811]">
                        <MdStar />
                        {ratingAvg}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;