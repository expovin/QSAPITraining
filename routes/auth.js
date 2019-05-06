var express = require('express');
var fs = require('fs');
var helper=require('../lib/helper');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req,res,next) => {
    helper.QSAuth(req.body).then( data =>{
        res.status(200).json(data);
    })
})

module.exports = router;
