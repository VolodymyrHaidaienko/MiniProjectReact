import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}></Link></li>

            </ul>
            <Outlet/>
        </div>
    );
};

export default Layout;