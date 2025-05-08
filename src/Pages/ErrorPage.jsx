// src/Pages/ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-300">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-2xl mb-6 mt-10">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-blue-400 font-bold text-white px-4 py-2 rounded hover:bg-blue-400"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
