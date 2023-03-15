const express = require("express");
const router = express.Router();
const DictionaryController = require('../controllers/Dictionary')

router.get('/:word', DictionaryController.GetDefinition);

module.exports = router;