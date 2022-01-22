const api = "61e588d14c9ac42a437e560cc3d65659";
const GENRES_TV_API = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api}&language-en-GB`;
async function get() {
  const response = await fetch(GENRES_TV_API);
  const response_json = await response.json();
  const tv_genres = response_json.genres;
  if (response.ok) {
    return {
      status: 200,
      body: JSON.stringify({ tv_genres })
    };
  }
  return {
    status: 404
  };
}
export { get };
