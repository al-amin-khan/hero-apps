import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../../src/assets/logo.png';

const Navbar = () => {
    const menu = [
        { id: 1, menu: 'Home' },
        { id: 2, menu: 'Apps' },
        { id: 3, menu: 'Installation' }
    ];
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {
                            menu.map(m =>
                                <li key={m.id}>
                                    <NavLink
                                        to={`/${(m.menu).toLowerCase()}`}
                                        className={({ isActive }) => isActive ? 'underline underline-offset-4 decoration-2 decoration-[#632EE3] text-[#590ec2]' : undefined}
                                    >
                                        {m.menu}
                                    </NavLink>
                                </li>)
                        }
                    </ul>
                </div>
                <div className="">
                    <Link to="/" className="btn btn-ghost text-xl flex justify-center items-center">
                        <img
                            className='h-8 w-8'
                            src={logo}
                            alt="logo-hero-io"
                        />
                        <span className=''>Hero.io</span>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        menu.map(m =>
                            <li key={m.id}>
                                <NavLink
                                    to={`/${(m.menu).toLowerCase()}`}
                                    className={({ isActive }) => isActive ? 'underline underline-offset-4 decoration-2 decoration-[#632EE3] text-[#590ec2]' : undefined}
                                >
                                    {m.menu}
                                </NavLink>
                            </li>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-linear-[125deg,#632EE3,#9F62F2] text-white">
                    <Link to="https://github.com/al-amin-khan" target='_blank'>Contribute</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;