// ProtectedUpload.jsx
'use client';
import React from 'react';
import UploadForm from './UploadForm'; // your existing upload component

export default function ProtectedUpload() {
  // run only in browser
  if (typeof window === 'undefined') return null;

  const params = new URLSearchParams(window.location.search);
  const key = params.get('key') || '';
  const SECRET = import.meta.env.VITE_UPLOAD_KEY || '';

  // If no match, show 404-like UI (so it's not discoverable)
  if (!SECRET || key !== SECRET) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-semibold mb-2">404 — Not Found</h2>
          <p className="text-slate-600">The page you are looking for cannot be found.</p>
        </div>
      </div>
    );
  }

  // If secret matches, show the upload form
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Upload</h1>
      <UploadForm />
    </div>
  );
}
