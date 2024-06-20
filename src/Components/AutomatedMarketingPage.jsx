import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AutomatedMarketingPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="pt-14">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white py-20">
          <div className="container mx-auto text-center">
            <img src="./Images/icons8-automation-100 (2).png" alt="Automation" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Automated Marketing Campaigns</h1>
            <p className="text-lg mb-8 ml-4 mr-4">
              Leveraging AI to automate and optimize marketing campaigns, including personalized recommendations, targeted advertising, and customer segmentation.
            </p>
            <a href="/ServicePlansPage" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">Plans</a>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="learn-more" className="container mx-auto py-20 px-6 md:px-0">
          <h2 className="text-4xl font-semibold text-center mb-12">What are Automated Marketing Campaigns?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-6 ml-4 ">
                Automated marketing campaigns use artificial intelligence and machine learning to streamline marketing processes. By analyzing customer data and behavior, AI can create highly personalized marketing messages, optimize advertising spend, and segment customers more effectively.
              </p>
              <p className="text-lg text-gray-700 mb-6 ml-4 ">
                These campaigns help businesses reach the right audience at the right time with the right message, leading to improved engagement, higher conversion rates, and increased ROI.
              </p>
            </div>
            <div>
              <img src=".\Images\MarketingAutomationPic.jpg" alt="Automated Marketing Illustration" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-12">Benefits of Automated Marketing Campaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-4 mr-4 ">
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Personalized Marketing</h3>
                <p className="text-gray-700">
                  Deliver personalized recommendations and messages that resonate with individual customers.
                </p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Targeted Advertising</h3>
                <p className="text-gray-700">
                  Use AI to target the right audience with the right ads, maximizing the effectiveness of your campaigns.
                </p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Customer Segmentation</h3>
                <p className="text-gray-700">
                  Segment your customer base accurately to tailor marketing efforts and increase engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="container mx-auto py-20 px-6 md:px-0">
          <h2 className="text-4xl font-semibold text-center mb-12">Use Cases of Automated Marketing Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-4 mr-4">
            <div className="bg-gradient-to-br from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Email Marketing</h3>
              <p>
                Automate email campaigns to send personalized content at the optimal time, increasing open and click-through rates.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Social Media Advertising</h3>
              <p>
                Utilize AI to optimize social media ads, targeting the most relevant audience and maximizing ad spend efficiency.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-400 to-pink-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Customer Retargeting</h3>
              <p>
                Implement retargeting campaigns that remind potential customers of products they viewed but didn't purchase.
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
                  "Automated marketing campaigns have revolutionized our marketing strategy. We're now reaching the right customers with the right messages."
                </p>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-500">CEO, Example Corp</p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <p className="text-gray-700 mb-4">
                  "AI-powered campaigns have increased our conversion rates and improved our overall marketing ROI significantly."
                </p>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-500">COO, Another Corp</p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <p className="text-gray-700 mb-4">
                  "The personalization and targeting capabilities of automated marketing are game-changers for our business."
                </p>
                <h3 className="text-xl font-semibold">Emily Johnson</h3>
                <p className="text-gray-500">CMO, Tech Solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-8">Ready to Optimize Your Marketing with AI?</h2>
            <p className="text-lg mb-8">
              Contact us today to learn how our automated marketing solutions can help you achieve your business goals.
            </p>
            <a href="/ServicePlansPage" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">Get Started</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AutomatedMarketingPage;
