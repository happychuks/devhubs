import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import './styles/global.css'; // Import global styles

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <LandingPage />
        </div>
    );
};

export default App;
