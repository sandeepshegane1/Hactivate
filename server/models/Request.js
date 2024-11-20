import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  peopleToFeed: {
    type: Number,
    required: true
  },
  urgency: {
    type: String,
    enum: ['normal', 'urgent', 'emergency'],
    default: 'normal'
  },
  requirements: String,
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'matched', 'completed', 'cancelled'],
    default: 'pending'
  },
  matchedDonation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donation'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Request', requestSchema);