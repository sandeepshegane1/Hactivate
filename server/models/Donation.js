import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  foodType: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
  pickupTime: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  notes: String,
  status: {
    type: String,
    enum: ['pending', 'accepted', 'completed', 'cancelled'],
    default: 'pending'
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Donation', donationSchema);