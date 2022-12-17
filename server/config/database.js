const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'Database.db',
    define: { timestamps: false }
});

const connect = () => {
    sequelize.authenticate()
    .then(() => console.log('Connected to the database successfully!'))
    .catch((err) => console.warn(err));
};

const User = require('../models/user_model')(sequelize, Sequelize);
const Experienta = require('../models/experienta_model')(sequelize, Sequelize);

// Recreate tables
// sequelize.sync({ force: true });

module.exports = { connect, User, Experienta };