const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const Sequelize = require('sequelize');
const port = process.env.PORT || 5000;

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db',
    define: { timestamps: false }
});

const Experienta = sequelize.define('experienta', {
    punctPlecare: Sequelize.STRING,
    punctSosire: Sequelize.STRING,
    mijlocTransport: Sequelize.STRING,
    oraPlecare: Sequelize.TIME,
    durata: Sequelize.INTEGER,
    gradAglomerare: Sequelize.INTEGER,
    observatii: Sequelize.TEXT,
    nivelSatisfactie: Sequelize.INTEGER
});

const app = express();
app.use(express.json());
app.use(cors());

app.get('/experiente', async (req, res) => {
    try {
        const experiente = await Experienta.findAll();
        res.status(200).json(experiente);
    } catch (error) {
        console.warn(error);
        res.status(500).json({ message: 'Eroare la citire!' });
    }
});

app.get('/experiente/:eid', async (req, res) => {
    try {
        const experienta = await Experienta.findByPk(req.params.eid);
        if (experienta) {
            res.status(200).json(experienta);
        } else {
            res.status(404).json({ message: 'Experienta nu exista' });
        }
    } catch (error) {
        console.warn(error);
        res.status(500).json({ message: 'Eroare la citire!' });
    }
});

app.post('/experiente', async (req, res) => {
    try {
        await Experienta.create(req.body);
        res.status(200).json({ message: 'Experienta creeata!' });
    } catch (error) {
        console.warn(error);
        res.status(500).json({ message: 'Eroare la creeare!' });
    }
});

app.put('/experiente/:eid', async (req, res) => {
    try {
        const experienta = await Experienta.findByPk(req.params.eid);
        if (experienta) {
            await experienta.update(req.body);
            res.status(200).json({ message: 'Experienta modificata!' })
        } else {
            res.status(404).json({ message: 'Experienta nu exista' });
        }
    } catch (error) {
        console.warn(error);
        res.status(500).json({ message: 'Eroare la modificare!' });
    }
});

app.delete('/experiente/:eid', async (req, res) => {
    try {
        const experienta = await Experienta.findByPk(req.params.eid);
        if (experienta) {
            await experienta.destroy();
            res.status(200).json({ message: 'Experienta stearsa!' })
        } else {
            res.status(404).json({ message: 'Experienta nu exista' });
        }
    } catch (error) {
        console.warn(error);
        res.status(500).json({ message: 'Eroare la stergere!' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}...`);
});