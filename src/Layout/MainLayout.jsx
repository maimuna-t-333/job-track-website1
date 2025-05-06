import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import HowItWorks from '../Components/HowItWorks';
import Home from '../Pages/Home';

const MainLayout = () => {
    const data=useLoaderData();
    
    return (
        <div>
            <header>
                <Navber></Navber>
                
            </header>
            <section>
            <Home data={data}></Home>
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