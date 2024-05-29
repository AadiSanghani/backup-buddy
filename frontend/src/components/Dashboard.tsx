// Dashboard.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    if (token) {
      // Save token to localStorage or state
      localStorage.setItem('authToken', token);
    } else {
      console.error("Token not found in the URL.");
    }
  }, [location]);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Render your dashboard content here */}
    </div>
  );
}

export default Dashboard;
