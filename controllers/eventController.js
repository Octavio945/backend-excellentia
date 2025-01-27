const { Event } = require('../models');

// Obtenir tous les événements
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un événement par ID
exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Événement non trouvé' });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ error: error.message });
  }
};

// Créer un événement
exports.createEvent = async (req, res) => {
  try {
    const { title, description, event_date } = req.body;
    if (!title || !description || !event_date) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
    const newEvent = await Event.create({ title, description, event_date });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un événement
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, event_date } = req.body;
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Événement non trouvé' });
    }
    await event.update({ title, description, event_date });
    res.status(200).json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un événement
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Événement non trouvé' });
    }
    await event.destroy();
    res.status(200).json({ message: 'Événement supprimé avec succès' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: error.message });
  }
};
