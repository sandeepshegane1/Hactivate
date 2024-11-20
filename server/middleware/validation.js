export const validateAuth = (req, res, next) => {
  const { email, password, userType, name, organization } = req.body;
console.log(
  email, password, userType, name, organization
)
  // Validate email
  if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Validate password (at least 6 characters)
  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  // Validate userType (must be 'donor' or 'recipient')
  if (!userType || !['donor', 'recipient'].includes(userType)) {
    return res.status(400).json({ message: 'Invalid userType, must be "donor" or "recipient"' });
  }

  // Optional fields validation (name, organization) can be skipped if not provided
  if (name && typeof name !== 'string') {
    return res.status(400).json({ message: 'Name must be a string' });
  }

  if (organization && typeof organization !== 'string') {
    return res.status(400).json({ message: 'Organization must be a string' });
  }

  next();
};

export const validateDonation = (req, res, next) => {
  const { foodType, quantity, expiryDate, pickupTime, address, notes } = req.body;

  // Validate foodType (must be a string)
  if (!foodType || typeof foodType !== 'string') {
    return res.status(400).json({ message: 'Food type must be a string' });
  }

  // Validate quantity (must be a positive number)
  if (!quantity || typeof quantity !== 'number' || quantity <= 0) {
    return res.status(400).json({ message: 'Quantity must be a positive number' });
  }

  // Validate expiryDate (must be a string)
  if (!expiryDate || typeof expiryDate !== 'string') {
    return res.status(400).json({ message: 'Expiry date must be a string' });
  }

  // Validate pickupTime (must be a string)
  if (!pickupTime || typeof pickupTime !== 'string') {
    return res.status(400).json({ message: 'Pickup time must be a string' });
  }

  // Validate address (must be a string)
  if (!address || typeof address !== 'string') {
    return res.status(400).json({ message: 'Address must be a string' });
  }

  // Optional notes validation (if provided, must be a string)
  if (notes && typeof notes !== 'string') {
    return res.status(400).json({ message: 'Notes must be a string' });
  }

  next();
};


export const validateRequest = (req, res, next) => {
  const { peopleToFeed, urgency, requirements, address } = req.body;

  // Validate peopleToFeed (must be a positive number)
  if (!peopleToFeed || typeof peopleToFeed !== 'number' || peopleToFeed <= 0) {
    return res.status(400).json({ message: 'People to feed must be a positive number' });
  }

  // Validate urgency (must be 'normal', 'urgent', or 'emergency')
  if (!urgency || !['normal', 'urgent', 'emergency'].includes(urgency)) {
    return res.status(400).json({ message: 'Urgency must be "normal", "urgent", or "emergency"' });
  }

  // Validate requirements (must be a string)
  if (!requirements || typeof requirements !== 'string') {
    return res.status(400).json({ message: 'Requirements must be a string' });
  }

  // Validate address (must be a string)
  if (!address || typeof address !== 'string') {
    return res.status(400).json({ message: 'Address must be a string' });
  }

  next();
};
