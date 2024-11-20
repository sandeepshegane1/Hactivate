import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Heart, Leaf } from 'lucide-react';
import DonationStats from '../components/DonationStats';
import EmergencyAlerts from '../components/EmergencyAlerts';
import LeaderboardSection from '../components/LeaderboardSection';
import ImpactCalculator from '../components/ImpactCalculator';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Connecting Surplus Food with
            <span className="text-green-600"> Those in Need</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our mission to reduce food waste and fight hunger. Every donation makes a difference.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => navigate('/donate')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              Donate Food <ArrowUpRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/request')}
              className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Request Food
            </button>
          </div>
        </div>
      </section>

      <DonationStats />
      <EmergencyAlerts />

      {/* Impact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Making a Real Impact
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Feed Communities</h3>
                  <p className="text-gray-600">Connect surplus food with those who need it most</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Reduce Waste</h3>
                  <p className="text-gray-600">Save food from landfills and reduce carbon emissions</p>
                </div>
              </div>
            </div>
          </div>
          <ImpactCalculator />
        </div>
      </section>

      <LeaderboardSection />

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of donors and organizations fighting food waste and hunger.
          </p>
          <button 
            onClick={() => navigate('/donate')}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;