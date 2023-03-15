const axios = require("axios");
const ThesaurusController = require("./thesaurus");
const API_KEY = process.env.API_KEY;

jest.mock("axios");

describe("ThesaurusController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return definition of a word", async () => {
    const word = "apple";
    const responseData = [
      {
        noun: {
          syn: [
            "orchard apple tree",
            "Malus pumila",
            "apple tree",
            "edible fruit",
            "false fruit",
            "pome",
          ],
        },
      },
    ];
    axios.get.mockResolvedValueOnce({ data: responseData });

    const req = { params: { word } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await ThesaurusController.GetSynonyms(req, res);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `https://words.bighugelabs.com/api/2/${API_KEY}/${word}/json`
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

    await ThesaurusController.GetSynonyms(req, res);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `https://words.bighugelabs.com/api/2/${API_KEY}/${word}/json`
    );

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ error: error.message });
  });
});
