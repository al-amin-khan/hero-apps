import React from 'react';
import useAppsListJSON from '../../hooks/useAppsListJSON';
import Card from '../../components/Card/Card';

const Apps = () => {
    const { data, loading, error } = useAppsListJSON();

    return (
        <div className=' mx-auto bg-base-200 pb-10'>
            <div className="container mx-auto text-center pt-10 space-y-2">
                <h3 className='text-[#001931] font-bold text-2xl md:text-3xl lg:text-3xl'>Trending Apps</h3>
                <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-10 pb-10">
                    {
                        loading ? <p>Loading...</p> : data.map(app => <Card key={app.id} appData={app} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;