import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-600 mt-4 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-white bg-indigo-600 px-5 py-2 rounded-xl hover:bg-indigo-700 transition">
        Go Back Home
      </Link>
    </div>
  );
}
