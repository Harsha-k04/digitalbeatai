import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Determine IDs from environment or fallbacks
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

    // Log for demonstration since we can't inject actual scripts in all restricted environments
    // In a real Next.js app, we would use next/script here.
    console.log(`[Analytics] Page View: ${location.pathname} | GA_ID: ${GA_ID} | GTM_ID: ${GTM_ID}`);

    // Mocking a pageview event
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', GA_ID, {
            page_path: location.pathname,
        });
    }
  }, [location]);

  return null; // Logic only component
};

export default Analytics;