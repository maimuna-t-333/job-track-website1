import React from 'react';
import banner from '../assets/banner.PNG'

const Banner = () => {
    return (
        <div>
            <div
  className="hero h-[600px] my-8 "
  style={{
    backgroundImage:
      `url(${banner})`,
      opacity:1
  }}
>
  <div className="bg-opacity-5"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="ml-80 mt-40 text-accent">
      <h1 className="mb-5 text-right text-5xl font-bold">Where Talent Meets
        <br /> Opportunity!!</h1>
      <p className="mb-5 text-right">
      Explore thousands of job listings, <br /> connect with top employers, <br /> and take the next step in your <br /> career journey—all in one place.
      </p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;