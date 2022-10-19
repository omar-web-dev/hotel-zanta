import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shear/Header';

const Root = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Root;