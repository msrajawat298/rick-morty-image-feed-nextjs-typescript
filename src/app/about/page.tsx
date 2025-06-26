import Link from 'next/link';
import React from 'react';

const AboutPage = () => (
  <div style={{ maxWidth: 600, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
    <h1>About</h1>
    <p>This is a Rick and Morty image feed app built with Next.js 15 and TypeScript. Browse episodes and see your favorite characters!</p>
    <p>Created by <a href="https://github.com/msrajawat298" target="_blank" rel="noopener noreferrer">msrajawat298</a>.</p>
    <p><Link href="/">Back to Home Page</Link>.</p>
  </div>
);

export default AboutPage;