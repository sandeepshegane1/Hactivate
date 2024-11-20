import React, { useState } from 'react';

const ImpactCalculator = () => {
  const [mealCount, setMealCount] = useState(100);

  const calculateImpact = (meals: number) => {
    return {
      co2: (meals * 2.5).toFixed(1), // 2.5kg CO2 per meal saved
      water: (meals * 1000).toFixed(0), // 1000L water per meal saved
      people: Math.floor(meals / 3) // Assuming 3 meals per person per day
    };
  };

  const impact = calculateImpact(mealCount);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Calculate Your Impact</h3>
      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-2">
          Number of meals to donate
        </label>
        <input
          type="range"
          min="10"
          max="1000"
          value={mealCount}
          onChange={(e) => setMealCount(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-center mt-2 text-lg font-semibold text-green-600">
          {mealCount} meals
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">CO₂ Emissions Saved</div>
          <div className="text-xl font-semibold">{impact.co2} kg</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Water Saved</div>
          <div className="text-xl font-semibold">{impact.water} L</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">People Fed (per day)</div>
          <div className="text-xl font-semibold">{impact.people}</div>
        </div>
      </div>
    </div>
  );
};

export default ImpactCalculator;