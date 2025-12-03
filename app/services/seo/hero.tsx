"use client"
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function SoFiLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm mb-6 border border-gray-100 group hover:shadow-md transition-shadow duration-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      <span className="text-sm font-medium text-gray-700">Grow your business</span>
                      <ChevronRight className="ml-2 w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Empowering Your<br />
              Business Growth<br />
              to <span className="relative inline-block">
                next
                
              </span> level
            </h1>
            <p className="text-gray-600 text-lg">
              We provide professional financial advice and strategies to help your <br />
              business achieve consistent growth and long-term success.
            </p>
          </div>

          <button className="bg-[#5C0632] text-white px-8 py-4 rounded-full hover:bg-[#4a0528] transition flex items-center space-x-2 group">
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>

          

          
        </div>

        {/* Right Column */}
        <div className="relative">
          {/* Main Background Card - Decreased Width */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl w-100 mx-auto">
            <div className="relative"> 
              <img 
                  src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg"
                  alt="Professional consultant"
                  className="w-full h-64 object-cover"
                />

              {/* Bottom Image Section - Professional Woman */}
              <div className="bg-white ">
                <img 
                  src="https://img.freepik.com/free-photo/elegant-female-student-glasses-posing-with-pleasure-holding-laptop_197531-6706.jpg"
                  alt="Professional consultant"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Stats Card - Moved Outside */}
          {/* <div className="absolute -top-4 -right-8 bg-white rounded-2xl p-6 shadow-xl w-64">
            <div className="flex items-start space-x-3">
              <div className="bg-[#5C0632] rounded-full p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M9 11L12 14L22 4M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[#5C0632] text-sm font-semibold mb-1">+25.5%</div>
                <h3 className="font-bold text-lg mb-2">
                  Increase of the<br />
                  companys<br />
                  efficiency
                </h3>
                <div className="text-xs text-gray-400">(+2.5%) Month</div>
                <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#5C0632]" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Rating Card - Moved Outside */}
          <div className="absolute -bottom-6 -left-8 bg-[#5C0632] rounded-2xl p-5 shadow-xl flex items-center space-x-4 w-64">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-[#5C0632] font-bold text-lg">9.8</span>
            </div>
            <div>
              <div className="text-white font-semibold">Overall clients rate</div>
              <div className="text-gray-300 text-sm">More than 100 reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}