import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const Services: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [idea, setIdea] = useState('');
    const [loading, setLoading] = useState(false);

    const handleBrainstorm = async () => {
        if (!prompt) return;
        setLoading(true);
        try {
            // Using system instruction if possible, or direct prompt
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
            if (!process.env.API_KEY) {
                setIdea("API Key missing. Please configure environment to use AI features.");
                setLoading(false);
                return;
            }

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `You are a creative director at DigitalBeatAI. Give me 3 creative content ideas for a client who does: ${prompt}. Keep it short and punchy.`
            });
            setIdea(response.text);
        } catch (e) {
            console.error(e);
            setIdea("Could not generate ideas right now.");
        } finally {
            setLoading(false);
        }
    };

  const services = [
    {
      title: "AI Video Creation",
      desc: "From script to screen, we create engaging short-form videos, ads, and explainers.",
      features: ["AI Scene Generation", "Scriptwriting Assistance", "Automated Captions", "Motion Graphics"],
      icon: "🎥"
    },
    {
      title: "AI Music & Audio",
      desc: "Royalty-free, custom-composed music that fits your brand's mood perfectly.",
      features: ["AI Composition", "Sound Effects (SFX)", "Sonic Branding", "Audio Mixing"],
      icon: "🎧"
    },
    {
      title: "Podcast Editing",
      desc: "Focus on recording, let us handle the noise reduction and post-production.",
      features: ["Noise Reduction", "Volume Leveling", "Clip Extraction", "Show Notes"],
      icon: "🎙️"
    },
    {
      title: "Social Media Management",
      desc: "Data-driven content planning and automated scheduling for growth.",
      features: ["Content Calendar", "Post Design", "Caption Writing", "Analytics Reporting"],
      icon: "📱"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Leveraging the speed of AI with the polish of professional human editors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
              </div>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <ul className="grid grid-cols-2 gap-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm text-slate-500 font-medium">
                    <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AI Demo Section */}
        <div className="mt-20 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-purple-100">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Inspiration?</h2>
                <p className="text-slate-600 mb-6">Test our creative direction engine. Describe your business, and we'll suggest content ideas.</p>
                
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <input 
                        type="text" 
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., 'Eco-friendly coffee shop based in Seattle'"
                        className="flex-grow px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                    />
                    <button 
                        onClick={handleBrainstorm}
                        disabled={loading}
                        className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Thinking...' : 'Brainstorm'}
                    </button>
                </div>

                {idea && (
                    <div className="bg-white p-6 rounded-xl text-left border border-gray-200 shadow-sm animate-fade-in">
                        <h4 className="font-bold text-purple-600 mb-2">AI Suggestions:</h4>
                        <div className="text-slate-700 whitespace-pre-wrap">{idea}</div>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;