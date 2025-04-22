'use client';
import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Username and password are required!');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('https://accounts-management.onrender.com/common/user/login', {
        username: email,
        password: password
      });

      if (response.data) {
        toast.success('Login successful!');
        console.log('Logged in:', response.data);
        // Save token or redirect as needed here
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Invalid credentials or server error!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-200 min-h-screen flex items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl w-full">
        <div className="md:w-1/2 px-5">
          <h2 className="text-3xl font-bold text-[#002D74] mt-8">Account Management System</h2>
          <h2 className="text-2xl font-bold text-[#002D74] mt-8">Login</h2>
          <p className="text-sm mt-4 text-[#002D74]">Sign in to start your session</p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-700">Username</label>
              <input
                type="email"
                placeholder="Enter Username"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full block ${
                loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-400'
              } text-white font-semibold rounded-lg px-4 py-3 mt-12 transition duration-300`}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        </div>

        <div className="w-1/2 md:block hidden">
          <img
            src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            className="rounded-2xl"
            alt="page img"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
