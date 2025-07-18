import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UsersTable from './components/UsersTable';
import TokensTable from './components/TokensTable';
import CreditsTable from './components/CreditsTable';
import Analytics from './components/Analytics';
import Sessions from './components/Sessions';
import Settings from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UsersTable />;
      case 'tokens':
        return <TokensTable />;
      case 'credits':
        return <CreditsTable />;
      case 'analytics':
        return <Analytics />;
      case 'sessions':
        return <Sessions />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;