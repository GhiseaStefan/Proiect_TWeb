module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Experienta', {
        punctPlecare: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        punctSosire: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        mijlocTransport: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        oraPlecare: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        durataCalatorie: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        gradAglomerare: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        observatii: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        nivelSatisfactie: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        userId: {
            type: DataTypes.INTEGER,
            defaultValue: null
        }
    });
};