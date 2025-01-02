'use client';

import Image from 'next/image';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' }
];

export default function Footer() {
  return (
    <footer className="bg-mono-950 text-mono-200">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo and Company Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                {/* Logo */}
                <div className="relative w-32 h-12">
                  <Image
                    src="/thewebsitelogo.png"
                    alt="Job Lancar Jaya"
                    fill
                    className="object-contain object-left brightness-0 invert"
                  />
                </div>
                <p className="text-lg font-medium">Job Lancar Jaya App</p>
              </div>

              {/* Company Address */}
              <div className="space-y-2">
                <p className="font-medium">CV. Argatama Indonesia</p>
                <p className="text-sm text-mono-400">
                  Perumahan Griya Yasa blok F62 Gentan, Baki, Sukoharjo, Jawa Tengah 57556
                </p>
              </div>
            </div>

            {/* Main Menu */}
            <div>
              <h3 className="text-lg font-medium mb-6">Main Menu</h3>
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-mono-400 hover:text-mono-200 transition-colors"
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
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-mono-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-mono-400 text-center md:text-left">
              All rights reserved. Various trademarks held by their respective owners.
            </p>
            <p className="text-sm text-mono-400">
              2025 CV. ARGATAMA INDONESIA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
