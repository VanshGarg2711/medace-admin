
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Settings</h1>
      
      {/* Admin Profile Settings */}
      <Card title="Admin Profile">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <Input defaultValue="Admin User" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input type="email" defaultValue="admin@medace.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Change Password</label>
            <Input type="password" placeholder="Enter new password" />
          </div>
           <div>
            <label className="block text-sm font-medium mb-1">Confirm New Password</label>
            <Input type="password" placeholder="Confirm new password" />
          </div>
          <div className="flex justify-end pt-2">
            <Button>Save Profile</Button>
          </div>
        </form>
      </Card>

      {/* Theme Settings */}
      <Card title="Appearance">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Theme</h4>
            <p className="text-sm text-muted-foreground">
              Select the interface theme.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span>Light</span>
             <div 
                onClick={toggleTheme} 
                className={`relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer transition-colors ${theme === 'dark' ? 'bg-blue-600' : 'bg-gray-200'}`}>
                <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}`} />
            </div>
            <span>Dark</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
