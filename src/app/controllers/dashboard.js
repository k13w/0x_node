const express = require('express');
const chall = require('../models/tasks');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

router.post('/submit/:flag', async (req, res) => {
    const { flag } = req.body;

    try {
        if(await chall.findOne({ flag }))
            return res.status(400).send({ error: 'Correct flag!' });
    } catch (err) {
        return res.status(400).send({ error: 'no logein in dashboard!' });
    }
})

module.exports = app => app.use('/dashboard', router);