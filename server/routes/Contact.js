const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Contact = require('./models/Contact');

// إعداد الـ schema للتحقق من الحقول باستخدام Joi
const contactSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'Email is required.',
        'string.email': 'Please enter a valid email address.',
    }),
    phone: Joi.string().pattern(/^\d+$/).required().messages({
        'string.empty': 'Phone number is required.',
        'string.pattern.base': 'Phone number must contain only digits.',
    }),
    subject: Joi.string().min(5).required().messages({
        'string.empty': 'Subject is required.',
        'string.min': 'Subject must be at least 5 characters long.',
    }),
    message: Joi.string().min(10).required().messages({
        'string.empty': 'Message is required.',
        'string.min': 'Message must be at least 10 characters long.',
    }),
});

// GET: صفحة Contact Us
router.get('/', async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.render('contact', { messages });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// POST: إرسال رسالة جديدة
router.post('/', async (req, res) => {
    try {
        // التحقق من البيانات المدخلة باستخدام Joi
        const { error, value } = contactSchema.validate(req.body);

        if (error) {
            return res.render('contact', { message: error.details[0].message });
        }

        // إنشاء رسالة جديدة وتخزينها في قاعدة البيانات
        const newContact = new Contact(value);
        await newContact.save();

        res.render('contact', { message: 'Thank you for contacting us!' });
    } catch (error) {
        console.error(error);
        res.status(500).render('contact', { message: 'Internal server error.' });
    }
});

// GET: جلب رسالة معينة حسب الـ ID
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