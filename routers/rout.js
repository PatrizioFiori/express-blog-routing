const express = require('express');
const router = express.Router();
const posts = require('../modules/posts');

router.get('/', (req, res) => {
    res.json(posts);
});

router.post('/', (req, res) => {
    res.send('Store: Creo un nuovo post');
});

router.put('/:id', (req, res) => {
    res.send(`Update: Aggiorno il post con id ${req.params.id}`);
});

router.patch('/:id', (req, res) => {
    res.send(`Modify: Modifico il post con id ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Destroy: Cancello il post con id ${req.params.id}`);
});

module.exports = router;
