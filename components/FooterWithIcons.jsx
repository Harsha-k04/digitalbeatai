// FooterWithIcons.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterWithIcons() {
  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="logo" className="w-10 h-10 object-cover rounded-md" /> {/* local file or /mnt/data/LOGO.jpg for testing */}
          <div>
            <div className="font-semibold">DigitalBeatAI</div>
            <div className="text-sm text-slate-300">AI-powered videos, music & podcasts</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Icons (SVGs) - links left as '#' for you to fill later */}
          <a href="#" aria-label="YouTube" className="hover:opacity-80">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.2C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.5A3 3 0 00.5 6.2 31.9 31.9 0 000 12a31.9 31.9 0 00.5 5.8 3 3 0 002.1 2.2c1.7.5 9.4.5 9.4.5s7.7 0 9.4-.5a3 3 0 002.1-2.2A31.9 31.9 0 0024 12a31.9 31.9 0 00-.5-5.8zM9.8 15.5V8.5l6 3.5-6 3.5z"/></svg>
          </a>
          <a href="#" aria-label="Spotify" className="hover:opacity-80">
            <svg className="w-6 h-6" viewBox="0 0 168 168" fill="currentColor"><path d="M84 0a84 84 0 1084 84 84 84 0 00-84-84zm38.9 121.2a4.4 4.4 0 01-6 1.5c-16.5-10.1-37.4-12.4-62-6.8a4.4 4.4 0 11-2.2-8.5c26.9-6.8 50.3-4.1 69.7 7.6a4.4 4.4 0 01.5 6.2zM125 95a5 5 0 11-6.3 7.9c-19-15.3-56.9-19.8-82.7-10.8a5 5 0 11-3-9.5c29.3-9.3 71.6-4.2 92 12.4zM130 72.8a5.7 5.7 0 01-8.1 1.9c-22.2-13.9-63.4-15.7-86.8-8.6a5.7 5.7 0 01-4.1-10.5c27.8-11 73.2-9 100.4 9.2.3.2.5.4.6.5z"/></svg>
          </a>
          <a href="https://www.instagram.com/digitalbeatai?igsh=czl3cG84bzBlZjBr" aria-label="Instagram" className="hover:opacity-80">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 7.5A4.5 4.5 0 1016.5 14 4.5 4.5 0 0012 9.5zm6.8-3.6a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z"/></svg>
          </a>
          <a href="#" aria-label="Facebook" className="hover:opacity-80">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.4-3.6 3.4-3.6.98 0 2 .18 2 .18v2.2h-1.12c-1.1 0-1.44.68-1.44 1.37V12h2.47l-.4 2.9h-2.07v7A10 10 0 0022 12z"/></svg>
          </a>
        </div>
      </div>

      <div className="text-center text-slate-400 text-sm py-4 border-t border-slate-800">
        &copy; {new Date().getFullYear()} DigitalBeatAI — All rights reserved.
      </div>
    </footer>
  );
}
