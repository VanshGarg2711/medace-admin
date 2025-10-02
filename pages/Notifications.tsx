
import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Select from '../components/ui/Select';

const Notifications: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Notification sent!');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Send Notification</h1>
      
      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="target" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Target Audience
            </label>
            <Select id="target">
              <option>All Students</option>
              <option>First Year Students</option>
              <option>Final Year Students</option>
              <option>PG Aspirants</option>
            </Select>
          </div>
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Notification Title
            </label>
            <Input id="title" placeholder="e.g., New Quiz Available!" required />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <Textarea id="message" rows={5} placeholder="Enter your announcement here..." required />
          </div>

          <div className="flex justify-end">
            <Button type="submit">Send Notification</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Notifications;
