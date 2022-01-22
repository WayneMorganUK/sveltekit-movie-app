const api = "61e588d14c9ac42a437e560cc3d65659";
const TV_NETWORKS_API = `https://api.themoviedb.org/3/watch/providers/tv?api_key=${api}&language=en-US`;
async function get() {
  const response = await fetch(TV_NETWORKS_API);
  const response_json = await response.json();
  const tv_network = response_json.results;
  if (response.ok) {
    return {
      status: 200,
      body: JSON.stringify({ tv_network })
    };
  }
  return {
    status: 404
  };
}
export { get };
