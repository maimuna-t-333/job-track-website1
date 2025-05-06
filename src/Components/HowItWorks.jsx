import React from 'react';

const HowItWorks = () => {
    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold">How HireTrack Works</h2>
                <p className="text-accent mt-2 max-w-xl mx-auto">
                    Follow these simple steps to find and apply for your dream job.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="card bg-base-100 shadow hover:shadow-xl transition duration-300">
                    <div className="card-body items-center text-center">
                        <div className="text-4xl">👤</div>
                        <h2 className="card-title">1. Create Your Profile</h2>
                        <p className='text-accent'>Sign up and personalize your profile to get job suggestions tailored for you.</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow hover:shadow-xl transition duration-300">
                    <div className="card-body items-center text-center">
                        <div className="text-4xl">🏢</div>
                        <h2 className="card-title">2. Browse Companies</h2>
                        <p className='text-accent'>Explore a wide range of companies hiring across various sectors and locations.</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow hover:shadow-xl transition duration-300">
                    <div className="card-body items-center text-center">
                        <div className="text-4xl">📄</div>
                        <h2 className="card-title">3. Explore Jobs</h2>
                        <p className='text-accent'>Check requirements, salaries, and roles before choosing your ideal job.</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow hover:shadow-xl transition duration-300">
                    <div className="card-body items-center text-center">
                        <div className="text-4xl">🚀</div>
                        <h2 className="card-title">4. Apply in One Click</h2>
                        <p className='text-accent'>Apply instantly via the job modal and land interviews quickly.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HowItWorks;