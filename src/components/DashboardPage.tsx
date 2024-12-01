import React from 'react';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Clock,
  Search,
  BookPlus,
  UserPlus,
  Settings
} from 'lucide-react';
import Header from './Header';
import StatCard from './StatCard';
import QuickAction from './QuickAction';

interface DashboardPageProps {
  userRole: 'admin' | 'member';
}

export default function DashboardPage({ userRole }: DashboardPageProps) {
  const stats = [
    { icon: BookOpen, title: "Total Books", value: "2,847" },
    { icon: Users, title: "Active Members", value: "1,439" },
    { icon: BarChart3, title: "Books Borrowed", value: "482" },
    { icon: Clock, title: "Overdue Returns", value: "12" }
  ];

  const adminActions = [
    { icon: BookPlus, label: "Add New Book" },
    { icon: UserPlus, label: "Register Member" },
    { icon: Search, label: "Search Catalog" },
    { icon: Clock, label: "View Due Returns" }
  ];

  const memberActions = [
    { icon: Search, label: "Search Books" },
    { icon: BookOpen, label: "My Borrowed Books" },
    { icon: Clock, label: "Due Dates" },
    { icon: Settings, label: "Account Settings" }
  ];

  const quickActions = userRole === 'admin' ? adminActions : memberActions;

  const recentBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "Available", dueDate: null },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", status: "Borrowed", dueDate: "2024-03-25" },
    { id: 3, title: "1984", author: "George Orwell", status: "Available", dueDate: null },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", status: "Borrowed", dueDate: "2024-03-28" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userRole={userRole} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-6 lg:space-y-8">
        {userRole === 'admin' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                title={stat.title}
                value={stat.value}
              />
            ))}
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <QuickAction
                key={index}
                icon={action.icon}
                label={action.label}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
              {userRole === 'admin' ? 'Recent Books' : 'Available Books'}
            </h2>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              View all
            </button>
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    Title
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    Author
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    Status
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    Due Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentBooks.map((book) => (
                  <tr key={book.id} className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {book.title}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {book.author}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        book.status === 'Available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {book.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {book.dueDate || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}