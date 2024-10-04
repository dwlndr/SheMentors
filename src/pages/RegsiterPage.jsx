import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    
    // Save user data to local storage
    localStorage.setItem('user', JSON.stringify(userData));
    
    alert('Registration successful!');
    navigate('/login'); // Redirect to login after successful registration
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-main-700">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-main-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-main-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-main-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-main-700 hover:bg-main-600 text-white py-3 rounded-md font-semibold transition duration-300 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
