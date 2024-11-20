import express from 'express';
import { auth } from '../middleware/auth.js';
import Request from '../models/Request.js';
import { validateRequest } from '../middleware/validation.js';
import { notifyDonors } from '../websocket.js';

const router = express.Router();

// Create request
router.post('/', auth, validateRequest, async (req, res) => {
  try {
    const request = new Request({
      ...req.body,
      recipient: req.user.userId
    });

    await request.save();
    
    // Notify potential donors
    notifyDonors('new-request', request);

    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all requests
router.get('/', auth, async (req, res) => {
  try {
    const requests = await Request.find()
      .populate('recipient', 'name organization')
      .populate('matchedDonation')
      .sort('-createdAt');
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update request status
router.patch('/:id/status', auth, async (req, res) => {
  try {
    const { status, donationId } = req.body;
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    request.status = status;
    if (donationId) {
      request.matchedDonation = donationId;
    }
    await request.save();

    // Notify relevant parties
    notifyDonors('request-updated', request);

    res.json(request);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;