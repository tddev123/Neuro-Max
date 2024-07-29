import React from 'react';
import ParticlesComponent from './Particles';
import Header from './Header';
import HomepageSection2 from './HomepageSection2';
import Footer from './Footer';

const HomePage = () => {
  return (

    <body className=''>

      <Header/>,
      
      



      <ParticlesComponent id="particles" />

         <div className="swoop-container">
  <div className="swoop-wrapper">
    <div className="swoop-text swoop-in-out text-xl md:text-4xl">
      Maximize Your Potential
    </div>
    <div className="swoop-text swoop-out-in text-xl md:text-4xl">
      Harness AI for Intelligent Solutions
    </div>
    <div className="swoop-text swoop-in-out text-xl md:text-4xl">
      Innovate with Machine Learning Technology
    </div>
    <div className="swoop-text swoop-out-in text-xl md:text-4xl">
      Take Your Business To the Next Level
    </div>
  </div>
</div>

    <div className="bounce-flash-arrow text-white text-6xl absolute bottom-3 right-1/2 z-50 "><a href="#services">▼</a></div> {/* Arrow for scrolling down */}

d
  <HomepageSection2/>


<Footer/>
 


    </body>
  );
};

export default HomePage;
