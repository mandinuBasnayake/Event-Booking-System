import { useEffect, useState } from 'react';

interface HealthStatus {
  status: string;
  timestamp: string;
  service: string;
}

function HomePage() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Event Booking System
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          High-Performance Ticket Booking Platform
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">System Status</h2>
          {error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p className="font-bold">Backend Connection Failed</p>
              <p className="text-sm">{error}</p>
              <p className="text-sm mt-2">Make sure the backend server is running on port 3000</p>
            </div>
          ) : health ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              <p className="font-bold">✓ Backend Connected</p>
              <p className="text-sm">Service: {health.service}</p>
              <p className="text-sm">Status: {health.status}</p>
            </div>
          ) : (
            <div className="text-gray-500">Connecting to backend...</div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">
              Real-Time Booking
            </h3>
            <p className="text-primary-700 text-sm">
              Live seat updates and instant reservations
            </p>
          </div>
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">
              High Concurrency
            </h3>
            <p className="text-primary-700 text-sm">
              Handle thousands of simultaneous users
            </p>
          </div>
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">
              Production Ready
            </h3>
            <p className="text-primary-700 text-sm">
              Built with scalability and performance in mind
            </p>
          </div>
        </div>

        <div className="mt-12 text-gray-500 text-sm">
          <p>Phase 1: Foundation - Setup Complete ✓</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
