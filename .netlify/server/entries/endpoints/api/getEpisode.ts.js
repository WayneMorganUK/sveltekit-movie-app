var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  post: () => post
});
const api = "61e588d14c9ac42a437e560cc3d65659";
const post = async (request) => {
  try {
    const api_url = `https://api.themoviedb.org/3/tv/${request.body["id"]}/season/${request.body["season_number"]}/episode/${request.body["episode_number"]}?api_key=${api}&language=en-US`;
    const res_api = await fetch(api_url);
    const res = await res_api.json();
    return {
      body: JSON.stringify({ res })
    };
  } catch (e) {
    console.log("error", e);
  }
};
