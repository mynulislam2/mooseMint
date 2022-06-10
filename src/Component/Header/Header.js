import React from 'react';
import { FaNewspaper } from "react-icons/fa";
import './Header.css';

const Header = () => {
    return (
        <div class="navbar header  px-10">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase text-white">
                        <li><a>Home</a></li>
                        <li><a>mini moose</a></li>
                        <li><a>utilities</a></li>
                        <li><a>society rewards</a></li>
                        <li><a>merch</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl max-w-full"><img width={300}
                height={28}  src="https://moosesocietynft.io/wp-content/uploads/2022/03/Website-Logo-2-300x28.png" alt="" srcset="" /></a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 uppercase text-white">
                    <li><a>Home</a></li>

                    <li><a>mini moose</a></li>
                    <li><a>utilities</a></li>
                    <li><a>society rewards</a></li>
                    <li><a>merch</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a class="dashboard uppercase flex items-center gap-x-1 dashboardbtn">
                    Dashboard
                    <FaNewspaper />
                </a>
            </div>
        </div>
    );
};

export default Header;