import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Components/Navber';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navber></Navber>
            </header>
            <main>
                <Outlet>

                </Outlet>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default MainLayout;