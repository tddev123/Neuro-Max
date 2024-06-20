import React from 'react';

const HomepageSection2 = () => {
  return (
    <section id="services" className=" z-50 mt-72 w-full bg-white">
      <div className="grid grid-cols-2 gap-6 p-6">
        {/* Service 1 */}
        <a href="/PredictiveAnalytics" className="block">
          <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 shadow-xl hover:brightness-75 transition duration-300">
            <img src="./Images/icons8-magic-crystal-ball-100 (3).png" alt="Crystal Ball" className="w-20 h-20 mb-4" />
            <h3 className="text-3xl font-semibold text-white mb-4">Predictive Analytics</h3>
            <p className="text-lg text-gray-100 text-center">
              Using machine learning algorithms to analyze past data and predict future trends, helping businesses make informed decisions and anticipate market changes.
            </p>
          </div>
        </a>

        {/* Service 2 */}
        <a href="/NaturalLanguageProcessing" className="block">
          <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-gradient-to-br from-green-400 to-teal-500 shadow-xl hover:brightness-75 transition duration-300">
            <img src="./Images/icons8-chatbot-96 (1).png" alt="Chatbot" className="w-20 h-20 mb-4" />
            <h3 className="text-3xl font-semibold text-white mb-4">Natural Language Processing (NLP)</h3>
            <p className="text-lg text-gray-100 text-center">
              Implementing AI-powered chatbots and virtual assistants that can understand and respond to customer queries in real-time, improving customer service efficiency.
            </p>
          </div>
        </a>

        {/* Service 3 */}
        <a href="/AutomatedMarketing" className="block">
          <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl hover:brightness-75 transition duration-300">
            <img src="./Images/icons8-automation-100 (2).png" alt="Automation" className="w-20 h-20 mb-4" />
            <h3 className="text-3xl font-semibold text-white mb-4">Automated Marketing Campaigns</h3>
            <p className="text-lg text-gray-100 text-center">
              Leveraging AI to automate and optimize marketing campaigns, including personalized recommendations, targeted advertising, and customer segmentation.
            </p>
          </div>
        </a>

        {/* Service 4 */}
        <a href="/DataDrivenInsights" className="block">
          <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-gradient-to-br from-red-400 to-pink-500 shadow-xl hover:brightness-75 transition duration-300">
            <img src="./Images/icons8-marketing-96 (1).png" alt="Customer Insight" className="w-20 h-20 mb-4" />
            <h3 className="text-3xl font-semibold text-white mb-4">Data-driven Insights</h3>
            <p className="text-lg text-gray-100 text-center">
              Using AI to extract valuable insights from large datasets, providing businesses with actionable information for optimizing operations, reducing costs, and improving overall performance.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HomepageSection2;
