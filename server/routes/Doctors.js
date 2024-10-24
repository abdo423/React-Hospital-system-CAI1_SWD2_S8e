const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Contact = require('./models/Contact');

const contactSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'Email is required.',
        'string.email': 'Please enter a valid email address.',
    }),
    phoneNumber: Joi.string().pattern(/^\d+$/).required().messages({
        'string.empty': 'Phone number is required.',
        'string.pattern.base': 'Phone number must contain only digits.',
    }),
    subject: Joi.string().min(3).required().messages({
        'string.empty': 'Subject is required.',
        'string.min': 'Subject must be at least 3 characters long.',
    }),
    message: Joi.string().min(5).required().messages({
        'string.empty': 'Message is required.',
        'string.min': 'Message must be at least 5 characters long.',
    }),
});

router.get('/', async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.render('Contact', { messages });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    try {

      const { error, value } = contactSchema.validate(req.body);

        if (error) {
            return res.render('Contact', { messages: [], error: error.details[0].message });
        }

        // إنشاء رسالة جديدة وتخزينها في قاعدة البيانات
        const newContact = new Contact(value);
        await newContact.save();

        res.render('Contact', { messages: [], success: 'Thank you for contacting us!' });
    } catch (error) {
        console.error(error);
        res.status(500).render('Contact', { messages: [], error: 'Internal server error.' });
    }
});

// GET: جلب رسالة معينة حسب الـ ID وعرضها في صفحة جديدة
router.get('/message/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const contact = await Contact.findById(id).exec();

      if (!Contact) {
          return res.status(404).render('Contact', { message: 'Contact not found.' });
      }

      res.render('message', { Contact }); // عرض الرسالة في صفحة جديدة
  } catch (error) {
      console.error(error);
      res.status(500).render('Contact', { message: 'Internal server error.' });
  }
});
module.exports = router;

// GET: جلب كل الرسائل (Dashboard)
// router.get('/all', async (req, res) => {
//   try {
//       const contacts = await Contact.find().exec();
//       res.status(200).json(contacts);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error.' });
//   }
// });