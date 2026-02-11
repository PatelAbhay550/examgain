import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Questions", href: "/" },
        { label: "About", href: "/about" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "SSC Questions", href: "/category/ssc" },
        { label: "NEET Questions", href: "/category/neet" },
        { label: "JEE Questions", href: "/category/jee" },
        { label: "Class 10", href: "/category/class-10" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "SSC Guide", href: "/guides" },
        { label: "MCQs", href: "/mcq/the-penny-dropped-idiom" },
        { label: "Class 12 Notes", href: "/revision/class12" },
        { label: "SSC Revision", href: "/revision/ssc" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-3">Examgain</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your go-to platform for verified answers to all your exam questions. 
              Master any subject with our expert solutions.
            </p>
          </div>

          {/* Footer Link Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          {/* Copyright and Meta Info */}
          <div className="text-center text-gray-400 text-sm space-y-2">
            <p>
              &copy; {currentYear} Examgain. All rights reserved. | 
              <a href="/privacy" className="hover:text-blue-400 transition-colors ml-1">
                Privacy Policy
              </a>
            </p>
            <p className="text-xs">
              Examgain: Your trusted platform for SSC, NEET, JEE, and Class board exam solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
