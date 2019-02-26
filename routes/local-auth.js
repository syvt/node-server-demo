const router = require('express').Router();

const postHandler = require('../utils/post-handler');
const localHandler = require('../handlers/local-handler');
const tokenHandler = require('../utils/token-handler');


//
router.post('/login'
                    , postHandler.jsonProcess //xu ly post json tra ve req.json_data
                    , localHandler.postLogin);

module.exports = router;