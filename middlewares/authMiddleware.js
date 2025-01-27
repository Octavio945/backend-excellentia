const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.id;
    next();
  });
};

exports.authorize = (roles) => {
  return (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      if (!roles.includes(user.role)) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      next();
    }).catch(err => {
      res.status(500).json({ message: 'Internal server error' });
    });
  };
};
