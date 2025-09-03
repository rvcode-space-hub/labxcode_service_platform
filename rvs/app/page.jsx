import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

export default function Home() {
  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-[#44394E] via-[#4a3f54] to-[#3d3249] relative overflow-hidden">
      {/* Header Component */}
      <Header />
      
      {/* Sidebar Component with all animations */}
      <Sidebar />
      
      {/* Main Content Area with reduced top space */}
      <main className="relative z-10 mt-4 pt-4 pr-24">
        {/* Hero Section */}
        <section className="flex items-center justify-center px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Creating innovative digital solutions with cutting-edge technology 
              <br />
              and modern design principles
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Web Development</h3>
                <p className="text-gray-400 text-sm">Modern, responsive websites built with latest technologies</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Mobile Apps</h3>
                <p className="text-gray-400 text-sm">Cross-platform mobile applications for iOS and Android</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">UI/UX Design</h3>
                <p className="text-gray-400 text-sm">Beautiful, intuitive designs that engage users</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-6 px-1">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">30+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-400/10 to-transparent rounded-full blur-3xl"></div>
    </div>

    <Footer/>
    
    </>
   
  );
}
