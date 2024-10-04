import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      navigate('/'); // Redirect to home or dashboard after successful login
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-main-700">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
          <p className="mt-4 text-center">
            Belum punya akun? <a href="/register" className="underline">Daftar sekarang</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
