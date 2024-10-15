//import Image from 'next/image';
//import heroImage from '../public/images/hero-image.png'; // Ensure to have an image in this path
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative hero bg-gray-100 flex items-center justify-center p-8 h-screen">

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 max-w-lg text-center text-white">
        <h1 className="text-5xl font-bold leading-tight">Welcome to DevHubs</h1>
        <p className="mt-4 text-xl">Your one-stop marketplace for developer projects.</p>
        <div className="mt-6">
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;