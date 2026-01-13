import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            
            {/* main content */}
            <div className="flex-grow">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default RootLayout;
