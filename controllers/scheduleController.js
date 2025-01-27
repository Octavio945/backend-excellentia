const { Schedule } = require('../models');

// Obtenir tous les horaires
exports.getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.findAll();
    res.status(200).json(schedules);
  } catch (error) {
    console.error('Error fetching schedules:', error);
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un horaire par ID
exports.getScheduleById = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await Schedule.findByPk(id);
    if (!schedule) {
      return res.status(404).json({ message: 'Horaire non trouvé' });
    }
    res.status(200).json(schedule);
  } catch (error) {
    console.error('Error fetching schedule:', error);
    res.status(500).json({ error: error.message });
  }
};

// Créer un horaire
exports.createSchedule = async (req, res) => {
  try {
    const { course_id, week_number, day_of_week, start_time, end_time } = req.body;
    if (!course_id || !week_number || !day_of_week || !start_time || !end_time) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
    const newSchedule = await Schedule.create({ course_id, week_number, day_of_week, start_time, end_time });
    res.status(201).json(newSchedule);
  } catch (error) {
    console.error('Error creating schedule:', error);
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un horaire
exports.updateSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { week_number, day_of_week, start_time, end_time } = req.body;
    const schedule = await Schedule.findByPk(id);
    if (!schedule) {
      return res.status(404).json({ message: 'Horaire non trouvé' });
    }
    await schedule.update({ week_number, day_of_week, start_time, end_time });
    res.status(200).json(schedule);
  } catch (error) {
    console.error('Error updating schedule:', error);
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un horaire
exports.deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await Schedule.findByPk(id);
    if (!schedule) {
      return res.status(404).json({ message: 'Horaire non trouvé' });
    }
    await schedule.destroy();
    res.status(200).json({ message: 'Horaire supprimé avec succès' });
  } catch (error) {
    console.error('Error deleting schedule:', error);
    res.status(500).json({ error: error.message });
  }
};
