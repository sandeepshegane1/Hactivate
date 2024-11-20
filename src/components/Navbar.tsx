import React from 'react';
import { Menu, X, LogIn, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-green-600">ZeroHunger</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/donate" 
              className={`${location.pathname === '/donate' ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}
            >
              Donate
            </Link>
            <Link 
              to="/request" 
              className={`${location.pathname === '/request' ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}
            >
              Request
            </Link>
            {isLoggedIn ? (
              <button 
                onClick={onLogout}
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            ) : (
              <Link 
                to="/login"
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </Link>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 ${location.pathname === '/' ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/donate"
              className={`block px-3 py-2 ${location.pathname === '/donate' ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
            <Link
              to="/request"
              className={`block px-3 py-2 ${location.pathname === '/request' ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Request
            </Link>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  onLogout();
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-red-600 hover:text-red-700 w-full text-left"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-gray-600 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;