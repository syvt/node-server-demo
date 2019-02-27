const router = require('express').Router();

const postHandler = require('../utils/post-handler');
const localHandler = require('../handlers/local-handler');
const tokenHandler = require('../utils/token-handler');


//
router.post('/login'
                    , postHandler.jsonProcess //xu ly post json tra ve req.json_data
                    , localHandler.postLogin);
router.post('/result-baoduong'
                    , postHandler.jsonProcess //xu ly post json tra ve req.json_data
                    //luu csdl thi them ham vao, luu thanh cong thi tra NEXT, nguoc lai thi bao loi
                    , localHandler.postResult);

module.exports = router;