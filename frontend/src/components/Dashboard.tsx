import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

// Define the User type
interface User {
  googleId: string;
  name: string;
  email: string;
  profilePicture: string;
  contacts: any; // Adjust the type as needed based on the actual structure of contacts
}

interface DecodedToken extends User {}

function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    if (token) {
      // Decode the token and extract user information
      const decodedToken: DecodedToken = jwtDecode<DecodedToken>(token);

      setUser({
        googleId: decodedToken.googleId,
        name: decodedToken.name,
        email: decodedToken.email,
        profilePicture: decodedToken.profilePicture,
        contacts: decodedToken.contacts,
      });

      // Optionally, save the token to localStorage
      localStorage.setItem('authToken', token);
    } else {
      console.error("Token not found in the URL.");
    }
  }, [location]);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Dashboard;
