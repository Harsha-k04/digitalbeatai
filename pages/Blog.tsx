// Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const dummyPosts = [
  { id: 1, title: 'Launching with AI-first workflows', excerpt: 'How we use AI to speed production...' },
  { id: 2, title: 'Creating podcast audio that converts', excerpt: 'Best practices for podcasts and distribution...' },
];

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-slate-600 mt-2">Insights, case studies and product updates from DigitalBeatAI.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {dummyPosts.map(post => (
          <article key={post.id} className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-slate-600 mb-4">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="text-purple-600 hover:underline">Read more →</Link>
          </article>
        ))}
      </div>

      {/* CTA to create a post (admin only could be linked to /admin/new) */}
      <div className="mt-12 text-center">
        <p className="text-slate-600">Want to publish an update? Contact the team.</p>
      </div>
    </div>
  );
}
