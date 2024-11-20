import React from 'react';

const DonationStats = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">2.5M</div>
            <div className="text-gray-600">Meals Donated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">1.2K</div>
            <div className="text-gray-600">Active Donors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">NGO Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">15K</div>
            <div className="text-gray-600">CO₂ Saved (kg)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationStats;