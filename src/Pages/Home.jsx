import React from 'react';
import Banner from '../Components/Banner';
import HowItWorks from '../Components/HowItWorks';
import CompaniesSection from '../Components/CompaniesSection';
import { useOutletContext } from 'react-router';
import FeaturedSection from '../Components/FeaturedSection';
import SuccessStories from '../Components/SuccessStories';

const Home = () => {
    const {data}=useOutletContext()
    const jobs=data.flatMap((company)=>company.jobs.map((job)=>({...job,companyId:company.id})))
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <FeaturedSection jobs={jobs}></FeaturedSection>
            <div>
                <CompaniesSection data={data}></CompaniesSection>
            </div>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;