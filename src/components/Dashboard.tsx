import React from 'react';
import { Users, CreditCard, Database, Activity, TrendingUp, DollarSign, BarChart3 } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Users', value: '2,547', change: '+12.3%', icon: Users, color: 'bg-blue-500' },
    { title: 'Active Sessions', value: '342', change: '+5.2%', icon: Activity, color: 'bg-green-500' },
    { title: 'Token Usage', value: '124.5K', change: '+18.7%', icon: Database, color: 'bg-purple-500' },
    { title: 'Credits Remaining', value: '89.2K', change: '-3.4%', icon: CreditCard, color: 'bg-orange-500' },
    { title: 'Revenue', value: '$12,450', change: '+8.9%', icon: DollarSign, color: 'bg-indigo-500' },
    { title: 'Growth Rate', value: '24.5%', change: '+2.1%', icon: TrendingUp, color: 'bg-red-500' },
  ];

  const recentActivity = [
    { user: 'John Doe', action: 'Used 150 tokens', time: '2 minutes ago', status: 'success' },
    { user: 'Sarah Wilson', action: 'Purchased credits', time: '5 minutes ago', status: 'success' },
    { user: 'Mike Johnson', action: 'Session expired', time: '10 minutes ago', status: 'warning' },
    { user: 'Emma Brown', action: 'Low credit balance', time: '15 minutes ago', status: 'error' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Token Usage Trend</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Activity</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Activity className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Activity chart would go here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className={`w-3 h-3 rounded-full ${
                activity.status === 'success' ? 'bg-green-500' :
                activity.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
              }`}></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                <p className="text-sm text-gray-600">{activity.action}</p>
              </div>
              <div className="text-xs text-gray-500">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;