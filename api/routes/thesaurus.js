const express = require("express");
const router = express.Router();
const ThesaurusController = require('../controllers/thesaurus')

router.get('/:word', ThesaurusController.GetSynonyms);

module.exports = router;