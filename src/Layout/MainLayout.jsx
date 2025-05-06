import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navber></Navber>
                <Banner></Banner>
            </header>
            <main>
                <Outlet>

                </Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;