require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./config/database');
const register_route = require('./routes/register_route');
const login_route = require('./routes/login_route');
const users_route = require('./routes/users_route');
const experiente_route = require('./routes/experiente_route');

const app = express();

// Database connection
connect();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/register', register_route);
app.use('/login', login_route);
app.use('/users', users_route);
app.use('/experiente', experiente_route);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});