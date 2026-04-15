import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = {
    Products: ['OyeSell (AI SDR)', 'Oye Career Platform', 'Hospyra', 'Lexsyra AI Tutor', 'Digital Twin'],
    Solutions: ['AI Agents', 'AI Automation', 'AI Concierge', 'Data Intelligence', 'Custom AI'],
    Company: ['About Us', 'Our Vision', 'Careers', 'Blog / Insights'],
    Contact: ['Get in Touch', 'Book a Demo', 'Contact@intelliod.com', '91-9515862775', 'www.intelliod.com'],
  };

  const socials = [
    {
      label: 'LinkedIn',
      href: '#',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:Contact@intelliod.com',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      ),
    },
    {
      label: 'X (Twitter)',
      href: '#',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: '#',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
        </svg>
      ),
    },
  ];

  return (
    <footer id="contact" className="bg-[#FCFCFE] border-t border-gray-200" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-12 lg:gap-16 mb-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="inline-block">
              <img src="/images/Logo.svg" alt="Intelliod Logo" className="h-16 w-auto" />
            </a>
          </div>

          {/* Link columns */}
          <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-4">
            {Object.entries(links).map(([col, items]) => (
              <div key={col}>
                <h4 className="text-[17px] font-semibold text-[#111827] mb-5">{col}</h4>
                <ul className="space-y-4">
                  {items.map(item => (
                    <li key={item}>
                      <a href="#" className="text-[15px] font-medium text-[#4B5563] hover:text-[#008DFF] transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social icons row */}
          <div className="flex-shrink-0 flex items-center gap-3">
            {socials.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-[10px] border border-[#E5E7EB] hover:border-[#D1D5DB] flex items-center justify-center text-[#111827] hover:bg-gray-50 transition-all shadow-sm bg-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center">
          <p className="text-[15px] font-medium text-[#6B7280]">
            © {year} Intelliod Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
