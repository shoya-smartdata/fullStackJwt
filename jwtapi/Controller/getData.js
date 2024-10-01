const User = require('../models/userModel');

const getData = async (req, res) => {
  try {
    
    const data = await User.findByPk(req.userId);
    
    if (!data) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

module.exports = getData;
