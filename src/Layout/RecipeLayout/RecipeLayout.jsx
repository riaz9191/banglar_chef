import React from 'react';
import Header from '../../Pages/Shared/Header';
import Navbar from '../../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer';

const RecipeLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;