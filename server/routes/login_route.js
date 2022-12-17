const router = require('express').Router();
const { User } = require('../config/database');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const validateLogin = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().label('Password')
    });
    return schema.validate(data);
};

router.post('/', async (req, res) => {
    try {
        // Validate user input
        const { error } = validateLogin(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Get user input into separate variables
        const { email, password } = req.body;

        // Validate if user exists in our database
        const user = (await User.findAll({ where: { email: email.toLowerCase() }}))[0];
        if (user) {
            if (await bcrypt.compare(password, user.dataValues.password)) {
                const token = jwt.sign(
                    { user_id: email },
                    process.env.TOKEN_KEY,
                    { expiresIn: "7d" }
                );
                user.token = token;
                return res.status(200).json(user);
            }
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        return res.status(400).json({ message: "User Doesn't Exists" });
    } catch (err) {
        console.warn(`Internal Server Error: ${err}`);
        return res.status(500).json({ message: `Internal Server Error: ${err}` });
    }
});

module.exports = router;