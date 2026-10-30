const url = "https://swapi.dev/api/people";

const getPoeplePromise = async (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeople = async (url) => {
  try {
    const peoples = await fetch(url);
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
  getPoeplePromise,
  getPeople,
  url,
};
