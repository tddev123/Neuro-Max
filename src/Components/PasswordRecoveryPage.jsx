import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PasswordRecoveryPage = () => {
  return (
    <body>
        <Header/>
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-teal-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Password Recovery</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email address below, and we will send you instructions on how to reset your password.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="example@mail.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Send Instructions
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Remembered your password?{' '}
          <a href="/LoginPage" className="text-green-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>

    <Footer/>

    </body>
  );
};

export default PasswordRecoveryPage;
