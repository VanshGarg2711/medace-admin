
import React from 'react';
import Card from '../components/ui/Card';
import PerformanceChart from '../components/charts/PerformanceChart';
import ActivityChart from '../components/charts/ActivityChart';
import { performanceData, activityData } from '../data/mockData';

const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Reports & Analytics</h1>
      
      <div className="grid gap-6 lg:grid-cols-1">
        <Card title="Overall Student Performance Trend">
          <PerformanceChart data={performanceData} />
        </Card>
        <Card title="Platform Engagement - Daily Logins">
          <ActivityChart data={activityData} />
        </Card>
        <Card title="Quiz Success Rate by Subject">
            <p className="text-muted-foreground">Chart component for quiz success rates would be displayed here.</p>
        </Card>
        <Card title="Most Difficult Topics">
            <p className="text-muted-foreground">Data visualization for difficult topics would be displayed here.</p>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
