const api = "61e588d14c9ac42a437e560cc3d65659";
async function post({ request }) {
  const body = await request.json();
  const api_url = `https://api.themoviedb.org/3/tv/${body["id"]}/season/${body["season_number"]}/episode/${body["episode_number"]}?api_key=${api}&language=en-US`;
  const res_api = await fetch(api_url);
  const res = await res_api.json();
  if (res_api.ok) {
    return {
      status: 200,
      body: JSON.stringify({ res })
    };
  }
  return {
    status: 404
  };
}
export { post };
