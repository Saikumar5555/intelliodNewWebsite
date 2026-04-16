import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ['Home', 'About', 'Solutions', 'Products', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100" id="navbar">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center flex-shrink-0">
            <img src="/images/Logo.svg" alt="Intelliod Logo" className="h-10 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA Btn */}
          <div className="hidden md:block">
            <a
              href="#contact"
              id="navbar-book-demo"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-gray-900 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Book a demo <span>→</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/>
                : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a href="#contact" className="btn-outline w-full justify-center">
                Book a demo →
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
