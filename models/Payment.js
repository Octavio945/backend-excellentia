const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Payment = sequelize.define('Payment', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  payment_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('paid', 'pending'),
    allowNull: false,
  },
  payment_method: {
    type: DataTypes.ENUM('cash', 'mobile_money', 'bank_transfer', 'other'),
    allowNull: false, // Indiquer que le mode de paiement est obligatoire
  },
  reference_code: {
    type: DataTypes.STRING,
    allowNull: true, // Ce champ peut être nul pour les paiements en espèces, mais pas pour les paiements en ligne
    unique: true, // Pour garantir l'unicité de chaque référence de paiement
  },
}, {
  timestamps: true,
});

Payment.belongsTo(User, { foreignKey: 'student_id' });

module.exports = Payment;
