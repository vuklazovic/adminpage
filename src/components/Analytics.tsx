import React from 'react';
import { BarChart3, PieChart, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const Analytics: React.FC = () => {
  const monthlyData = [
    { month: 'Jan', users: 120, tokens: 15000, revenue: 2400 },
    { month: 'Feb', users: 180, tokens: 22000, revenue: 3200 },
    { month: 'Mar', users: 250, tokens: 28000, revenue: 4100 },
    { month: 'Apr', users: 320, tokens: 35000, revenue: 5200 },
    { month: 'May', users: 280, tokens: 31000, revenue: 4800 },
    { month: 'Jun', users: 340, tokens: 42000, revenue: 6100 },
  ];

  const topUsers = [
    { name: 'David Taylor', tokens: 2100, percentage: 15.2 },
    { name: 'John Doe', tokens: 1250, percentage: 9.1 },
    { name: 'Sarah Wilson', tokens: 890, percentage: 6.4 },
    { name: 'Emma Brown', tokens: 450, percentage: 3.3 },
    { name: 'Mike Johnson', tokens: 320, percentage: 2.3 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h2>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Daily Users</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
              <p className="text-sm text-green-600">+12.5% from last month</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Session Time</p>
              <p className="text-2xl font-bold text-gray-900">24.5m</p>
              <p className="text-sm text-green-600">+8.2% from last month</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Token Usage Rate</p>
              <p className="text-2xl font-bold text-gray-900">87.3%</p>
              <p className="text-sm text-red-600">-2.1% from last month</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue Growth</p>
              <p className="text-2xl font-bold text-gray-900">+18.7%</p>
              <p className="text-sm text-green-600">$12,450 this month</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Usage Trends</h3>
          <div className="h-80">
            <div className="flex items-end justify-between h-64 px-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-end space-x-1 mb-2">
                    <div 
                      className="w-6 bg-blue-500 rounded-t"
                      style={{ height: `${(data.users / 400) * 200}px` }}
                    ></div>
                    <div 
                      className="w-6 bg-green-500 rounded-t"
                      style={{ height: `${(data.tokens / 50000) * 200}px` }}
                    ></div>
                    <div 
                      className="w-6 bg-purple-500 rounded-t"
                      style={{ height: `${(data.revenue / 7000) * 200}px` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                <span className="text-sm text-gray-600">Users</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                <span className="text-sm text-gray-600">Tokens (K)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded mr-2"></div>
                <span className="text-sm text-gray-600">Revenue ($)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Users by Token Usage</h3>
          <div className="space-y-4">
            {topUsers.map((user, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-medium text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.tokens} tokens</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: `${user.percentage * 5}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{user.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Usage Patterns */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Patterns by Hour</h3>
        <div className="h-64">
          <div className="flex items-end justify-between h-48 px-4">
            {Array.from({ length: 24 }, (_, i) => {
              const height = Math.random() * 150 + 20;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div 
                    className="w-3 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t"
                    style={{ height: `${height}px` }}
                  ></div>
                  <span className="text-xs text-gray-600 mt-1">
                    {i.toString().padStart(2, '0')}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">Hour of Day (24h format)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;