import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Event Booking System</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                Welcome, {user?.firstName} {user?.lastName}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">User Information</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Name:</span> {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Email:</span> {user?.email}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Role:</span>{' '}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {user?.role}
                    </span>
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">User ID:</span> {user?.id}
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Phase 2 Complete!</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    Authentication system successfully implemented:
                  </p>
                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                    <li>User registration</li>
                    <li>Secure login with JWT</li>
                    <li>Protected routes</li>
                    <li>User session management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Coming Soon</h3>
              <p className="text-sm text-gray-700">
                Phase 3: Event Management System - Create and manage events (admin interface)
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
