var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  get: () => get
});
const api = "61e588d14c9ac42a437e560cc3d65659";
const GENRES_MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language-en-GB`;
const get = async () => {
  try {
    const response = await fetch(GENRES_MOVIE_API);
    const response_json = await response.json();
    const movie_genres = response_json.genres;
    return {
      body: JSON.stringify({ movie_genres })
    };
  } catch (e) {
    console.log("error", e);
  }
};
