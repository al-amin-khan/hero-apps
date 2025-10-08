import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import HeroFooter from '../components/Footer/HeroFooter';

const Root = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            
            <main>
                <Outlet/>
            </main>

            <footer>
                <HeroFooter/>
            </footer>
        </div>
    );
};

export default Root;