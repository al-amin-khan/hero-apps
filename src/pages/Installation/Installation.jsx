import { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import InstalledAppCard from '../../components/InstalledAppsCard/InstalledAppCard';
import { toast } from 'react-toastify';
import useAppsListJSON from '../../hooks/useAppsListJSON';
import Loading from '../../components/Loading/Loading';
import AppNotFound from '../NotFound/AppNotFound';

const Installation = () => {
    const storage = useLocalStorage();
    const [installedApps, setInstalledApps] = useState(() => storage.get() || []);
    const [appsWithDetail, setAppsWithDetail] = useState([]);
    const { data, loading, error } = useAppsListJSON();

    // const fullAppListWithDetails = installedApps.map(app => {
    //     const appDetail = data.find(item => item.id === Number(app.id))
    //     return appDetail;
    // });


    useEffect(() => {
        if (!data.length) {
            setAppsWithDetail([]);
            return;
        }
        const withDetail = installedApps
            .map((item) => data.find((app) => app.id === Number(item.id)))
            .filter(Boolean);
        setAppsWithDetail(withDetail);
    }, [data, installedApps]);



    if (loading) return <Loading show={3} />
    if (error) return <AppNotFound />


    const handleSortingChange = (e) => {
        const sortByDownloadsAsc = [...appsWithDetail].sort((a, b) => a.downloads - b.downloads);
        const sortByDownloadsDesc = [...appsWithDetail].sort((a, b) => b.downloads - a.downloads);

        const selectedOption = e.target.value;

        if (selectedOption === 'Low - High') {
            setAppsWithDetail(sortByDownloadsAsc);
        } else if (selectedOption === 'High - Low') {
            setAppsWithDetail(sortByDownloadsDesc);
        }
    }

    const handleUninstall = (removeId) => {
        console.log({removeId});
        
        const normalizedId = String(removeId);
        storage.remove(normalizedId);
        setInstalledApps((prev) => prev.filter((app) => String(app.id) !== normalizedId));
        toast.success('App Uninstalled Successfully');
    };



    return (
        <div>
            <div className=' mx-auto bg-base-200 pb-10'>
                <div className="container mx-auto text-center pt-10 space-y-2">
                    <h3 className='text-[#001931] font-bold text-2xl md:text-3xl lg:text-3xl'>Our All Applications</h3>
                    <p className='text-[#627382] text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className="container mx-auto flex justify-between items-center mt-10">
                    <div className="">
                        <p>({installedApps.length}) Apps Installed</p>
                    </div>
                    <div className="">
                        <select onChange={handleSortingChange} name="sort" defaultValue="Sort by downloads" className="select select-bordered w-42">
                            <option className='w-full' disabled={true}>Sort by downloads</option>
                            <option className='w-full'>Low - High</option>
                            <option className='w-full'>High - Low</option>
                        </select>

                    </div>
                </div>
                {
                    appsWithDetail.map((app) => (
                        <InstalledAppCard
                            key={app.id}
                            onUninstall={handleUninstall}
                            app={app}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Installation;
