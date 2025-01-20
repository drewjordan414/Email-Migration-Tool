import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Add the handleLogin function here
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
        <h1 className="text-xl font-semibold text-gray-800 text-center">Login</h1>
        <form className="mt-4" onSubmit={handleLogin}> {/* Attach handleLogin to the form */}
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <Button variant="primary" type="submit"> {/* Keep type="submit" for accessibility */}
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
