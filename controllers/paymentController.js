const { Payment } = require('../models');

// Obtenir tous les paiements
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un paiement par ID
exports.getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByPk(id);
    if (!payment) {
      return res.status(404).json({ message: 'Paiement non trouvé' });
    }
    res.status(200).json(payment);
  } catch (error) {
    console.error('Error fetching payment:', error);
    res.status(500).json({ error: error.message });
  }
};

// Créer un paiement
exports.createPayment = async (req, res) => {
  try {
    const { student_id, amount, payment_date, status } = req.body;
    if (!student_id || !amount || !payment_date || !status) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
    const newPayment = await Payment.create({ student_id, amount, payment_date, status });
    res.status(201).json(newPayment);
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un paiement
exports.updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, payment_date, status } = req.body;
    const payment = await Payment.findByPk(id);
    if (!payment) {
      return res.status(404).json({ message: 'Paiement non trouvé' });
    }
    await payment.update({ amount, payment_date, status });
    res.status(200).json(payment);
  } catch (error) {
    console.error('Error updating payment:', error);
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un paiement
exports.deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByPk(id);
    if (!payment) {
      return res.status(404).json({ message: 'Paiement non trouvé' });
    }
    await payment.destroy();
    res.status(200).json({ message: 'Paiement supprimé avec succès' });
  } catch (error) {
    console.error('Error deleting payment:', error);
    res.status(500).json({ error: error.message });
  }
};
