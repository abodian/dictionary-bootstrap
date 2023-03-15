const express = require("express");
const router = express.Router();
const DictionaryController = require('../controllers/dictionary')

router.get('/:word', DictionaryController.GetDefinition);

module.exports = router;