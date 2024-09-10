const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/api/user', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok',
        metadata:[
        {
            name:'antony sprin',
            age: 25
        },
        {
            name:'Ronaldo',
            age: 40
        },
        {
            name:'Messi',
            age: 37
        }
        ]
    })
})

module.exports = router;