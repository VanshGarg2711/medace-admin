
import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { BellIcon, MenuIcon, SunIcon, MoonIcon, LogOutIcon, ChevronDownIcon } from '../Icons';

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="relative z-10 bg-white dark:bg-card shadow-sm border-b dark:border-border">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-500 focus:outline-none lg:hidden"
        >
          <MenuIcon />
        </button>

        {/* Search bar (placeholder) */}
        <div className="hidden md:block">
            {/* Can add search input here if needed */}
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none">
            <BellIcon />
          </button>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2"
            >
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://picsum.photos/100"
                alt="Admin"
              />
              <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-300">Admin User</span>
              <ChevronDownIcon />
            </button>
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5"
              >
                <a href="#/settings" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <LogOutIcon />
                  <span className="ml-2">Logout</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
