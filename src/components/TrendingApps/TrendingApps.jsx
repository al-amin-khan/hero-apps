import React from 'react';
import useAppsListJSON from '../../hooks/useAppsListJSON';
import Card from '../Card/Card';
import { Link } from 'react-router';
import Loading from '../Loading/Loading';

const TrendingApps = () => {
    const { data, loading} = useAppsListJSON();
    const sliceAppList = data.slice(0,8);

    return (
        <div className=' mx-auto bg-base-200 pb-10'>
            <div className="container mx-auto text-center pt-10 space-y-2">
                <h3 className='text-[#001931] font-bold text-2xl md:text-3xl lg:text-3xl'>Trending Apps</h3>
                <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
                <div className=" w-[90%] mx-auto md:w-full lg:w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-4 pt-10 pb-10">
                    {
                        loading ? <Loading showNumOfSkeleton={8}/> : sliceAppList.map(app => <Card key={app.id} appData={app} />)
                    }
                </div>
                <div>
                    <button className="btn text-white px-7 bg-gradient">
                        <Link to="/apps">Show All</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrendingApps;