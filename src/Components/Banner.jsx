import React from 'react';
import banner from '../assets/banner.PNG';

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[600px] my-8 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="bg-base-100 bg-opacity-5"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="text-accent px-4 md:px-10 lg:px-20 text-left md:text-right lg:ml-80 lg:mt-40">
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">
              Where Talent Meets
              <br className="hidden md:block" /> Opportunity!!
            </h1>
            <p className="mb-5 text-sm md:text-base lg:text-lg">
              Explore thousands of job listings, <br className="hidden sm:block" />
              connect with top employers, <br className="hidden sm:block" />
              and take the next step in your <br className="hidden sm:block" />
              career journey—all in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
