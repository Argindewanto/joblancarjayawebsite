'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[90rem] mx-auto">
        <nav className="flex items-center h-20 px-4 sm:px-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="relative w-32 h-12 block">
              <Image
                src="/thewebsitelogo.png"
                alt="Job Lancar Jaya"
                fill
                className="object-contain object-left"
                priority
              />
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <ul className="hidden md:flex items-center gap-8 ml-auto">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-mono-600 hover:text-mono-900 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="ml-auto md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-mono-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
              <ul className="px-6 py-4">
                {menuItems.map((item) => (
                  <li key={item.label} className="mb-4 last:mb-0">
                    <a
                      href={item.href}
                      className="text-sm font-medium text-mono-600 hover:text-mono-900 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.querySelector(item.href);
                        if (target) {
                          target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          });
                        }
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
