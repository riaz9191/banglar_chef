/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default Main;