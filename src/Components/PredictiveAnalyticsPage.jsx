import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PredictiveAnalyticsPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="pt-14">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-400 to-purple-500 text-white py-20">
          <div className="container mx-auto text-center">
            <img src="./Images/icons8-magic-crystal-ball-100 (3).png" alt="Crystal Ball" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Predictive Analytics</h1>
            <p className="text-lg mb-8 pl-4 pr-4">
              Using machine learning algorithms to analyze past data and predict future trends, helping businesses make informed decisions and anticipate market changes.
            </p>
            <a href="/ServicePlansPage" className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">Plans</a>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="learn-more" className="container mx-auto py-20 px-6 md:px-0">
          <h2 className="text-4xl font-semibold text-center mb-12">What is Predictive Analytics?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-6 ml-4">
                Predictive Analytics leverages statistical algorithms and machine learning techniques to identify the likelihood of future outcomes based on historical data. It’s a powerful tool that businesses use to forecast trends, understand customer behavior, and improve decision-making processes.
              </p>
              <p className="text-lg text-gray-700 mb-6 ml-4 ">
                By analyzing past performance and identifying patterns, Predictive Analytics can provide actionable insights that help businesses stay ahead of the curve. Whether it’s predicting market trends, optimizing operations, or enhancing customer experience, the applications of Predictive Analytics are vast and varied.
              </p>
            </div>
            <div>
              <img src=".\Images\predictive-analytics-techniques.png" alt="Predictive Analytics Illustration" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-12">Benefits of Predictive Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-4 mr-4">
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Improved Decision Making</h3>
                <p className="text-gray-700">
                  Gain deeper insights into your data to make informed, data-driven decisions that propel your business forward.
                </p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Enhanced Customer Experience</h3>
                <p className="text-gray-700">
                  Predict customer needs and preferences to deliver personalized experiences that increase satisfaction and loyalty.
                </p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Optimized Operations</h3>
                <p className="text-gray-700">
                  Streamline operations and reduce costs by predicting maintenance needs, managing inventory, and optimizing supply chains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="container mx-auto py-20 px-6 md:px-0">
          <h2 className="text-4xl font-semibold text-center mb-12">Use Cases of Predictive Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ml-4 mr-4">
            <div className="bg-gradient-to-br from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Sales Forecasting</h3>
              <p>
                Predict future sales trends to manage inventory, plan marketing strategies, and set realistic sales targets.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-400 to-pink-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Risk Management</h3>
              <p>
                Identify potential risks and implement strategies to mitigate them, ensuring business continuity and stability.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Customer Segmentation</h3>
              <p>
                Group customers based on behavior and preferences to tailor marketing efforts and improve customer engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto text-center ml-4 mr-4">
            <h2 className="text-4xl font-semibold mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <p className="text-gray-700 mb-4">
                  "Predictive Analytics has transformed our business. We can now anticipate market changes and adapt quickly."
                </p>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-500">CEO, Example Corp</p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <p className="text-gray-700 mb-4">
                  "With Predictive Analytics, we’ve optimized our inventory and significantly reduced operational costs."
                </p>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-500">COO, Another Corp</p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <p className="text-gray-700 mb-4">
                  "The insights provided by Predictive Analytics have been invaluable for our marketing campaigns."
                </p>
                <h3 className="text-xl font-semibold">Emily Johnson</h3>
                <p className="text-gray-500">CMO, Tech Solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-br from-blue-400 to-purple-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-8">Ready to Boost Your Business with Predictive Analytics?</h2>
            <p className="text-lg mb-8">
              Contact us today to learn how our Predictive Analytics solutions can help you make smarter decisions and achieve your business goals.
            </p>
            <a href="/ServicePlansPage" className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">Get Started</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PredictiveAnalyticsPage;
