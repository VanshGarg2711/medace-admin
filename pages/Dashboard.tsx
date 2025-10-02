
import React from 'react';
import Card from '../components/ui/Card';
import PerformanceChart from '../components/charts/PerformanceChart';
import ActivityChart from '../components/charts/ActivityChart';
import { mockActivity, performanceData, activityData, mockStudents, mockQuizzes } from '../data/mockData';
import type { Activity } from '../types';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Students', value: mockStudents.length, change: '+5%' },
    { title: 'Active Quizzes', value: mockQuizzes.length, change: '+2' },
    { title: 'Daily Logins', value: '180', change: '+12%' },
    { title: 'Questions Added', value: '250', change: '+15' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Stat Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <h4 className="text-sm font-medium text-muted-foreground">{stat.title}</h4>
            <div className="flex items-baseline justify-between">
                <p className="text-3xl font-bold">{stat.value}</p>
                <span className="text-sm text-green-500">{stat.change}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Average Performance">
          <PerformanceChart data={performanceData} />
        </Card>
        <Card title="Daily Login Activity">
          <ActivityChart data={activityData} />
        </Card>
      </div>

      {/* Recent Activity */}
      <Card title="Recent Activity">
        <ul className="divide-y dark:divide-border">
          {mockActivity.map((activity: Activity) => (
            <li key={activity.id} className="py-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">by {activity.user}</p>
                </div>
                <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Dashboard;
