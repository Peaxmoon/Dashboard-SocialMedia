import React from 'react';
import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="back-home">
        Back to Home
      </Link>
    </div>
  );
}
