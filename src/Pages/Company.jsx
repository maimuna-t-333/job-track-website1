import React, { useState } from 'react';
import { useParams, useOutletContext } from 'react-router';


const Company = () => {
    const { id } = useParams();
    const { data } = useOutletContext();
    const company = data.find(c => c.id === id);

    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!company) {
        return <p className="text-center mt-10">Company not found.</p>;
    }

    const openModal = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedJob(null);
        setIsModalOpen(false);
    };

    return (
        <div className="w-full mx-auto p-6 space-y-6">
            {/* Company Info */}
            <div className="bg-base-300 p-6 shadow rounded">
                <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
                <p className="text-gray-600 mb-1">{company.location}</p>
                <p className="text-sm text-gray-500 mb-3">{company.industry}</p>
                <a href={company.website} target="_blank" rel="noreferrer" className="text-blue-500 underline">
                    Visit Website
                </a>
            </div>

            {/* Job List */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
                {company.jobs.map((job) => (
                    <div key={job.id} className="bg-base-300 p-4 rounded shadow flex flex-col gap-2">
                        <h3 className="text-xl font-medium">{job.title}</h3>
                        <p className="text-sm text-gray-600">Type: {job.jobType}</p>
                        <p className="text-sm text-gray-600">Salary: {job.salary}</p>
                        <button
                            onClick={() => openModal(job)}
                            className="btn btn-sm btn-info w-[300px] ml-100 bg-base-200 border-none"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && selectedJob && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 text-xl">×</button>
                        <h3 className="text-2xl font-bold mb-2">{selectedJob.title}</h3>
                        <p className="text-gray-600 mb-1">Type: {selectedJob.jobType}</p>
                        <p className="text-gray-600 mb-1">Salary: {selectedJob.salary}</p>
                        <p className="text-gray-600 mb-4">Location: {selectedJob.location}</p>
                        <div className="mb-3">
                            <h4 className="font-semibold mb-1">Description</h4>
                            <p className="text-sm text-gray-700">{selectedJob.description}</p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold mb-1">Requirements</h4>
                            <div className="text-sm text-gray-700 space-y-1">
                                {selectedJob.requirements.map((req, index) => (
                                    <p key={index}>• {req}</p>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <a
                                href={company.website}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary"
                            >
                                Apply
                            </a>
                            <button onClick={closeModal} className="btn btn-outline">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Company;

