import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <Outlet/>
        </div>
    );
};

export default Root;