const axios = require('axios');
const DictionaryController = require('./Dictionary');

jest.mock('axios');

describe('DictionaryController', () => {
  describe('GetDefinition', () => {
    it('should return a definition when given a valid word', async () => {
  
      const mockResponse = {
        data: [
          {
            meanings: [
              {
                definitions: [
                  {
                    definition: 'used as a greeting or to begin a telephone conversation',
                    example: 'hello there, Katie!'
                  }
                ]
              }
            ]
          }
        ]
      };
      axios.get.mockResolvedValue(mockResponse);

      const req = {};
      const res = {
        json: jest.fn().mockReturnThis(),
        status: jest.fn().mockReturnThis()
      };

      await DictionaryController.GetDefinition(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ response: mockResponse });
    });

    it('should return a 500 error when given an invalid word', async () => {
      const mockError = new Error('Invalid word');
      axios.get.mockRejectedValue(mockError);

      const req = {};
      const res = {
        json: jest.fn().mockReturnThis(),
        status: jest.fn().mockReturnThis()
      };

      await DictionaryController.GetDefinition(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: mockError.message });
    });
  });
});
