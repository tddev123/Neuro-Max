import React from 'react';
import Header from './Header';
import Footer from './Footer';

const LoginPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col mt-16">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login to Your Account</h2>
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
            <div className="flex justify-between items-center mt-6">
              <a href="/PasswordRecoveryPage" className="text-sm text-gray-700 hover:underline">Forgot password?</a>
              <a href="/SignUpPage" className="text-sm text-blue-500 hover:underline">Create an account</a>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;
