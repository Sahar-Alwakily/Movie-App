import React from 'react';
import {Outlet} from 'react-router-dom';
import "./Footer.scss"
const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div>Movie App</div>
                <div>@2022 , Movie Inc. or </div>
                </div>
            <Outlet />

        </div>
    );
};

export default Footer;