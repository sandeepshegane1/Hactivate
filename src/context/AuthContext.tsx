import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  token: string | null;
  userType: string | null;
  name: string | null;
  login: (token: string, userType: string, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [userType, setUserType] = useState<string | null>(localStorage.getItem('userType'));
  const [name, setName] = useState<string | null>(localStorage.getItem('name'));

  const login = (token: string, userType: string, name: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userType', userType);
    localStorage.setItem('name', name);
    setToken(token);
    setUserType(userType);
    setName(name);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    localStorage.removeItem('name');
    setToken(null);
    setUserType(null);
    setName(null);
  };

  return (
    <AuthContext.Provider value={{ token, userType, name, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};