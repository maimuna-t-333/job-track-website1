import React from 'react';
import Banner from '../Components/Banner';
import HowItWorks from '../Components/HowItWorks';
import CompaniesSection from '../Components/CompaniesSection';

const Home = ({data}) => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <div>
                <CompaniesSection data={data}></CompaniesSection>
            </div>
        </div>
    );
};

export default Home;