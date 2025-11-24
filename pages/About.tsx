import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       {/* Header */}
       <div className="relative py-24 bg-slate-50 overflow-hidden">
           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl"></div>
           <div className="max-w-7xl mx-auto px-4 relative">
               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Who We Are</h1>
               <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                   DigitalBeatAI is a creative studio merging artificial intelligence with human editorial expertise to deliver premium content at unprecedented speeds.
               </p>
           </div>
       </div>

       {/* Mission */}
       <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16 items-center">
               <div>
                   <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold tracking-wide uppercase mb-4">
                       Our Mission
                   </div>
                   <h2 className="text-3xl font-bold text-slate-900 mb-6">Empowering creators with intelligent content creation.</h2>
                   <p className="text-slate-600 mb-4">
                       We believe that AI shouldn't replace creativity—it should amplify it. Our workflow uses large language models and generative audio tools to handle the heavy lifting, allowing our human editors to add the soul, nuance, and polish that machines can't replicate.
                   </p>
               </div>
               <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-4">
                       <img src="https://picsum.photos/300/400?random=10" className="rounded-2xl shadow-lg w-full h-full object-cover" alt="Team working" />
                   </div>
                   <div className="space-y-4 pt-8">
                        <img src="https://picsum.photos/300/400?random=11" className="rounded-2xl shadow-lg w-full h-full object-cover" alt="AI Interface" />
                   </div>
               </div>
           </div>
       </div>

       {/* Why Choose Us */}
       <div className="bg-slate-900 text-white py-20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                   <h2 className="text-3xl font-bold">Why Choose DigitalBeatAI</h2>
               </div>
               <div className="grid md:grid-cols-4 gap-8">
                   {[
                       { title: "Fast Delivery", desc: "AI accelerates our drafting process by 400%." },
                       { title: "Pro Quality", desc: "Expert human review ensures broadcast standards." },
                       { title: "Hybrid Workflow", desc: "The best of tech and talent combined." },
                       { title: "Custom Solutions", desc: "Tailored to your specific brand voice." }
                   ].map((item, i) => (
                       <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                           <h3 className="text-lg font-bold text-purple-400 mb-2">{item.title}</h3>
                           <p className="text-slate-300 text-sm">{item.desc}</p>
                       </div>
                   ))}
               </div>
           </div>
       </div>
    </div>
  );
};

export default About;