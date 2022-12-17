const router = require('express').Router();
const { User } = require('../config/database');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const validateRegistration = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Password')
    });
    return schema.validate(data);
};

router.post('/', async (req, res) => {
    try {
        // Validate user input
        const { error } = validateRegistration(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Get user input into separate variables
        const { email, password } = req.body;

        // Validate if user exists in our database
        const oldUser = (await User.findAll({ where: { email: email.toLowerCase() }}))[0];
        if (oldUser) {
            return res.status(409).json({ message: 'User Already Exists. Please Log In' });
        }

        // Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create token
        const token = jwt.sign(
            { user_id: email },
            process.env.TOKEN_KEY,
            { expiresIn: "7d" }
        );

        // Create user in database
        const user = await User.create({
            "email": email.toLowerCase(),
            "password": encryptedPassword,
            "token": token
        });

        return res.status(201).json({ message: `User Created!`, user: user });
    } catch (err) {
        console.warn(`Internal Server Error: ${err}`);
        return res.status(500).json({ message: `Internal Server Error: ${err}` });
    }
});

module.exports = router;