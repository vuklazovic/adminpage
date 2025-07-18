import React from 'react';
import { 
  Users, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Shield, 
  Activity,
  Database,
  TrendingUp
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard', color: 'text-blue-600' },
    { id: 'users', icon: Users, label: 'Users', color: 'text-green-600' },
    { id: 'tokens', icon: Database, label: 'Tokens', color: 'text-purple-600' },
    { id: 'credits', icon: CreditCard, label: 'Credits', color: 'text-orange-600' },
    { id: 'analytics', icon: TrendingUp, label: 'Analytics', color: 'text-indigo-600' },
    { id: 'sessions', icon: Activity, label: 'Sessions', color: 'text-red-600' },
    { id: 'settings', icon: Settings, label: 'Settings', color: 'text-gray-600' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-screen border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-sm text-gray-500">Management System</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-blue-700' : item.color}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;