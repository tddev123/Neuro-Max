import React, { useState, useEffect } from 'react';
import './MainCSS/Primary.css';

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-black text-white fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isShrunk ? 'py-1' : 'py-4'} shadow-lg`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center text-center">
            <img className="mr-2 HeaderBrainLogo" src="./Images/icons8-brain-50.png" alt="Logo" />
            <h1 className="text-3xl font-serif tracking-wide">Neuro<span className="HeaderMax">Max</span></h1>
          </a>
        </div>
        <nav className="flex space-x-6">
          <a href="/" className="text-lg hover:text-gray-300 transition duration-300">Home</a>
          <a href="#about" className="text-lg hover:text-gray-300 transition duration-300">About</a>
          <a href="#services" className="text-lg hover:text-gray-300 transition duration-300">Services</a>
          <a href="/ServicePlansPage" className="text-lg hover:text-gray-300 transition duration-300">Plans</a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <a href="/LoginPage">
            <button className="LoginBtn hover:bg-opacity-50 hover:bg-yellow-200 bg-transparent border-2 text-white font-bold py-2 px-4 rounded transition duration-300">Login</button>
          </a>
          <a href="/SignUpPage">
            <button className="Signinbtn hover:bg-opacity-50 hover:bg-yellow-200 bg-transparent border-2 text-white font-bold py-2 mr-5 px-4 rounded transition duration-300">Sign Up</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
