import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🤖',
      title: 'Machine Learning Solutions',
      description: 'Build intelligent systems that learn from data and improve over time. From predictive analytics to recommendation engines, we create ML models tailored to your business needs.',
      features: ['Predictive Analytics', 'Custom ML Models', 'Data Processing'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-500/50'
    },
    {
      id: 2,
      icon: '💬',
      title: 'Natural Language Processing',
      description: 'Transform how you interact with text and speech data. Our NLP solutions enable chatbots, sentiment analysis, language translation, and intelligent document processing.',
      features: ['Chatbot Development', 'Sentiment Analysis', 'Text Mining'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-500/50'
    },
    {
      id: 3,
      icon: '👁️',
      title: 'Computer Vision',
      description: 'Enable machines to see and understand visual data. From object detection to facial recognition, we develop cutting-edge computer vision applications for real-world challenges.',
      features: ['Object Detection', 'Image Recognition', 'Video Analytics'],
      gradient: 'from-pink-500 to-orange-500',
      bgGradient: 'from-pink-500/10 to-orange-500/10',
      borderColor: 'border-pink-500/20',
      hoverBorder: 'hover:border-pink-500/50'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-4 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full">
            <span className="text-purple-300 text-sm font-medium">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            AI Solutions for
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
              Every Business Need
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leverage the power of artificial intelligence to transform your business operations and drive innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border ${service.borderColor} ${service.hoverBorder} rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br ${service.gradient} rounded-xl text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <svg className={`w-5 h-5 mr-2 bg-gradient-to-r ${service.gradient} rounded-full p-1`} fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <button className={`group/btn inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300`}>
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>

              {/* Corner decoration */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Don't see what you're looking for?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50">
            Request Custom Solution
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
