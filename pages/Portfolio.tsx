import React from 'react';

const Portfolio: React.FC = () => {
  const items = [
    { title: "AI Promo Video", category: "Video Production", img: "https://picsum.photos/600/400?random=1" },
    { title: "TechTalk Daily", category: "Podcast Editing", img: "https://picsum.photos/600/400?random=2" },
    { title: "Lo-Fi Brand Beats", category: "AI Music", img: "https://picsum.photos/600/400?random=3" },
    { title: "Fashion Reels", category: "Social Media", img: "https://picsum.photos/600/400?random=4" },
    { title: "Corporate Explainer", category: "Video Production", img: "https://picsum.photos/600/400?random=5" },
    { title: "Audiobook Cleanup", category: "Audio Engineering", img: "https://picsum.photos/600/400?random=6" },
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900">Featured Projects</h1>
          <p className="mt-4 text-xl text-slate-500">A collection of our best AI-enhanced work.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-purple-300 text-sm font-medium mb-1">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
              
              {/* Fallback Label for mobile/no-hover */}
              <div className="p-4 bg-white md:hidden">
                 <h3 className="font-bold text-slate-800">{item.title}</h3>
                 <p className="text-sm text-slate-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="#/contact" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Start your own project
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;