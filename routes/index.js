'use strict';

const router = require('express').Router();
const result = require('../util/res');

router.get('/', (req, res) => {
    const data = {
        author:     process.env.AUTHOR,
        version:    process.env.VERSION,
        port:       process.env.PORT,
        env:        process.env.NODE_ENV,
        base_url:   process.env.BASE_URL + '/' + process.env.VERSION,
        status:     'running'
    };
    result.data(data, res);
});

router.use('/users', require('../app/user/user-router'));
router.use('/profiles', require('../app/profile/profile-router'));

module.exports = router;