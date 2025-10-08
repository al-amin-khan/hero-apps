import { useEffect, useState } from "react";

const useAppsListJSON = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {    
        (async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch('/apps.json');
                if (!res.ok) throw new Error(`HTTP ${res.status}`);

                const data = await res.json();
                setData(data);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return { data, loading, error };
};

export default useAppsListJSON;