import React from 'react';
import Header from '../../Pages/Shared/Header';
import Navbar from '../../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';

const RecipeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RecipeLayout;