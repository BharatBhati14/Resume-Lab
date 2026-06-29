import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isPreviewPage = location.pathname === "/preview";

  if (isPreviewPage) return null;
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-10 sm:pt-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="pr-6">
            <h3 className="font-bold text-xl">ResumeLab</h3>

            <p className="mt-4 text-slate-400">
              AI-powered resumes for modern careers. 
              {/* Create ATS-friendly
              resumes, optimize keywords, and generate cover letters with AI in
              minutes. */}
            </p>

            <div className="mt-6 flex gap-4 text-slate-400">
              {/* GitHub */}
              <Link to="#" target="_blank" rel="noreferrer" className="flex items-center hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.7.5.5 5.8.5 12.2c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.2 0 0 1.1-.4 3.4 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.7 3.4-1.3 3.4-1.3.7 1.7.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6 8.2-11.2C23.5 5.8 18.3.5 12 .5z" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link to="#" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-1 1.7-2 3.4-2 3.6 0 4.3 2.4 4.3 5.5v6.3zM5.3 7.4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.1 20.4H3.5V9h3.6v11.4z" />
                </svg>
              </Link>

              {/* Twitter / X */}
              <Link to="#" target="_blank" rel="noreferrer" className="flex items-center hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.4 22H3l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-white transition-colors duration-200">
                <Link to="/resume">Resume Builder</Link>
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Templates
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Cover Letters
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-white transition-colors duration-200">
                Blog
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Career Advice
              </li>
              <li className="hover:text-white transition-colors duration-200">
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-white transition-colors duration-200">
                About
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Privacy
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 text-center text-slate-500 text-sm">
        © 2026 ResumeLab. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
