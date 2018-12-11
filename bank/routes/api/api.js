const express = require('express');
const router = express.Router();
const api = require('../../controllers/api')

router.post('/login', api.requestJWTusingLocal);

module.exports = router;
