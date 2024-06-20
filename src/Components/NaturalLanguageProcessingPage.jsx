import React from 'react';
import Header from './Header';
import Footer from './Footer';

const NaturalLanguageProcessingPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="pt-14">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-400 to-teal-500 text-white py-20">
          <div className="container mx-auto text-center">
            <img src="./Images/icons8-chatbot-96 (1).png" alt="Chatbot" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Natural Language Processing (NLP)</h1>
            <p className="text-lg mb-8 ml-4 mr-4">
              Implementing AI-powered chatbots and virtual assistants that can understand and respond to customer queries in real-time, improving customer service efficiency.
            </p>
            <a href="/ServicePlansPage" className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">Plans</a>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="learn-more" className="container mx-auto py-20 px-6 md:px-0">
          <h2 className="text-4xl font-semibold text-center mb-12">What is Natural Language Processing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-6 ml-4">
                Natural Language Processing (NLP) is a branch of artificial intelligence that focuses on the interaction between computers and humans through natural language. By leveraging machine learning and linguistics, NLP enables computers to understand, interpret, and respond to human language in a valuable way.
              </p>
              <p className="text-lg text-gray-700 mb-6 ml-4">
                NLP is used in a variety of applications, such as chatbots, virtual assistants, sentiment analysis, language translation, and more. It plays a crucial role in enhancing customer service, automating routine tasks, and providing valuable insights from textual data.
              </p>
            </div>
            <div>
              <img src=".\Images\NaturalLanguageProcessingPic.jpg" alt="NLP Illustration" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-12">Benefits of Natural Language Processing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-4 mr-4">
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Improved Customer Service</h3>
                <p className="text-gray-700">
                  Implement AI-powered chatbots that can handle customer queries 24/7, providing quick and accurate responses.
                </p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Automated Processes</h3>
                <p className="text-gray-700">
                  Automate routine tasks such as data entry, email management, and content creation, freeing up valuable human resources.
                </p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Valuable Insights</h3>
                <p className="text-gray-700">
                  Analyze customer feedback and social media interactions to gain insights into customer sentiments and preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="container mx-auto py-20 px-6 md:px-0">
          <h2 className="text-4xl font-semibold text-center mb-12">Use Cases of NLP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-4 mr-4">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Customer Support</h3>
              <p>
                Deploy chatbots to handle customer queries, reducing wait times and improving satisfaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-400 to-pink-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Sentiment Analysis</h3>
              <p>
                Monitor social media and customer reviews to gauge public sentiment and improve products or services.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Language Translation</h3>
              <p>
                Provide real-time language translation for global customers, enhancing communication and reach.
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
                  "NLP has significantly improved our customer support operations. Our response times have reduced, and customer satisfaction has increased."
                </p>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-500">CEO, Example Corp</p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <p className="text-gray-700 mb-4">
                  "Using NLP for sentiment analysis has provided us with deep insights into our customer base, helping us to better tailor our services."
                </p>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-500">COO, Another Corp</p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <p className="text-gray-700 mb-4">
                  "The NLP-powered chatbots have revolutionized our customer interaction, providing instant support and freeing up our team for more complex issues."
                </p>
                <h3 className="text-xl font-semibold">Emily Johnson</h3>
                <p className="text-gray-500">CMO, Tech Solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-br from-green-400 to-teal-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-8">Ready to Enhance Your Business with NLP?</h2>
            <p className="text-lg mb-8">
              Contact us today to learn how our NLP solutions can help you improve customer service and achieve your business goals.
            </p>
            <a href="/ServicePlansPage" className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">Get Started</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default NaturalLanguageProcessingPage;
