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
  default: () => U5Bidu5D,
  load: () => load
});
var import_index_bac2f3ba = __toModule(require("../../../chunks/index-bac2f3ba.js"));
var import_store_56c5f052 = __toModule(require("../../../chunks/store-56c5f052.js"));
var import_ProgressBar_fae5f0ef = __toModule(require("../../../chunks/ProgressBar-fae5f0ef.js"));
var import_Cast_498cb0f9 = __toModule(require("../../../chunks/Cast-498cb0f9.js"));
var import_stores_bf708f99 = __toModule(require("../../../chunks/stores-bf708f99.js"));
var import_index_d650715d = __toModule(require("../../../chunks/index-d650715d.js"));
const IMAGE_API$1 = "https://www.themoviedb.org/t/p/original";
const Seasons = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let { tv_details } = $$props;
  let { tv_id } = $$props;
  if ($$props.tv_details === void 0 && $$bindings.tv_details && tv_details !== void 0)
    $$bindings.tv_details(tv_details);
  if ($$props.tv_id === void 0 && $$bindings.tv_id && tv_id !== void 0)
    $$bindings.tv_id(tv_id);
  return `<section id="${"Seasons"}"><div class="${"max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 pb-1 xl:rounded-2xl"}"><h4 class="${"pb-2"}">Season Information</h4>
		${(0, import_index_bac2f3ba.e)(tv_details.seasons, (episode) => {
    return `<div class="${"bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg"}"><a${(0, import_index_bac2f3ba.d)("href", `/seasons/${tv_id}/${episode.season_number}`, 0)} class="${"flex flex-col xl:flex-row text-skin-base xl:rounded-lg"}"><div class="${"flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-40 xl:h-60 xl:items-start"}"><img class="${"flex xl:w-40 xl: h-60 items-start"}"${(0, import_index_bac2f3ba.d)("src", episode.poster_path ? IMAGE_API$1 + episode.poster_path : "/default.jpg", 0)} alt="${"episode"}"></div>
					<div class="${"justify-self-center ml-2 block xl:justify-start"}"><h4>${(0, import_index_bac2f3ba.f)(episode.name)}</h4>
						<h6>Air Date: ${(0, import_index_bac2f3ba.f)(episode.air_date)}</h6>
						<h6>Overview:</h6>
						<h6 class="${"flex-1 pr-8 text-skin-muted mb-4"}">${(0, import_index_bac2f3ba.f)(episode.overview)}</h6>
					</div></a>
			</div>`;
  })}</div>

	
	</section>`;
});
const IMAGE_API = "https://image.tmdb.org/t/p/";
const TvMedia = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_video_site;
  let $$unsubscribe_trailer_key;
  let $show_id, $$unsubscribe_show_id;
  let $season_count, $$unsubscribe_season_count;
  let $show_name, $$unsubscribe_show_name;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_video_site = (0, import_index_bac2f3ba.b)(import_store_56c5f052.v, (value) => value);
  $$unsubscribe_trailer_key = (0, import_index_bac2f3ba.b)(import_store_56c5f052.b, (value) => value);
  $$unsubscribe_show_id = (0, import_index_bac2f3ba.b)(import_store_56c5f052.e, (value) => $show_id = value);
  $$unsubscribe_season_count = (0, import_index_bac2f3ba.b)(import_store_56c5f052.f, (value) => $season_count = value);
  $$unsubscribe_show_name = (0, import_index_bac2f3ba.b)(import_store_56c5f052.g, (value) => $show_name = value);
  $$unsubscribe_media_type = (0, import_index_bac2f3ba.b)(import_store_56c5f052.a, (value) => $media_type = value);
  let { tv_details } = $$props;
  let { trailer_details } = $$props;
  let { tv_id } = $$props;
  let { cast } = $$props;
  (0, import_index_bac2f3ba.h)(import_store_56c5f052.g, $show_name = tv_details.name, $show_name);
  (0, import_index_bac2f3ba.h)(import_store_56c5f052.f, $season_count = tv_details.number_of_seasons, $season_count);
  (0, import_index_bac2f3ba.h)(import_store_56c5f052.e, $show_id = tv_details.id, $show_id);
  let modal;
  window.scrollTo({ top: -1e3, behavior: "smooth" });
  if ($$props.tv_details === void 0 && $$bindings.tv_details && tv_details !== void 0)
    $$bindings.tv_details(tv_details);
  if ($$props.trailer_details === void 0 && $$bindings.trailer_details && trailer_details !== void 0)
    $$bindings.trailer_details(trailer_details);
  if ($$props.tv_id === void 0 && $$bindings.tv_id && tv_id !== void 0)
    $$bindings.tv_id(tv_id);
  if ($$props.cast === void 0 && $$bindings.cast && cast !== void 0)
    $$bindings.cast(cast);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${tv_details.id && trailer_details ? `<section id="${"media"}" class="${"text-skin-inverted md:mt-5 bg-no-repeat bg-right-top bg-contain md:bg-cover md:rounded-2xl"}" style="${"background-image: url(" + (0, import_index_bac2f3ba.f)(IMAGE_API) + "original/" + (0, import_index_bac2f3ba.f)(tv_details.backdrop_path) + ")"}"><div class="${"bg-gradient-to-r md:rounded-2xl"}" style="${"background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"}"><div class="${"grid max-w-7xl md:grid-cols-[20rem_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] px-10 py-8 mx-auto md:rounded-2xl"}"><div class="${"col-start-1 col-end-2 "}"><img class="${"h-96 w-64 md:h-120 md:w-80 overflow-hidden rounded-2xl mx-auto"}"${(0, import_index_bac2f3ba.d)("src", tv_details.poster_path ? IMAGE_API + "w500" + tv_details.poster_path : "/default.jpg", 0)} alt="${"movie poster"}"></div>
				<div class="${"md:col-start-2 md:col-end-5 flex flex-wrap content-start md:pl-10"}"><div class="${"mt-6 md:mt-0 w-full mb-6 flex flex-wrap"}"><h4 class="${"w-full md:text-4xl"}">${(0, import_index_bac2f3ba.f)(tv_details.name)}
							<span class="${"ml-1 text-lg md:text-4xl text-skin-inverted"}">${(0, import_index_bac2f3ba.f)(tv_details ? tv_details.first_air_date.substring(0, 4) : "")}</span></h4>
						${tv_details.vote_average ? `<div class="${"bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60"}">${(0, import_index_bac2f3ba.v)(import_ProgressBar_fae5f0ef.P, "ProgressBar").$$render($$result, { progress: tv_details.vote_average }, {}, {})}</div>` : ``}
						<div class="${"md:flex"}"><div class="${"pl-0"}">${(0, import_index_bac2f3ba.f)("first_air_date" in tv_details ? tv_details.first_air_date : "No Date Available")}
								<span class="${"hidden md:px-2 md:inline"}">\u2022</span></div>
							<div>${(0, import_index_bac2f3ba.e)(tv_details.genres, ({ id, name }, i) => {
      return `<a class="${"hover:text-skin-selected"}" href="${"/genre/" + (0, import_index_bac2f3ba.f)($media_type) + "/" + (0, import_index_bac2f3ba.f)(id)}">${(0, import_index_bac2f3ba.f)(name)}</a>
									${i !== tv_details.genres.length - 1 ? `<span class="${"mx-2"}">|</span>` : ``}`;
    })}</div></div></div>
					<div class="${"mb-1 w-full md:h-48 flex flex-wrap justify-center md:justify-start md:flex-nowrap md:overflow-y-hidden relative"}">${trailer_details.length > 0 ? `${(0, import_index_bac2f3ba.e)(trailer_details, (trailer) => {
      return `<div class="${"w-56 flex-shrink-0 pl-2 cursor-pointer hover:opacity-80"}"><button${(0, import_index_bac2f3ba.d)("title", trailer.name, 0)}><img${(0, import_index_bac2f3ba.d)("src", `https://img.youtube.com/vi/${trailer.key}/0.jpg`, 0)} alt="${"movie poster"}"></button>
								</div>`;
    })}
							` : `<div class="${"flex pl-5"}"><p class="${"flex justify-center ml-4"}">No Trailer Available</p></div>`}</div>
					<div class="${"w-full"}"><div class="${"text-lg italic opacity-70"}">${(0, import_index_bac2f3ba.f)(tv_details.tagline)}</div>
						<h4 class="${"my-2 w-full font-semibold"}">Overview</h4>
						<div class="${"overview-details"}">${(0, import_index_bac2f3ba.f)(tv_details.overview)}</div></div></div></div></div></section>

	${(0, import_index_bac2f3ba.v)(import_Cast_498cb0f9.C, "Cast").$$render($$result, { cast }, {}, {})}

	${(0, import_index_bac2f3ba.v)(import_Cast_498cb0f9.M, "Modal").$$render($$result, { this: modal }, {
      this: ($$value) => {
        modal = $$value;
        $$settled = false;
      }
    }, {})}

	${$media_type === "tv" ? `${(0, import_index_bac2f3ba.v)(Seasons, "Seasons").$$render($$result, { tv_details, tv_id }, {}, {})}` : ``}` : `${(0, import_index_bac2f3ba.v)(import_Cast_498cb0f9.S, "Spinner").$$render($$result, {}, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_video_site();
  $$unsubscribe_trailer_key();
  $$unsubscribe_show_id();
  $$unsubscribe_season_count();
  $$unsubscribe_show_name();
  $$unsubscribe_media_type();
  return $$rendered;
});
async function load({ fetch, params }) {
  import_store_56c5f052.a.set("tv");
  const res = await (await fetch("../api/getMovie", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "tv", id: params.id })
  })).json();
  const tv_details = await res.res;
  const trailer = await (await fetch("../api/postData", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      api_ref: "trailer",
      media: "tv",
      id: params.id
    })
  })).json();
  const trailer_details = trailer.res.results;
  const resp = await (await fetch("../../api/postData", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      api_ref: "cast",
      media: "tv",
      id: params.id
    })
  })).json();
  const cast = await resp.res.cast;
  return {
    props: { tv_details, trailer_details, cast }
  };
}
const U5Bidu5D = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_bac2f3ba.b)(import_stores_bf708f99.p, (value) => $page = value);
  let { tv_details } = $$props;
  let { trailer_details } = $$props;
  let { cast } = $$props;
  let tv_id = $page.params.id;
  if ($$props.tv_details === void 0 && $$bindings.tv_details && tv_details !== void 0)
    $$bindings.tv_details(tv_details);
  if ($$props.trailer_details === void 0 && $$bindings.trailer_details && trailer_details !== void 0)
    $$bindings.trailer_details(trailer_details);
  if ($$props.cast === void 0 && $$bindings.cast && cast !== void 0)
    $$bindings.cast(cast);
  $$unsubscribe_page();
  return `${(0, import_index_bac2f3ba.v)(TvMedia, "TvMedia").$$render($$result, { tv_details, trailer_details, cast, tv_id }, {}, {})}`;
});
