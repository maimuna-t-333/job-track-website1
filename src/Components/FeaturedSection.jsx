import React from 'react';
import { Link } from 'react-router';

const FeaturedJobs = ({ jobs }) => {
  const featured = jobs.slice(0, 6);
  console.log(featured)

  return (
    <section className="py-16 bg-base-300">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Jobs</h2>
        <div className="carousel w-full space-x-4">
          {featured.map((job, index) => (
            <div
              key={job.id}
              id={`slide${index}`}
              className="carousel-item relative w-full flex justify-center"
            >
              <div className="max-w-md w-full bg-white rounded-lg shadow-md p-5">
                <img
                  src={job.bannerImage}
                  alt=''
                  className="h-40 w-full object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                <p className="text-gray-600 mb-1">{job.location}</p>
                <p className="text-sm text-gray-500 mb-4">{job.salary}</p>
                <Link
                  to={`/companyDetails/${job.companyId}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;

