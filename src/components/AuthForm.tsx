import React from 'react';
import { Mail, Lock, User } from 'lucide-react';

interface AuthFormProps {
  type: 'login' | 'signup';
  userType: 'donor' | 'recipient';
  onSubmit: (data: any) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, userType, onSubmit }) => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    name: '',
    organization: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === 'signup' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {userType === 'donor' ? 'Full Name' : 'Organization Name'}
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name={userType === 'donor' ? 'name' : 'organization'}
              value={userType === 'donor' ? formData.name : formData.organization}
              onChange={handleChange}
              className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        {type === 'login' ? 'Sign In' : 'Create Account'}
      </button>
    </form>
  );
};

export default AuthForm;