const axios = require("axios");

const DictionaryController = {
  GetDefinition: async (req, res) => {
    try {
      const word = req.params.word;
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const responseData = await response.data
      res.status(200).json({responseData});
      console.log(response)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = DictionaryController;
