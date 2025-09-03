'use client';
import React from 'react';

export default function Header() {
    return (
        <div className="h-16 flex items-center justify-between px-6 bg-gradient-to-r from-[#44394E] via-[#4a3f54] to-[#44394E] shadow-lg border-b border-yellow-400/20">
            {/* Logo Section */}
            <div className="flex items-center">
                <div className="relative">
                    <p
                        className="text-3xl font-bold animate-pulse bg-gradient-to-r from-yellow-300 via-violet-400 to-purple-600 bg-clip-text text-transparent"
                        style={{
                            textShadow:
                                "0 0 10px rgba(209, 237, 67, 0.5), 0 0 20px rgba(255, 247, 0, 0.3), 0 0 30px rgba(255, 247, 0, 0.1)",
                        }}
                    >
                        rvscodesolutions
                    </p>
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
                </div>
            </div>

            {/* Navigation - Centered */}
            <div className="flex-1 flex justify-center">
                <nav className="bg-black/20 backdrop-blur-sm rounded-full px-8 py-2 border border-yellow-400/30">
                    <ul className="flex space-x-8 text-white text-lg font-medium">
                        <li className="relative group">
                            <a className="hover:text-yellow-300 cursor-pointer transition-all duration-300 py-2 px-4 rounded-full hover:bg-yellow-400/10">
                                Home
                            </a>
                            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                        </li>
                        <li className="relative group">
                            <a className="hover:text-yellow-300 cursor-pointer transition-all duration-300 py-2 px-4 rounded-full hover:bg-yellow-400/10">
                                About
                            </a>
                            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                        </li>
                        <li className="relative group">
                            <a className="hover:text-yellow-300 cursor-pointer transition-all duration-300 py-2 px-4 rounded-full hover:bg-yellow-400/10">
                                Services
                            </a>
                            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                        </li>
                        <li className="relative group">
                            <a className="hover:text-yellow-300 cursor-pointer transition-all duration-300 py-2 px-4 rounded-full hover:bg-yellow-400/10">
                                Contact
                            </a>
                            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
                
                {/* Get Quote Button */}
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25">
                    Get Quote
                </button>
                
                {/* Menu Button for Mobile */}
                <button className="md:hidden p-2 rounded-full hover:bg-yellow-400/10 text-yellow-300 hover:text-yellow-400 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
}