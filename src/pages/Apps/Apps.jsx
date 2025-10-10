import React, { useEffect, useState } from 'react';
import useAppsListJSON from '../../hooks/useAppsListJSON';
import Card from '../../components/Card/Card';
import { Search } from 'lucide-react';
import useDebounce from '../../hooks/useDebounce';
import Loading from '../../components/Loading/Loading';

const Apps = () => {
    const { data, loading, error } = useAppsListJSON();
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [matchedData, setMatchedData] = useState([]);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        setIsSearching(false);
        if (debouncedSearchTerm === "") {
            setMatchedData(data);
            setIsSearching(false);
        } else {
            const filtered = data.filter(app =>
                app.title.trim().toLowerCase().includes(debouncedSearchTerm)
            );
            setMatchedData(filtered);
        }
    }, [debouncedSearchTerm, data]);

    const handleSearch = (event) => {
        const term = event.target.value.trim().toLowerCase();
        setSearchTerm(term);

        if (term !== '' && !loading) {
            setIsSearching(true);
        }
    };

    if (error) return <p>Error loading app details: {error.message}</p>;

    const showLoading = loading || isSearching;

    const appsToDisplay = matchedData.length > 0 ? matchedData : data;

    return (
        <div className=' mx-auto bg-base-200 pb-10'>
            <div className="container mx-auto text-center pt-10 space-y-2">
                <h3 className='text-[#001931] font-bold text-2xl md:text-3xl lg:text-3xl'>Our All Applications</h3>
                <p className='text-[#627382] text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>

                <div className="flex justify-between items-center mt-10">
                    <div className="">
                        <p>({matchedData.length === 0 && searchTerm !== '' ? 0 : appsToDisplay.length}) Apps Found</p>
                    </div>
                    <div className="">
                        <label className="input">
                            <Search />
                            <input onChange={handleSearch} type="text" className="grow" placeholder="Search an app here" />
                        </label>
                    </div>
                </div>

                <>
                    {
                        matchedData.length === 0 && searchTerm !== '' ?
                            (
                                <p className='text-2xl text-center text-gray-400 flex justify-center'>No results found for "{searchTerm}"</p>
                            ) :
                            (
                                <div className="w-[90%] mx-auto md:w-full lg:w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10 pb-10">
                                    {
                                        showLoading ? <Loading show={12} /> :
                                            appsToDisplay.map(app => <Card key={app.id} appData={app} />)
                                    }
                                </div>
                            )
                    }
                </>
            </div>
        </div>
    );
};

export default Apps;