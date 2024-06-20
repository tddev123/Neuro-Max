import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PaymentPage = () => {
  return (

    <body>

      <Header/>
      
    
    <div className="min-h-screen bg-gray-100 flex items-center mt-12 justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Payment Details</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Card Number</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your card number"
            />
          </div>
          <div>
            <label className="block mb-1">Name on Card</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter the name on your card"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Expiration Date</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="MM/YYYY"
              />
            </div>
            <div>
              <label className="block mb-1">CVV</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="CVV"
              />
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            Pay Now
          </button>
        </form>
      </div>
    </div>

<Footer/>
    </body>

  );
};

export default PaymentPage;
