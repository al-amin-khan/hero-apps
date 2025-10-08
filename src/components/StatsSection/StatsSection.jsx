import React from 'react';

const StatsSection = () => {
    return (
        <div>
            <div className="bg-gradient text-center text-white pb-1">
                <p className='text-2xl md:text-3xl lg:text-3xl font-bold pt-10 pb-5'>Trusted by Millions, Built for You</p>
                <div className="w-[80%] mx-auto flex flex-col md:flex-row lg:flex-row justify-around items-center mb-10 gap-4">
                    <div className="space-y-2">
                        <div className="stat-title text-white text-base">Total Downloads</div>
                        <div className="stat-value text-6xl">29.6M</div>
                        <div className="stat-desc text-white">21% more than last month</div>
                    </div>

                    <div className=" space-y-2">
                        <div className="stat-title text-white text-base">Total Reviews</div>
                        <div className="stat-value text-6xl">906K</div>
                        <div className="stat-desc text-white">46% more than last month</div>
                    </div>

                    <div className=" space-y-2">
                        <div className="stat-title text-white text-base">New Registers</div>
                        <div className="stat-value text-6xl">132+</div>
                        <div className="stat-desc text-white">31 more will Launch</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;