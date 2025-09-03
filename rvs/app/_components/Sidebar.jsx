import React from 'react';

export default function SidebarDemo() {
  return (
    <div className=" flexrelative w-full h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden">
      {/* Existing floating dots */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-purple-600 rounded-full animate-ping"></div>
      <div className="absolute top-32 right-16 w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-70 right-30 w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-50 w-5 h-5 bg-emerald-300 rounded-full animate-pulse"></div>
      
      {/* New Right Side Animation Panel - Below Header */}
      <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-20 bg-gradient-to-b from-cyan-50/20 via-blue-50/10 to-purple-50/20 backdrop-blur-sm border-l border-white/20 overflow-hidden">
        {/* Animated Background Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent animate-pulse"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent animate-pulse" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Floating Light Orbs */}
        <div className="absolute top-20 left-3 w-3 h-3 bg-cyan-300/60 rounded-full animate-bounce shadow-lg shadow-cyan-300/50"></div>
        <div className="absolute top-40 right-3 w-2 h-2 bg-blue-300/60 rounded-full animate-bounce shadow-lg shadow-blue-300/50" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-60 left-5 w-4 h-4 bg-purple-300/60 rounded-full animate-bounce shadow-lg shadow-purple-300/50" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-80 right-2 w-2.5 h-2.5 bg-pink-300/60 rounded-full animate-bounce shadow-lg shadow-pink-300/50" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute bottom-40 left-4 w-3.5 h-3.5 bg-emerald-300/60 rounded-full animate-bounce shadow-lg shadow-emerald-300/50" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-20 right-4 w-2 h-2 bg-yellow-300/60 rounded-full animate-bounce shadow-lg shadow-yellow-300/50" style={{animationDelay: '1.2s'}}></div>
        
        {/* Vertical Moving Light */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse">
          <div className="w-full h-full bg-gradient-to-b from-cyan-400/30 via-blue-400/30 to-purple-400/30 animate-ping"></div>
        </div>
        
        {/* Floating Icons/Shapes */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 bg-gradient-to-br from-cyan-200/40 to-blue-200/40 shadow-md" style={{animation: 'spin 4s linear infinite'}}></div>
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-purple-200/40 to-pink-200/40 animate-pulse shadow-md"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-10 left-2 w-8 h-8 bg-cyan-400/10 rounded-full blur-md animate-pulse"></div>
        <div className="absolute bottom-10 right-2 w-6 h-6 bg-purple-400/10 rounded-full blur-md animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-400/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content Area to show the effect */}
      <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent leading-tight">
              Welcome to 
              <br />
              <span className="text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                RVS Code Solutions
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Creating innovative digital solutions with cutting-edge technology 
              <br />
              and modern design principles
            </p>
            
          
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 text-lg">
                Start Your Project
              </button>
              
              <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
    </div>
  );
}