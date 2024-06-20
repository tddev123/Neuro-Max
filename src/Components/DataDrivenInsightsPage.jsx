import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DataDrivenInsightsPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="pt-14">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-400 to-pink-500 text-white py-20">
          <div className="container mx-auto text-center">
            <img src="./Images/icons8-marketing-96 (1).png" alt="Customer Insight" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Data-driven Insights</h1>
            <p className="text-lg mb-8 ml-4 mr-4">
              Using AI to extract valuable insights from large datasets, providing businesses with actionable information for optimizing operations, reducing costs, and improving overall performance.
            </p>
            <a href="/ServicePlansPage" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">Plans</a>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="learn-more" className="container mx-auto py-20 px-6 md:px-0">
          <h2 className="text-4xl font-semibold text-center mb-12">What are Data-driven Insights?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-6 ml-4 ">
                Data-driven insights involve using AI and machine learning algorithms to analyze vast amounts of data, uncovering patterns and trends that would be impossible to detect manually. These insights can guide strategic decision-making, improve operational efficiency, and provide a competitive edge.
              </p>
              <p className="text-lg text-gray-700 mb-6 ml-4">
                By leveraging data-driven insights, businesses can make informed decisions based on real-time data, predict future trends, and identify opportunities for growth and optimization.
              </p>
            </div>
            <div>
              <img src=".\Images\DataInsightspic.png" alt="Data Insights Illustration" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-12">Benefits of Data-driven Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-4 mr-4">
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Enhanced Decision Making</h3>
                <p className="text-gray-700">
                  Make informed decisions based on accurate and timely data, reducing risks and improving outcomes.
                </p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Operational Efficiency</h3>
                <p className="text-gray-700">
                  Optimize operations by identifying inefficiencies and areas for improvement through data analysis.
                </p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Cost Reduction</h3>
                <p className="text-gray-700">
                  Reduce costs by uncovering wasteful practices and optimizing resource allocation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="container mx-auto py-20 px-6 md:px-0">
          <h2 className="text-4xl font-semibold text-center mb-12">Use Cases of Data-driven Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-4 mr-4">
            <div className="bg-gradient-to-br from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Customer Behavior Analysis</h3>
              <p>
                Understand customer preferences and behaviors to tailor products and services to their needs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Market Trend Prediction</h3>
              <p>
                Predict market trends and stay ahead of the competition by anticipating changes and adapting strategies accordingly.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Supply Chain Optimization</h3>
              <p>
                Optimize supply chain operations by analyzing data to forecast demand, manage inventory, and reduce lead times.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-4 mr-4">
              <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <p className="text-gray-700 mb-4">
                  "Data-driven insights have transformed our business operations. We're now making decisions backed by data, leading to significant improvements."
                </p>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-500">CEO, Example Corp</p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <p className="text-gray-700 mb-4">
                  "The ability to analyze large datasets in real-time has provided us with a competitive edge in the market."
                </p>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-500">COO, Another Corp</p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <p className="text-gray-700 mb-4">
                  "With data-driven insights, we have been able to optimize our supply chain and reduce operational costs significantly."
                </p>
                <h3 className="text-xl font-semibold">Emily Johnson</h3>
                <p className="text-gray-500">CMO, Tech Solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-br from-red-400 to-pink-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-8">Ready to Leverage Data-driven Insights?</h2>
            <p className="text-lg mb-8">
              Contact us today to learn how our data-driven insights solutions can help you optimize your business operations and improve performance.
            </p>
            <a href="/ServicePlansPage" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">Get Started</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default DataDrivenInsightsPage;
