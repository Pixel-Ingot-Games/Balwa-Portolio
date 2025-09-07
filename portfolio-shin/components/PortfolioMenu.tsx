'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  { label: 'HOME', link: '/' },
  { label: 'ABOUT', link: '/about' },
  { label: 'PROJECTS', link: '/projects' },
  { label: 'CONTACT', link: '/contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com', icon: '⚡' },
  { label: 'Twitter', link: 'https://twitter.com', icon: '🐦' },
  { label: 'LinkedIn', link: 'https://linkedin.com', icon: '💼' }
];

export default function PortfolioMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed left-0 top-0 h-screen w-96 bg-gradient-to-br from-white via-gray-50 to-blue-50 shadow-2xl z-50 flex flex-col justify-between overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-indigo-400 rounded-full blur-xl"></div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute top-0 right-0 w-20 h-full opacity-10">
        <div className="w-full h-full bg-gradient-to-b from-blue-200 to-purple-200" 
             style={{
               backgroundImage: `
                 linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 50%, transparent 60%),
                 linear-gradient(-45deg, transparent 40%, rgba(147, 51, 234, 0.1) 50%, transparent 60%)
               `,
               backgroundSize: '20px 20px'
             }}>
        </div>
      </div>

      {/* Header Section */}
      <div className="relative p-8 pt-12">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <div className="ml-4">
            <h1 className="text-xl font-bold text-gray-800">BALWA</h1>
            <p className="text-sm text-gray-500 font-medium">Game Developer</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-8 -mt-4">
        <ul className="space-y-6">
          {menuItems.map((item, index) => (
            <li key={index} className="group relative">
              <Link
                href={item.link}
                className="block relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover Background */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl transform transition-all duration-300 ${
                  hoveredIndex === index ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}></div>
                
                {/* Content */}
                <div className="relative flex items-center p-4 transition-all duration-300">
                  {/* Number Badge */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    hoveredIndex === index 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Menu Item */}
                  <span className={`ml-6 text-4xl font-black tracking-tight transition-all duration-300 ${
                    hoveredIndex === index ? 'text-gray-800 transform translate-x-2' : 'text-gray-700'
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Arrow Indicator */}
                  <div className={`ml-auto transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-4'
                  }`}>
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="relative p-8">
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-blue-600 text-sm font-bold mb-4 tracking-wider uppercase">
            Connect
          </h3>
          <div className="flex space-x-4">
            {socialItems.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
    </div>
  );
}
