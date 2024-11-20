import React from 'react';
import { AlertTriangle, MapPin } from 'lucide-react';

const EmergencyAlerts = () => {
  const alerts = [
    {
      id: 1,
      location: "Downtown Food Bank",
      message: "Urgent need for non-perishable items",
      distance: "2.5 km away"
    },
    {
      id: 2,
      location: "Community Shelter",
      message: "Emergency food supplies needed",
      distance: "4.1 km away"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-red-50 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="text-red-600 w-6 h-6" />
          <h2 className="text-2xl font-bold text-gray-900">Emergency Alerts</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {alerts.map(alert => (
            <div key={alert.id} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{alert.location}</h3>
                  <p className="text-gray-600">{alert.message}</p>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  {alert.distance}
                </div>
              </div>
              <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                Respond Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyAlerts;