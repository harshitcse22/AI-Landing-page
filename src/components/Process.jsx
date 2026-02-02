import React from 'react';

const Process = () => {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business needs and identify AI opportunities that deliver measurable ROI.',
      icon: '🎯',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      id: 2,
      number: '02',
      title: 'Development & Integration',
      description: 'Our experts build and deploy custom AI solutions seamlessly integrated with your systems.',
      icon: '⚙️',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      id: 3,
      number: '03',
      title: 'Optimization & Support',
      description: 'Continuous monitoring and refinement ensure peak performance and long-term success.',
      icon: '📈',
      gradient: 'from-pink-500 to-orange-500',
      bgGradient: 'from-pink-500/10 to-orange-500/10'
    }
  ];

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-4 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full">
            <span className="text-blue-300 text-sm font-medium">
              How We Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, Proven
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
              Three-Step Process
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to deployment, we guide you through every stage of your AI transformation
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Card */}
                <div className={`relative bg-gradient-to-br ${step.bgGradient} backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-white/20`}>
                  
                  {/* Step Number Badge */}
                  <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6 mt-4">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white text-center mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom decoration */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`}></div>
                </div>

                {/* Arrow connector - Only between cards on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-6 transform translate-x-1/2 z-20">
                    <svg className="w-8 h-8 text-blue-400 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Ready to start your AI journey?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
