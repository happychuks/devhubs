import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center bg-gray-800 p-4 text-white">
            <div className="flex items-center space-x-4">
                <div className="font-bold text-xl">DevHubs</div>
                <input
                    type="text"
                    placeholder="Search any project"
                    className="px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                />
            </div>
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gray-600 rounded-full px-4 py-2 focus:outline-none">
                    Menu
                </button>
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-full bg-gray-700 shadow-lg">
                        <Link to="/login" className="block px-4 py-2 text-sm text-white hover:bg-gray-600 rounded-full">
                            Login
                        </Link>
                        <Link to="/signup" className="block px-4 py-2 text-sm text-white hover:bg-gray-600 rounded-full">
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
