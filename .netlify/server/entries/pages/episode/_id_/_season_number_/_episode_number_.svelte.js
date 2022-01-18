var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => U5Bepisode_numberu5D,
  load: () => load
});
var import_index_bac2f3ba = __toModule(require("../../../../../chunks/index-bac2f3ba.js"));
const IMAGE_API = "https://image.tmdb.org/t/p/original";
const Episode = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let { episode_details } = $$props;
  if ($$props.episode_details === void 0 && $$bindings.episode_details && episode_details !== void 0)
    $$bindings.episode_details(episode_details);
  return `

<section id="${"episode"}"><div class="${"max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-0 pt-1 pb-1 xl:rounded-2xl"}">${episode_details.id ? `<h4 class="${"pl-4"}">Episode Information</h4>
			<div class="${"bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg"}"><div class="${"flex flex-col xl:flex-row text-skin-base xl:rounded-lg"}"><img class="${"xl:h-44 items-start"}"${(0, import_index_bac2f3ba.d)("src", episode_details.still_path ? IMAGE_API + episode_details.still_path : "/default.jpg", 0)} alt="${"episode"}"></div>

				<div class="${"ml-2 block"}"><h4>Season: ${(0, import_index_bac2f3ba.f)(episode_details.season_number)} Episode: ${(0, import_index_bac2f3ba.f)(episode_details.episode_number)}</h4>
					<h4>Episode Name: ${(0, import_index_bac2f3ba.f)(episode_details.name)}</h4>
					<h6>Air Date: ${(0, import_index_bac2f3ba.f)(episode_details.air_date)}</h6>
					<h6>Overview:</h6>
					<h6 class="${"flex-1 pr-8 text-skin-muted mb-4"}">${(0, import_index_bac2f3ba.f)(episode_details.overview)}</h6></div></div>

			${episode_details.guest_stars.length ? `<div><h3>Guest Stars</h3>
					<div class="${"text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${(0, import_index_bac2f3ba.e)(episode_details.guest_stars, (guest_star) => {
    return `<div class="${"w-40 h-72 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"}"><a class="${"rounded w-28"}"${(0, import_index_bac2f3ba.d)("href", `/person/${guest_star.id}`, 0)}><img class="${"flex xl:w-40 xl: h-60 items-start"}"${(0, import_index_bac2f3ba.d)("src", guest_star.profile_path ? IMAGE_API + guest_star.profile_path : "/default.jpg", 0)} alt="${"episode"}"></a>
								<p>Character ${(0, import_index_bac2f3ba.f)(guest_star.character)}</p>
								<p>Name ${(0, import_index_bac2f3ba.f)(guest_star.name)}</p>
							</div>`;
  })}</div></div>` : ``}

			${episode_details.crew.length ? `<div><h3>Crew</h3>
					<div class="${"text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${(0, import_index_bac2f3ba.e)(episode_details.crew, (crew_member) => {
    return `<div class="${"w-40 h-72 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"}"><a class="${"rounded w-28"}"${(0, import_index_bac2f3ba.d)("href", `/person/${crew_member.id}`, 0)}><img class="${"flex xl:w-40 xl: h-60 items-start"}"${(0, import_index_bac2f3ba.d)("src", crew_member.profile_path ? IMAGE_API + crew_member.profile_path : "/default.jpg", 0)} alt="${"episode"}"></a>
								<p>${(0, import_index_bac2f3ba.f)(crew_member.job)}</p>
								<p>${(0, import_index_bac2f3ba.f)(crew_member.name)}</p>
							</div>`;
  })}</div></div>` : ``}` : ``}</div></section>`;
});
async function load({ fetch, params }) {
  const res = await (await fetch("../../../api/getEpisode", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      id: params.id,
      season_number: params.season_number,
      episode_number: params.episode_number
    })
  })).json();
  const episode_details = await res.res;
  return { props: { episode_details } };
}
const U5Bepisode_numberu5D = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let { episode_details } = $$props;
  if ($$props.episode_details === void 0 && $$bindings.episode_details && episode_details !== void 0)
    $$bindings.episode_details(episode_details);
  return `${(0, import_index_bac2f3ba.v)(Episode, "Episode").$$render($$result, { episode_details }, {}, {})}`;
});
