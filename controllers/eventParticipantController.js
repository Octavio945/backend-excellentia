const { EventParticipant, Event, User } = require('../models');

// Obtenir toutes les participations aux événements
exports.getAllEventParticipants = async (req, res) => {
  try {
    const eventParticipants = await EventParticipant.findAll({
      include: [Event, User]
    });
    res.status(200).json(eventParticipants);
  } catch (error) {
    console.error('Error fetching event participants:', error);
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une participation à un événement par ID
exports.getEventParticipantById = async (req, res) => {
  try {
    const { id } = req.params;
    const eventParticipant = await EventParticipant.findByPk(id, {
      include: [Event, User]
    });
    if (!eventParticipant) {
      return res.status(404).json({ message: 'Participation à l\'événement non trouvée' });
    }
    res.status(200).json(eventParticipant);
  } catch (error) {
    console.error('Error fetching event participant:', error);
    res.status(500).json({ error: error.message });
  }
};

// Créer une participation à un événement
exports.createEventParticipant = async (req, res) => {
  try {
    const { event_id, user_id } = req.body;
    if (!event_id || !user_id) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
    const newEventParticipant = await EventParticipant.create({ event_id, user_id });
    res.status(201).json(newEventParticipant);
  } catch (error) {
    console.error('Error creating event participant:', error);
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une participation à un événement
exports.deleteEventParticipant = async (req, res) => {
  try {
    const { id } = req.params;
    const eventParticipant = await EventParticipant.findByPk(id);
    if (!eventParticipant) {
      return res.status(404).json({ message: 'Participation à l\'événement non trouvée' });
    }
    await eventParticipant.destroy();
    res.status(200).json({ message: 'Participation à l\'événement supprimée avec succès' });
  } catch (error) {
    console.error('Error deleting event participant:', error);
    res.status(500).json({ error: error.message });
  }
};
