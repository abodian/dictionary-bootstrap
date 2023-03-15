const axios = require("axios");
const DictionaryController = require("./dictionary");

jest.mock("axios");

describe("DictionaryController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return definition of a word", async () => {
    const word = "apple";
    const responseData = [
      { definition: "a round fruit with red or green skin" },
    ];
    axios.get.mockResolvedValueOnce({ data: responseData });

    const req = { params: { word } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await DictionaryController.GetDefinition(req, res);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ responseData });
  });

  it("should return 500 status if there's an error", async () => {
    const word = "apple";
    const error = new Error("Something went wrong");
    axios.get.mockRejectedValueOnce(error);

    const req = { params: { word } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await DictionaryController.GetDefinition(req, res);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ error: error.message });
  });
});
