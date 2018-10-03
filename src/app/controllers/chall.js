const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Tasks = require('../models/tasks');
const router = express.Router();

router.use(authMiddleware);

router.post('/new_chall', async (req, res) => {
    try {
        const task = await Tasks.create(req.body);

        return res.send({ task });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Erro ao adicionar nova challenge!' })
    }
})

router.post('/list_chall', async (req, res) => {
    try {
        const list_chall = await Tasks.find();

        return res.send({ list_chall });
    } catch (err) {
        return res.status(400).send({ error: 'invalid token para listar!' });
    }
})

module.exports = app => app.use('/challenges', router);