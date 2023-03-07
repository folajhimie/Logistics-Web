import React from 'react';

import Navbar from '../Navbar/index';
import Footer from '../Footer/Footer';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="app">
            <Navbar />
            <Outlet />
            <Footer />
            {/* <QueryClientProvider client={queryClient}>
        </QueryClientProvider> */}
        </div>
    )
}

export default Layout;