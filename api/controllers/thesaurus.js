const axios = require("axios");
const API_KEY = process.env.API_KEY;

const ThesaurusController = {
  GetSynonyms: async (req, res) => {
    try {
      const word = req.params.word;
      const response = await axios.get(
        `https://words.bighugelabs.com/api/2/${API_KEY}/${word}/json`
      );
      const responseData = await response.data;
      res.status(200).json({ responseData });
      console.log(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ThesaurusController;
