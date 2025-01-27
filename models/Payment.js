const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Payment = sequelize.define('Payment', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  payment_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('paid', 'pending'),
    allowNull: false
  }
}, {
  timestamps: true
});

Payment.belongsTo(User, { foreignKey: 'student_id' });

module.exports = Payment;