import React from 'react';
import { Award } from 'lucide-react';

const LeaderboardSection = () => {
  const leaders = [
    {
      id: 1,
      name: "Fresh Foods Market",
      donations: 1250,
      badge: "Platinum Donor",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 2,
      name: "City Grocers",
      donations: 980,
      badge: "Gold Donor",
      image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 3,
      name: "Green Earth NGO",
      donations: 850,
      badge: "Silver Donor",
      image: "https://images.unsplash.com/photo-1560393464-5c69a73c5770?auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Contributors</h2>
        <p className="text-gray-600">Recognizing those making the biggest impact</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {leaders.map(leader => (
          <div key={leader.id} className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="relative inline-block">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <Award className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="font-semibold text-lg mb-1">{leader.name}</h3>
            <div className="text-sm text-gray-500 mb-3">{leader.badge}</div>
            <div className="text-green-600 font-semibold">
              {leader.donations} meals donated
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeaderboardSection;