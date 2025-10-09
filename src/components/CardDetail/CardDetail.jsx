import { useParams } from 'react-router';
import useAppsListJSON from '../../hooks/useAppsListJSON';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';
import { useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import AppNotFound from '../../pages/NotFound/AppNotFound';
import RatingBarChart from '../RatingBarChart/RatingBarChart';
import Loading from '../Loading/Loading';
import useLocalStorage from '../../hooks/useLocalStorage';

const CardDetail = () => {
    const storeInLocal = useLocalStorage();
    const installedApps = storeInLocal.get();
    console.log(installedApps);
    

    const [installed, setInstalled] = useState(false);

    const { id } = useParams();
    const { data, loading, error } = useAppsListJSON();
    const appDetails = data.find(app => app.id === parseInt(id));
    
    if (loading) return <Loading />;
    if (error) return <p>Error loading app details: {error.message}</p>;
    if (!appDetails) return <AppNotFound />;
    
    const { image, title, companyName, downloads, ratingAvg, size, ratings} = appDetails;


    const handleInstall = () => {
        setInstalled(true);
        toast.success(`Please wait, App is installing on your device...
            `, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

        storeInLocal.set({id, installed: true});
    }

    const isInstalled = installedApps.some(item => item.id === id);




    return (
        <div className='bg-base-200 py-10'>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-8">
                    <div className="grid col-span-3 bg-white p-3">
                        <img className='h-88 w-88 object-contain' src={image} alt={`alt-${title}`} />
                    </div>
                    <div className="grid col-span-9 h-88">
                        <div className="">
                            <p className='text-3xl font-bold'>{title}</p>
                            <p>Developed By: <span className='bg-gradient bg-clip-text text-transparent'>{companyName}</span> </p>
                        </div>

                        <div>
                            <hr className='text-gray-400 py-2' />
                        </div>

                        <div>
                            <div className="flex flex-col md:flex-row lg:flex-row justify-start items-center mb-10 gap-8">
                                <div className="space-y-2">
                                    <div className="">
                                        <img className='w-8 h-8 text-start' src={downloadIcon} alt="" />
                                    </div>
                                    <div className="stat-title text-sm">
                                        Downloads
                                    </div>
                                    <div className="stat-value text-4xl">{downloads / 100000000}M</div>
                                </div>

                                <div className=" space-y-2">
                                    <div>
                                        <img className='w-8 h-8' src={ratingIcon} alt="" />
                                    </div>
                                    <div className="stat-title text-sm">
                                        Average Ratings
                                    </div>
                                    <div className="stat-value text-4xl">{ratingAvg}</div>
                                </div>

                                <div className=" space-y-2">
                                    <div>
                                        <img className='w-8 h-8' src={reviewIcon} alt="" />
                                    </div>
                                    <div className="stat-title text-sm">
                                        Total Reviews
                                    </div>
                                    <div className="stat-value text-4xl">132+</div>
                                </div>
                            </div>

                            <div>
                                <hr className='text-gray-400 py-2' />
                            </div>

                            <div>
                                {
                                    !isInstalled ?
                                        <button onClick={handleInstall} className='btn bg-[#00D390] text-white'>Install Now ({size} MB)</button> :
                                        <button className={`btn text-gray-700 ${isInstalled ? 'bg-gray-400 disabled hover:cursor-not-allowed' : ''} `}>Installed</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="divider">
                </div>

                <div>
                    <RatingBarChart ratings={ratings} />
                </div>

                <div>
                    <strong className="text-2xl font-bold text-[#001931] block mb-2">Description:</strong>
                    <p className="whitespace-pre-line">{appDetails.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;