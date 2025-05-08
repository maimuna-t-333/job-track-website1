import React from 'react';
import { Link } from 'react-router';

const CompaniesSection = ({ data }) => {
    // console.log(data)
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Top Companies</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {data.map((company) => (
                        <Link
                            to={`/companyDetails/${company.id}`}
                            key={company.id}
                            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
                        >
                            <img
                                src={company.logo}

                                className="w-full h-24 object-contain mb-3"
                            />
                            <p className="text-center font-semibold text-gray-800">{company.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompaniesSection;
