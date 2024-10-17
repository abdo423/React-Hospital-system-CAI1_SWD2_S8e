const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', async (req, res) => {
    try {
        res.render('contact'); 
    } catch (error) {
        console.error(error); 
        res.status(500).render('contact', { message: 'Internal server error.' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, message } = req.body;

        if (!name || !message) {
            return res.render('contact', { message: 'Name and message are required.' });
        }

        const newContact = new Contact({ name, message });
        await newContact.save();

        res.render('contact', { message: 'Thank you for contacting us!' });
    } catch (error) {
        console.error(error); 
        res.status(500).render('contact', { message: 'Internal server error.' });
    }
});

router.get('/all', async (req, res) => {
    try {
        const contacts = await Contact.find().exec();
        res.status(200).json(contacts);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Internal server error.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findById(id).exec();

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found.' });
        }

        res.status(200).json(contact);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Internal server error.' });
    }
});

module.exports = router;
