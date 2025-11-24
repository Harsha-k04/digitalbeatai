import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'AI Video Creation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to send data to Firebase/API would go here
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Info Side */}
            <div className="bg-slate-900 p-10 md:w-1/3 text-white flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Let's Talk</h2>
                    <p className="text-slate-400 text-sm mb-8">Ready to transform your content strategy? Reach out today.</p>
                    
                    <div className="space-y-6">
                        <div>
                            <span className="text-xs uppercase text-slate-500 font-bold tracking-wider">Email</span>
                            <p className="text-purple-300">hello@digitalbeatai.com</p>
                        </div>
                        <div>
                            <span className="text-xs uppercase text-slate-500 font-bold tracking-wider">Follow Us</span>
                            <div className="flex gap-3 mt-2">
                                <span className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-xs">YT</span>
                                <span className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-xs">IG</span>
                                <span className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-xs">TW</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="p-10 md:w-2/3">
                {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">Message Sent!</h3>
                        <p className="text-slate-600 mt-2">We'll get back to you shortly.</p>
                        <button onClick={() => setSubmitted(false)} className="mt-6 text-purple-600 underline">Send another</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                            <input 
                                required
                                type="text" 
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <input 
                                required
                                type="email" 
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Service Required</label>
                            <select 
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-white"
                                value={formData.service}
                                onChange={(e) => setFormData({...formData, service: e.target.value})}
                            >
                                <option>AI Video Creation</option>
                                <option>AI Music & Audio Production</option>
                                <option>Podcast Editing</option>
                                <option>Social Media Management</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                            <textarea 
                                required
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-lg"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;