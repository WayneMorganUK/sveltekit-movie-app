const api = "61e588d14c9ac42a437e560cc3d65659";
async function post({ request }) {
  const body = await request.json();
  const api_url = `https://api.themoviedb.org/3/trending/${body["media"]}/week?api_key=${api}&language=en-GB&page=${body["page"]}`;
  const res_mov = await fetch(api_url);
  const res = await res_mov.json();
  if (res_mov.ok) {
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
