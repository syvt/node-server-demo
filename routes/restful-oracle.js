const router = require('express').Router();

const postHandler = require('../utils/post-handler');
const oracleHandler = require('../handlers/oracle-traffic-handler')


//cap key khi co token xac thuc bang isdn
router.get('/json-vlr-online', oracleHandler.getVlrOnline);
router.post('/json-vlr-online'
                            , postHandler.jsonProcess //ket qua tra ra cho buoc tiep theo la req.json_data
                            , oracleHandler.getVlrOnline
                            );


module.exports = router;