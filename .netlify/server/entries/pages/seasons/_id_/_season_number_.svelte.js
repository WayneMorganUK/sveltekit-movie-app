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
  default: () => U5Bseason_numberu5D,
  load: () => load
});
var import_index_bac2f3ba = __toModule(require("../../../../chunks/index-bac2f3ba.js"));
var import_stores_bf708f99 = __toModule(require("../../../../chunks/stores-bf708f99.js"));
const IMAGE_API = "https://image.tmdb.org/t/p/w500/";
const Season = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let { season_details } = $$props;
  let { tv_id } = $$props;
  if ($$props.season_details === void 0 && $$bindings.season_details && season_details !== void 0)
    $$bindings.season_details(season_details);
  if ($$props.tv_id === void 0 && $$bindings.tv_id && tv_id !== void 0)
    $$bindings.tv_id(tv_id);
  return `

<section id="${"season"}"><div class="${"max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 pb-1 xl:rounded-2xl"}">${season_details.id ? `<h4 class="${"pb-2"}">Season Information</h4>
			${(0, import_index_bac2f3ba.e)(season_details.episodes, (episode) => {
    return `<div class="${"bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg"}"><a${(0, import_index_bac2f3ba.d)("href", `/episode/${tv_id}/${season_details.season_number}/${episode.episode_number}`, 0)} class="${"flex flex-col xl:flex-row text-skin-base xl:rounded-lg"}"><div class="${"flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-80 xl:h-44 xl:items-start"}"><img class="${"flex xl:w-80 xl:h-44 items-start"}"${(0, import_index_bac2f3ba.d)("src", episode.still_path ? IMAGE_API + episode.still_path : "/default.jpg", 0)} alt="${"season"}"></div>
						<div class="${"ml-2 block"}"><h4>${(0, import_index_bac2f3ba.f)(episode.name)}</h4>
							<h6>Air Date: ${(0, import_index_bac2f3ba.f)(episode.air_date)}</h6>
							<h6>Overview:</h6>
							<h6 class="${"flex-1 pr-8 text-skin-muted mb-4"}">${(0, import_index_bac2f3ba.f)(episode.overview)}</h6>
						</div></a>
				</div>`;
  })}` : ``}</div>
	</section>`;
});
async function load({ fetch, params }) {
  const res = await (await fetch("../../api/getSeason", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      id: params.id,
      season_number: params.season_number
    })
  })).json();
  const season_details = await res.res;
  return { props: { season_details } };
}
const U5Bseason_numberu5D = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_bac2f3ba.b)(import_stores_bf708f99.p, (value) => $page = value);
  let { season_details } = $$props;
  let tv_id = $page.params.id;
  if ($$props.season_details === void 0 && $$bindings.season_details && season_details !== void 0)
    $$bindings.season_details(season_details);
  $$unsubscribe_page();
  return `${(0, import_index_bac2f3ba.v)(Season, "Season").$$render($$result, { season_details, tv_id }, {}, {})}`;
});
