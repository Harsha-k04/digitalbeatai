import React from 'react';
import { Link } from 'react-router-dom';
import UploadForm from '../components/UploadForm';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-20 pb-32 lg:pt-32">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-200/50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute left-0 bottom-0 h-[500px] w-[500px] bg-blue-200/50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
              Create Stunning <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                AI-Powered Content
              </span>
            </h1>
            <p className="mt-4 text-xl text-slate-600">
              DigitalBeatAI helps brands and creators produce high-quality videos, music, and podcasts using next-gen artificial intelligence and expert human editing.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link to="/contact" className="rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all">
                Get Started
              </Link>
              <Link to="/portfolio" className="rounded-full bg-white px-8 py-3 text-base font-semibold text-purple-600 shadow-sm ring-1 ring-inset ring-purple-100 hover:bg-purple-50 hover:ring-purple-200 transition-all">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Start Your Project Now</h2>
                    <p className="text-slate-600 mb-8">
                        Upload your raw footage, audio, or scripts directly. Our secure pipeline sends your assets to our hybrid AI-Human workflow.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {['Fast Turnaround (24-48hrs)', 'Encrypted Transfer', 'Auto-generated Metadata'].map((item, i) => (
                            <li key={i} className="flex items-center text-slate-700">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="order-1 md:order-2">
                    <UploadForm />
                </div>
            </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">Our Expertise</h2>
                <p className="text-slate-600 mt-2">Merging creative direction with algorithmic power.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "AI Video Creation", icon: "🎬", desc: "Short-form reels, ads, and explainers generated from script to screen." },
                    { title: "Music & Audio", icon: "🎵", desc: "Custom AI-composed tracks and SFX for your brand identity." },
                    { title: "Podcast Production", icon: "🎙️", desc: "Professional cleanup, leveling, and show notes generation." }
                ].map((s, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-4xl mb-4">{s.icon}</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                        <p className="text-slate-600">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;