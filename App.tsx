import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Dummy Sidebar
const Sidebar = ({ sidebarOpen, setSidebarOpen }: any) => (
  <div className={`w-64 bg-white dark:bg-gray-800 p-4 ${sidebarOpen ? 'block' : 'hidden'} sm:block`}>
    <h2 className="text-xl font-bold mb-4 text-blue-600">Sidebar</h2>
    <ul className="space-y-2">
      <li>Dashboard</li>
      <li>Question Bank</li>
      <li>Quiz Management</li>
      <li>Student Management</li>
      <li>Reports</li>
      <li>Notifications</li>
      <li>Settings</li>
    </ul>
  </div>
);

// Dummy Header
const Header = ({ setSidebarOpen }: any) => (
  <header className="bg-white dark:bg-gray-900 p-4 shadow flex justify-between items-center">
    <button
      onClick={() => setSidebarOpen((prev: boolean) => !prev)}
      className="text-blue-600 font-bold"
    >
      Toggle Sidebar
    </button>
    <h1 className="text-lg font-bold text-blue-600">medACE Admin Panel</h1>
  </header>
);

// Dummy Pages
const Dashboard = () => <div className="text-lg font-medium">Dashboard Page</div>;
const QuestionBank = () => <div className="text-lg font-medium">Question Bank Page</div>;
const QuizManagement = () => <div className="text-lg font-medium">Quiz Management Page</div>;
const StudentManagement = () => <div className="text-lg font-medium">Student Management Page</div>;
const Reports = () => <div className="text-lg font-medium">Reports Page</div>;
const Notifications = () => <div className="text-lg font-medium">Notifications Page</div>;
const Settings = () => <div className="text-lg font-medium">Settings Page</div>;

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <HashRouter>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-700">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header setSidebarOpen={setSidebarOpen} />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-700 p-4 sm:p-6 lg:p-8">
              <Routes>
                <Route path="/" element={<Navigate replace to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/question-bank" element={<QuestionBank />} />
                <Route path="/quiz-management" element={<QuizManagement />} />
                <Route path="/student-management" element={<StudentManagement />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
