const getPoeple = async () => {
  return await fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

let people = await getPoeple();
console.log(people);
