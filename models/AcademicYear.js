const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const AcademicYear = sequelize.define('AcademicYear', {
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
    timestamps: true
});

module.exports  = AcademicYear;
