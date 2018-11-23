var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql');
var {findUserById} = require('../database')

/* GET users listing. */
router.get('/:id', async function (req, res, next) {
  const user = await findUserById(req.params.id);
  if(!user) {
    return res.sendStatus(404)
  }
  res.json(user);
});



module.exports = router;
