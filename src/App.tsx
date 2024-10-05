import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <HeroSection />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
