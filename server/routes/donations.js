import express from 'express';
import Donation from '../models/Donation.js';
import { validateDonation } from '../middleware/validation.js';
import { notifyRecipients } from '../websocket.js';

const router = express.Router();

// Create donation
router.post('/donations', validateDonation, async (req, res) => {
  try {
    const donation = new Donation({
      ...req.body,
      donor: req.body.donor || null, // Optional donor field
    });

    await donation.save();

    // Notify potential recipients
    notifyRecipients('new-donation', donation);

    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all donations
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find()
      .populate('donor', 'name organization')
      .populate('recipient', 'name organization')
      .sort('-createdAt');
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update donation status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const donation = await Donation.findById(req.params.id);

    if (!donation) {
      return res.status(404).json({ message: 'Donation not found' });
    }

    donation.status = status;
    await donation.save();

    // Notify relevant parties
    notifyRecipients('donation-updated', donation);

    res.json(donation);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
