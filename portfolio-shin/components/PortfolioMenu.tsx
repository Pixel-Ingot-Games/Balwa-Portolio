'use client';
import React from 'react';
import Link from 'next/link';

const menuItems = [
  { label: 'HOME', link: '/' },
  { label: 'ABOUT', link: '/about' },
  { label: 'PROJECTS', link: '/projects' },
  { label: 'CONTACT', link: '/contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

export default function PortfolioMenu() {
  return (
    <div className="fixed left-0 top-0 h-screen w-[420px] bg-white shadow-lg z-50 flex flex-col justify-between p-8">
      {/* Main Navigation */}
      <nav className="flex-1 pt-16">
        <ul className="space-y-8">
          {menuItems.map((item, index) => (
            <li key={index} className="group">
              <Link
                href={item.link}
                className="flex items-center text-black hover:text-blue-600 transition-colors duration-300"
              >
                <span className="text-blue-500 text-lg font-bold mr-6 opacity-70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-5xl font-black tracking-tight leading-none">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="mt-auto">
        <h3 className="text-blue-500 text-sm font-semibold mb-4 tracking-wider">
          Socials
        </h3>
        <div className="flex space-x-6">
          {socialItems.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
