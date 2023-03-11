const axios = require("axios");

const DictionaryController = {
  GetDefinition: async (req, res) => {
    try {
      const word = 'hello'
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      res.status(200).json({response});
      console.log(response)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = DictionaryController;
