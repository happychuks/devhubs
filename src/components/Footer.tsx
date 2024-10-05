import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4">
            <h2 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h2>
            <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
            />
            <button className="ml-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Subscribe
            </button>
            <p className="mt-4 text-sm">© 2024 DevHubs. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
