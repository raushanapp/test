const { getPoeplePromise, getPeople, url } = require("./script2");

describe("Star Wars API", () => {
  it("should promise to fetch people from the Star Wars API", () => {
    expect.assertions(1);
    return getPoeplePromise(url).then((data) => {
      expect(data.count).toEqual(82);
    });
  });
  it("should fetch people using async/await from the Star Wars API", async () => {
    expect.assertions(2);
    const data = await getPeople(url);
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(6);
  });
});
