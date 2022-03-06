import React from 'react';
import {Outlet} from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div>
            <h1>PageNotFuond</h1>
            <Outlet />

        </div>
    );
};

export default PageNotFound;