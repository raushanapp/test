const { getPeoplePromise, getPeople, url } = require("./script2");

describe("Star Wars API", () => {
  it("should promise to fetch people from the Star Wars API", async () => {
    expect.assertions(1);
    return getPeoplePromise(url).then((data) => {
      expect(data.count).toEqual(82);
    });
  });
  it("should fetch people using async/await from the Star Wars API", async () => {
    expect.assertions(2);
    const data = await getPeople(url);
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(6);
  });
  it("getPeople returns count and result", async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        count: 82,
        results: [1, 2, 3, 4, 5, 6, 7],
      }),
    });

    expect.assertions(4);
    return await getPeoplePromise(url, mockFetch).then((data) => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(data.count).toBe(82);
      expect(mockFetch).toHaveBeenCalledWith(url);
      expect(data.results.length).toBeGreaterThan(6);
    });
  });
});
