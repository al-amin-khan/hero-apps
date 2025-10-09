import React, { useEffect, useState } from 'react';

const useLocalStorage = () => {
    const DEFAULT_KEY = 'installedApps';

    const get = () => {
        return JSON.parse(localStorage.getItem(DEFAULT_KEY)) || []
    }

    const set = (item) => {
        const installedApps = get();
        const existing = installedApps.some(i => i.id === item.id);
        if (existing) return
        installedApps.push(item);
        localStorage.setItem(DEFAULT_KEY, JSON.stringify(installedApps));
    }

    const remove = (id) => {
        const installedApps = get();
        const updated = installedApps.filter(item => item.id === id);
        localStorage.setItem(DEFAULT_KEY, JSON.stringify(updated));
    }

    return {get, set, remove};
};

export default useLocalStorage;