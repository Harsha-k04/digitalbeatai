// SpotifySection.jsx
import React from 'react';

export default function SpotifySection({ spotifyEmbedUrl }) {
  // Example spotifyEmbedUrl: "https://open.spotify.com/embed/episode/EPISODE_ID"
  return (
    <section className="max-w-5xl mx-auto p-8 mt-12">
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Listen on Spotify</h3>
      <div className="bg-white rounded-xl p-4 border shadow-sm">
        {spotifyEmbedUrl ? (
          <iframe
            src={spotifyEmbedUrl}
            width="100%"
            height="232"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify player"
            className="rounded-md"
          ></iframe>
        ) : (
          <div className="text-slate-600">Add your Spotify embed link to show the player here.</div>
        )}
      </div>
    </section>
  );
}
