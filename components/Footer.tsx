import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
                 <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
                    <img src="/mnt/data/0505cd13-690d-4a10-981a-876f5e3df2c1.png" alt="Logo" className="w-full h-full object-cover"/>
                 </div>
                <span className="text-xl font-bold text-white">DigitalBeatAI</span>
             </div>
            <p className="text-sm text-slate-400">
              Empowering brands with next-gen AI content creation and expert human finishing.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-purple-400 transition-colors">AI Video Creation</Link></li>
              <li><Link to="/services" className="hover:text-purple-400 transition-colors">Music Production</Link></li>
              <li><Link to="/services" className="hover:text-purple-400 transition-colors">Podcast Editing</Link></li>
              <li><Link to="/services" className="hover:text-purple-400 transition-colors">Social Management</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
              <li><span className="text-slate-500 cursor-not-allowed">Privacy Policy</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Connect</h3>
            <p className="text-sm mb-4">hello@digitalbeatai.com</p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                YT
              </a>
              <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                TW
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} DigitalBeatAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;