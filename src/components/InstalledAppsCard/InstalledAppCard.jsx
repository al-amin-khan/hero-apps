import useAppsListJSON from '../../hooks/useAppsListJSON';
import Loading from '../Loading/Loading';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import { useState } from 'react';

const InstalledAppCard = ({onUninstall, app }) => {
    const[loading, setLoading] = useState(true);

    const { id, image, title, downloads, ratingAvg } = app;

    const handleUninstall = () => {
        console.log(id);
        
        if (onUninstall) {
            onUninstall(id);
        }
    };

    return (
        <div className='container mx-auto'>
            <div className="flex justify-between bg-white gap-4 my-3 rounded-sm p-2">
                <div className="flex justify-center items-center gap-x-4 px-2">
                    <img className='w-12 h-12 p-1' src={image} alt="" />
                    <div>
                        <p className='font-bold'>{title}</p>
                        <div className='flex gap-x-4'>
                            <p className='flex gap-1 justify-center items-center'>
                                <img className='w-4 h-4' src={downloadIcon} alt="" />
                                {downloads / 10000000}M
                            </p>
                            <p className='flex gap-1 justify-center items-center'>
                                <img className='w-4 h-4' src={ratingIcon} alt="" />
                                {ratingAvg}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button onClick={handleUninstall} className='btn bg-linear-[125deg,#632EE3,#9F62F2] text-white mt-5 flex justify-center items-center'>
                        Uninstall!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstalledAppCard;
