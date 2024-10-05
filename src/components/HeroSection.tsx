import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
            <h1 className="text-5xl font-bold mb-4">DevHubs</h1>
            <p className="text-lg mb-6">
                DevHubs is a marketplace for developers to showcase and monetize their projects, or offer them for free.
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Get Started
            </button>
        </div>
    );
};

export default HeroSection;
