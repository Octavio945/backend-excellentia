const { User } = require('../models');
const bcrypt = require('bcrypt');

// Obtenir tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un utilisateur par ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: error.message });
  }
};

// Créer un utilisateur
exports.createUser = async (req, res) => {
  try {
    const { username, password, email, role } = req.body;
    if (!username || !password || !email || !role) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({ username, password: hashedPassword, email, role });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, email, role } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    const hashedPassword = password ? bcrypt.hashSync(password, 10) : user.password;
    await user.update({ username, password: hashedPassword, email, role });
    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un utilisateur
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    await user.destroy();
    res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: error.message });
  }
};
