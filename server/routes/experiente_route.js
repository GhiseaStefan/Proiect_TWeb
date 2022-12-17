const router = require('express').Router();
const { Experienta } = require('../config/database');
const Joi = require('joi');

const validateExperienta = (data) => {
    const schema = Joi.object({
        punctPlecare: Joi.string().required().label('Punct de plecare'),
        punctSosire: Joi.string().required().label('Punct de sosire'),
        oraPlecare: Joi.string().pattern(new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')).required().label('Ora plecare'),
        durataCalatorie: Joi.number().required().label('Durata calatoriei'),
        gradAglomerare: Joi.number().less(11).required().label('Grad de aglomerare'),
        nivelSatisfactie: Joi.number().less(6).required().label('Nivel satisfactie')
    });
    return schema.validate(data);
};

router.get('/', async (req, res) => {
    try {
        const experiente = await Experienta.findAll();
        return res.status(200).json(experiente);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error occured trying to get all experiente' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { punctPlecare, punctSosire, oraPlecare, durataCalatorie, gradAglomerare, nivelSatisfactie } = req.body;
        const { error } = validateExperienta({ punctPlecare, punctSosire, oraPlecare, durataCalatorie, gradAglomerare, nivelSatisfactie });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        await Experienta.create(req.body);
        return res.status(201).json({ message: 'Experienta created!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error occured trying create an Experienta' });
    }
});

router.get('/:eid', async (req, res) => {
    try {
        const experienta = await Experienta.findByPk(req.params.eid);
        if (experienta) {
            return res.status(200).json(experienta);
        }
        return res.status(404).json({ message: 'Experienta not found' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: `Error occured trying to get experienta with id = ${req.params.eid}` });
    }
});

router.put('/:eid', async (req, res) => {
    try {
        const experienta = await Experienta.findByPk(req.params.eid);
        if (experienta) {
            const { punctPlecare, punctSosire, oraPlecare, durataCalatorie, gradAglomerare, nivelSatisfactie } = req.body;
            const { error } = validateExperienta({ punctPlecare, punctSosire, oraPlecare, durataCalatorie, gradAglomerare, nivelSatisfactie });
            if (error) {
                return res.status(400).json({ message: error.details[0].message });
            }
            await experienta.update(req.body);
            return res.status(200).json(experienta);
        }
        return res.status(404).json({ message: 'Experienta not found' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: `Error occured trying to update experienta with id = ${req.params.eid}` });
    }
});

router.delete('/:eid', async (req, res) => {
    try {
        const experienta = await Experienta.findByPk(req.params.eid);
        if (experienta) {
            await experienta.destroy();
            return res.status(200).json({ message: 'Experienta deleted!' });
        }
        return res.status(404).json({ message: 'Experienta not found' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: `Error occured trying to delete experienta with id = ${req.params.eid}` });
    }
});

module.exports = router;