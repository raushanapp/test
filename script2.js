const url = "https://swapi.dev/api/people";

const getPeoplePromise = async (url, fetchFn = fetch) => {
  return fetchFn(url)
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeople = async (url, fetchFn = fetch) => {
  try {
    const peoples = await fetchFn(url);
    const data = await peoples.json();
    return {
      count: data.count,
      results: data.results,
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getPeoplePromise,
  getPeople,
  url,
};
