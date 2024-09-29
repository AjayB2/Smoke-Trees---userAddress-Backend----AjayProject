const User = require('../models/user');
const Address = require('../models/address');

const createUserWithAddress = async (req, res) => {
  try {
    const { name, street, city, state, postalCode } = req.body;

    // Create user first
    const user = await User.create({ name });

    // Create address associated with the user
    const address = await Address.create({
      street,
      city,
      state,
      postalCode,
      userId: user.id,
    });

    res.status(201).json({ message: 'User and Address created successfully', user, address });
  } catch (error) {
    console.error('Error creating user and address:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createUserWithAddress,
};
