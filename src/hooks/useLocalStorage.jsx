
const useLocalStorage = () => {
    const DEFAULT_KEY = 'installedApps';

    const get = () => {
        return JSON.parse(localStorage.getItem(DEFAULT_KEY)) || []
    }

    const set = (item) => {
        const installedApps = get();
        const existing = installedApps.some(i => i.id === item.id);
        if (existing) return
        const updated = [...installedApps, item];
        localStorage.setItem(DEFAULT_KEY, JSON.stringify(updated));
    }

    const remove = (id) => {
        const removeId = String(id)
        const installedApps = get();
        const updated = installedApps.filter(item => {
            console.log(typeof item.id, typeof id, typeof removeId);
            return item.id !== removeId
        });
        
        localStorage.setItem(DEFAULT_KEY, JSON.stringify(updated));
    }

    return {get, set, remove};
};

export default useLocalStorage;