import React from 'react';
import Header from './Header';
import Footer from './Footer';


const ServicePlansPage = () => {
    return (

        <body>
            <Header/>
        

        <div className="min-h-screen bg-gradient-to-br pt-28  from-blue-400 via-green-400 to-red-400 py-12">
          <div className="container mx-auto text-center ">
            <h2 className="text-4xl font-bold text-white mb-8">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-4 mr-4">
              {/* Basic Plan */}
              <div className="p-8 rounded-lg shadow-lg border border-gray-200 bg-white hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic Plan</h3>
                <p className="text-gray-600 mb-8">Perfect for startups and small businesses.</p>
                <div className="text-4xl font-bold text-gray-800 mb-4">$49<span className="text-lg">/month</span></div>
                <ul className="text-left text-gray-600 mb-8 space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500">✔️</span> Predictive Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔️</span> Basic AI Chatbots
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔️</span> Automated Marketing
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500">❌</span> Advanced AI Chatbots
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500">❌</span> Data-driven Insights
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500">❌</span> Personalized Support
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500">❌</span> Custom Solutions
                  </li>
                </ul>
                <a href="/PaymentPage"><button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Get Started</button></a>
              </div>
    
              {/* Standard Plan */}
              <div className="p-8 rounded-lg shadow-lg border border-gray-200 bg-white hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Standard Plan</h3>
                <p className="text-gray-600 mb-8">Ideal for growing businesses with more advanced needs.</p>
                <div className="text-4xl font-bold text-gray-800 mb-4">$99<span className="text-lg">/month</span></div>
                <ul className="text-left text-gray-600 mb-8 space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500">✔️</span> Predictive Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔️</span> Advanced AI Chatbots
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔️</span> Automated Marketing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔️</span> Data-driven Insights
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500">❌</span> Personalized Support
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500">❌</span> Custom Solutions
                  </li>
                </ul>
                <a href="/PaymentPage"><button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">Get Started</button></a>
              </div>
    
              {/* Premium Plan */}
              <div className="p-8 rounded-lg shadow-lg border border-gray-200 bg-white hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium Plan</h3>
                <p className="text-gray-600 mb-8">Best for large enterprises with comprehensive needs.</p>
                <div className="text-4xl font-bold text-gray-800 mb-4">$199<span className="text-lg">/month</span></div>
                <ul className="text-left text-gray-600 mb-8 space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500">✔️</span> Predictive Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔️</span> Advanced AI Chatbots
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔️</span> Automated Marketing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔️</span> Data-driven Insights
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔️</span> Personalized Support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔️</span> Custom Solutions
                  </li>
                </ul>
               <a href="/PaymentPage"> <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">Get Started</button></a>
              </div>
            </div>
          </div>
        </div>
        <Footer/>

        </body>
        
            
        
      );
    };
export default ServicePlansPage;
