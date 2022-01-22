const api = "61e588d14c9ac42a437e560cc3d65659";
const GENRES_MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language-en-GB`;
async function get() {
  const response = await fetch(GENRES_MOVIE_API);
  const response_json = await response.json();
  const movie_genres = response_json.genres;
  if (response.ok) {
    return {
      status: 200,
      body: JSON.stringify({ movie_genres })
    };
  }
  return {
    status: 404
  };
}
export { get };
