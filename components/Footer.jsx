import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f2e] text-gray-300 pt-12 pb-6 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-2xl font-semibold mb-3">Web Kutumb</h2>
          <p className="text-gray-400 text-sm">
            Building powerful digital experiences through web, design, video,
            and strategy. Let's grow your business together.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <h3 className="text-white text-xl font-medium">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Web Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Graphic Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Video Editing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Google Ads
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="text-white text-xl font-medium">Contact</h3>
          <p className="text-gray-400 text-sm">Email: shivanshvats16@gmail.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 79881 80681</p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Web Kutumb. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
