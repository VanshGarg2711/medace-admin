
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import QuestionBank from './pages/QuestionBank';
import QuizManagement from './pages/QuizManagement';
import StudentManagement from './pages/StudentManagement';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <HashRouter>
        <div className="flex h-screen bg-gray-100 dark:bg-muted">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header setSidebarOpen={setSidebarOpen} />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-muted p-4 sm:p-6 lg:p-8">
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
