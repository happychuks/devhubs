import React from 'react';
import { COLORS, TEXTS } from '../utils/constants';

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{TEXTS.welcome}</h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 text-center max-w-lg">{TEXTS.description}</p>
            <a
                href="#"
                className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded shadow hover:bg-blue-600 transition duration-300"
            >
                {TEXTS.getStarted}
            </a>
        </div>
    );
};

export default LandingPage;
