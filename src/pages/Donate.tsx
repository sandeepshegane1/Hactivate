import React, { useState } from "react";
import { Calendar, Clock, MapPin, Package } from "lucide-react";
import axios from "axios";

interface FormData {
  foodType: string;
  quantity: string;
  expiryDate: string;
  pickupTime: string;
  address: string;
  notes: string;
}

function Donate(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    foodType: "",
    quantity: "",
    expiryDate: "",
    pickupTime: "",
    address: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/donations", {
        ...formData,
        status: "pending", // Default status
      });
      console.log("Donation submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting donation:", error);
    }
  };
  

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto pb-16">
      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Donate Food</h1>
        <p className="text-gray-600 mb-8">
          Fill out the form below to donate surplus food. We'll connect you with
          nearby organizations in need.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Food Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type of Food
            </label>
            <div className="relative">
              <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="foodType"
                value={formData.foodType}
                onChange={handleChange}
                placeholder="e.g., Fresh produce, Packaged meals"
                className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity (servings)
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Number of servings"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Expiry Date and Pickup Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Pickup Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Address
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special instructions or details about the food"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
}

export default Donate;
