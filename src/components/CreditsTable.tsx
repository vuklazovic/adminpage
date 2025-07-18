import React, { useState } from 'react';
import { Search, Filter, CreditCard, Plus, Minus, TrendingUp, TrendingDown } from 'lucide-react';

const CreditsTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const credits = [
    { id: 1, userId: 1, userName: 'John Doe', credits: 1250, reservedCredits: 200, lastTransaction: '2024-01-15', transactionType: 'purchase', amount: 500 },
    { id: 2, userId: 2, userName: 'Sarah Wilson', credits: 890, reservedCredits: 150, lastTransaction: '2024-01-14', transactionType: 'usage', amount: -75 },
    { id: 3, userId: 3, userName: 'Mike Johnson', credits: 0, reservedCredits: 0, lastTransaction: '2024-01-10', transactionType: 'usage', amount: -45 },
    { id: 4, userId: 4, userName: 'Emma Brown', credits: 450, reservedCredits: 50, lastTransaction: '2024-01-15', transactionType: 'purchase', amount: 200 },
    { id: 5, userId: 5, userName: 'David Taylor', credits: 2100, reservedCredits: 300, lastTransaction: '2024-01-13', transactionType: 'purchase', amount: 1000 },
  ];

  const filteredCredits = credits.filter(credit =>
    credit.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCredits = credits.reduce((sum, credit) => sum + credit.credits, 0);
  const totalReserved = credits.reduce((sum, credit) => sum + credit.reservedCredits, 0);
  const availableCredits = totalCredits - totalReserved;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Credit Management</h2>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
          Add Credits
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Credits</p>
              <p className="text-2xl font-bold text-gray-900">{totalCredits.toLocaleString()}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <CreditCard className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Reserved Credits</p>
              <p className="text-2xl font-bold text-gray-900">{totalReserved.toLocaleString()}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <TrendingDown className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Available Credits</p>
              <p className="text-2xl font-bold text-gray-900">{availableCredits.toLocaleString()}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by user..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option>All Balances</option>
              <option>High Balance (&gt;1000)</option>
              <option>Medium Balance (100-1000)</option>
              <option>Low Balance (&lt;100)</option>
              <option>Zero Balance</option>
            </select>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Credits Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reserved</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Transaction</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCredits.map((credit) => (
                <tr key={credit.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-medium text-sm">
                          {credit.userName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{credit.userName}</div>
                        <div className="text-sm text-gray-500">ID: {credit.userId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{credit.credits.toLocaleString()}</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-orange-600 h-2 rounded-full" 
                        style={{ width: `${Math.min((credit.credits / 2500) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{credit.reservedCredits.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">
                      {(credit.credits - credit.reservedCredits).toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{credit.lastTransaction}</div>
                    <div className="flex items-center">
                      {credit.transactionType === 'purchase' ? (
                        <Plus className="w-3 h-3 text-green-600 mr-1" />
                      ) : (
                        <Minus className="w-3 h-3 text-red-600 mr-1" />
                      )}
                      <span className={`text-xs ${
                        credit.transactionType === 'purchase' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {credit.amount > 0 ? '+' : ''}{credit.amount}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      credit.credits > 1000 ? 'bg-green-100 text-green-800' :
                      credit.credits > 100 ? 'bg-yellow-100 text-yellow-800' :
                      credit.credits > 0 ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {credit.credits > 1000 ? 'High' : credit.credits > 100 ? 'Medium' : credit.credits > 0 ? 'Low' : 'Empty'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-green-600 hover:text-green-900 transition-colors">
                        Add
                      </button>
                      <button className="text-orange-600 hover:text-orange-900 transition-colors">
                        Edit
                      </button>
                      <button className="text-blue-600 hover:text-blue-900 transition-colors">
                        History
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreditsTable;