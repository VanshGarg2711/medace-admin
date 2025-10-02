
import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardIcon, QuestionBankIcon, QuizIcon, StudentsIcon, ReportsIcon, NotificationsIcon, SettingsIcon, XIcon } from '../Icons';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const navLinks = [
  { to: "/dashboard", icon: <DashboardIcon />, label: "Dashboard" },
  { to: "/question-bank", icon: <QuestionBankIcon />, label: "Question Bank" },
  { to: "/quiz-management", icon: <QuizIcon />, label: "Quiz Management" },
  { to: "/student-management", icon: <StudentsIcon />, label: "Students" },
  { to: "/reports", icon: <ReportsIcon />, label: "Reports" },
  { to: "/notifications", icon: <NotificationsIcon />, label: "Notifications" },
  { to: "/settings", icon: <SettingsIcon />, label: "Settings" },
];

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const NavItem: React.FC<{ to: string, icon: React.ReactNode, label: string }> = ({ to, icon, label }) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center p-2 text-base font-normal rounded-lg transition-colors duration-150 group ${
            isActive
              ? 'bg-blue-600 text-white'
              : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`
        }
        onClick={() => setSidebarOpen(false)}
      >
        {icon}
        <span className="ml-3">{label}</span>
      </NavLink>
    </li>
  );

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      <aside
        className={`fixed lg:relative inset-y-0 left-0 z-30 w-64 bg-white dark:bg-card border-r dark:border-border flex-shrink-0 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b dark:border-border">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            <span className="text-blue-600">med</span>
            <span className="text-gray-800 dark:text-gray-200">ACE</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
            <XIcon />
          </button>
        </div>
        <div className="py-4 px-2">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <NavItem key={link.to} {...link} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
