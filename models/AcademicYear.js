const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const AcademicYear = sequelize.define('AcademicYear', {
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  // Ajout d'une contrainte pour éviter les chevauchements d'années académiques
  hooks: {
    beforeCreate: async (academicYear, options) => {
      const overlappingAcademicYear = await AcademicYear.findOne({
        where: {
          [DataTypes.Op.or]: [
            {
              start_date: { [DataTypes.Op.lt]: academicYear.end_date }, // Si la nouvelle année commence avant la fin de l'année existante
              end_date: { [DataTypes.Op.gt]: academicYear.start_date },   // Si la nouvelle année se termine après le début de l'année existante
            },
          ],
        },
      });

      if (overlappingAcademicYear) {
        throw new Error('Les années académiques se chevauchent !');
      }
    },
    beforeUpdate: async (academicYear, options) => {
      const overlappingAcademicYear = await AcademicYear.findOne({
        where: {
          [DataTypes.Op.or]: [
            {
              start_date: { [DataTypes.Op.lt]: academicYear.end_date },
              end_date: { [DataTypes.Op.gt]: academicYear.start_date },
            },
          ],
          id: { [DataTypes.Op.ne]: academicYear.id }, // Exclure l'année académique en cours de mise à jour
        },
      });

      if (overlappingAcademicYear) {
        throw new Error('Les années académiques se chevauchent !');
      }
    },
  },
});

module.exports = AcademicYear;
