import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import HowItWorks from '../Components/HowItWorks';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navber></Navber>
                
            </header>
            <section>
            <Banner></Banner>
            </section>
            <section>
            <HowItWorks></HowItWorks>
            </section>
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