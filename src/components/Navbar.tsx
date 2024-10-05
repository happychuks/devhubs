import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <h1 className="text-white text-2xl font-bold">DevHubs</h1>
                <div className="hidden md:flex space-x-4"> {/* Hidden on small screens, flex on medium and above */}
                    {['Home', 'About', 'Services', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
                        >
                            {item}
                        </a>
                    ))}
                </div>
                {/* Hamburger icon for mobile */}
                <div className="md:hidden">
                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
