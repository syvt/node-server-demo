const router = require('express').Router();

const postHandler = require('../utils/post-handler');
const jsonHandler = require('../handlers/json-handler');
const tokenHandler = require('../utils/token-handler');

//cap key khi co token xac thuc bang isdn
router.get('/form', jsonHandler.returnForm);
router.get('/mnp', jsonHandler.prefixMNP);

module.exports = router;