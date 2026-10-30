const googleDataBase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavourites.com",
  "myfavouritescats.com",
  "myfavouritescats2.com",
];

const googleSearch = (serachInput, db) => {
  const matches = db.filter((website) => website.includes(serachInput));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch("cat", googleDataBase));

module.exports = googleSearch;
