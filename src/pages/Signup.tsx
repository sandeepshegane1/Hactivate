import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import axios from 'axios';

interface LoginProps {
  onLogin: () => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = async (formData: LoginFormData): Promise<void> => {
    try {
      const response = await axios.post<{ token: string }>('http://localhost:3000/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      const token = response.data.token; // Adjust 'token' based on your API response structure
      if (token) {
        localStorage.setItem('jwtToken', token); // Save the token
        console.log('Token stored in localStorage:', token);
      }

      console.log('Login successful:', formData);
      onLogin(); // Notify parent about login success
      navigate('/'); // Redirect to home page
    } catch (error: any) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white pt-20 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome Back</h1>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/login?type=donor"
                className="text-center py-2 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-50 transition-colors"
              >
                Donor
              </Link>
              <Link
                to="/login?type=recipient"
                className="text-center py-2 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-50 transition-colors"
              >
                Recipient
              </Link>
            </div>
            <AuthForm 
              type="login"
              userType="donor"
              onSubmit={handleSubmit}
            />
            <div className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-green-600 hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
