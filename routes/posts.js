const express = require('express');
const posts = require('../models/post')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('we are on post');
});
router.post('/', (req, res) => {
    const post = new posts({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data =>{
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        })
});

module.exports = router;
 