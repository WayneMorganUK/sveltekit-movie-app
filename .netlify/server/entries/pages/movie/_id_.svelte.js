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
var import_index_d650715d = __toModule(require("../../../chunks/index-d650715d.js"));
const IMAGE_API = "https://image.tmdb.org/t/p/";
const MovieMedia = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_video_site;
  let $$unsubscribe_trailer_key;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_video_site = (0, import_index_bac2f3ba.b)(import_store_56c5f052.v, (value) => value);
  $$unsubscribe_trailer_key = (0, import_index_bac2f3ba.b)(import_store_56c5f052.b, (value) => value);
  $$unsubscribe_media_type = (0, import_index_bac2f3ba.b)(import_store_56c5f052.a, (value) => $media_type = value);
  let { movie_details } = $$props;
  let { trailer_details } = $$props;
  let { cast } = $$props;
  let modal;
  window.scrollTo({ top: -1e3, behavior: "smooth" });
  if ($$props.movie_details === void 0 && $$bindings.movie_details && movie_details !== void 0)
    $$bindings.movie_details(movie_details);
  if ($$props.trailer_details === void 0 && $$bindings.trailer_details && trailer_details !== void 0)
    $$bindings.trailer_details(trailer_details);
  if ($$props.cast === void 0 && $$bindings.cast && cast !== void 0)
    $$bindings.cast(cast);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${movie_details.id && trailer_details ? `<section id="${"media"}" class="${"text-skin-inverted xl:mt-5 bg-no-repeat bg-right-top bg-contain md:bg-cover md:rounded-2xl"}" style="${"background-image: url(" + (0, import_index_bac2f3ba.f)(IMAGE_API) + "original/" + (0, import_index_bac2f3ba.f)(movie_details.backdrop_path) + ")"}"><div class="${"bg-gradient-to-r md:rounded-2xl"}" style="${"background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"}"><div class="${"grid max-w-7xl md:grid-cols-[20rem_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] px-10 py-8 mx-auto md:rounded-2xl"}"><div class="${"col-start-1 col-end-2 "}"><img class="${"h-96 w-64 md:h-120 md:w-80 overflow-hidden rounded-2xl mx-auto"}"${(0, import_index_bac2f3ba.d)("src", movie_details.poster_path ? IMAGE_API + "w500" + movie_details.poster_path : "/default.jpg", 0)} alt="${"movie poster"}"></div>
				<div class="${"md:col-start-2 md:col-end-5 flex flex-wrap content-start md:pl-10"}"><div class="${"mt-6 md:mt-0 w-full flex flex-wrap"}"><h4 class="${"md:flex w-full md:text-4xl"}">${(0, import_index_bac2f3ba.f)(movie_details.title)}
							<span class="${"ml-1 text-lg md:text-4xl text-skin-inverted"}">${(0, import_index_bac2f3ba.f)(movie_details.release_date ? movie_details.release_date.substring(0, 4) : "")}</span></h4>
						${movie_details.vote_average ? `<div class="${"bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60"}">${(0, import_index_bac2f3ba.v)(import_ProgressBar_fae5f0ef.P, "ProgressBar").$$render($$result, { progress: movie_details.vote_average }, {}, {})}</div>` : ``}

						<div class="${"md:flex"}"><div class="${"pl-0"}">${(0, import_index_bac2f3ba.f)(movie_details.release_date ? movie_details.release_date : "No Date Available")}
								<span class="${"hidden md:px-2 md:inline"}">\u2022</span></div>
							<div>${(0, import_index_bac2f3ba.e)(movie_details.genres, ({ id, name }, i) => {
      return `<a class="${"hover:text-skin-selected"}" href="${"/genre/" + (0, import_index_bac2f3ba.f)($media_type) + "/" + (0, import_index_bac2f3ba.f)(id)}">${(0, import_index_bac2f3ba.f)(name)}</a>
									${i !== movie_details.genres.length - 1 ? `<span class="${"mx-2"}">|</span>` : ``}`;
    })}</div>
							${"runtime" in movie_details ? `<div class="${"duration"}"><span class="${"hidden md:px-2 md:inline"}">\u2022</span>${(0, import_index_bac2f3ba.f)((movie_details.runtime - movie_details.runtime % 60) / 60)}h ${(0, import_index_bac2f3ba.f)(movie_details.runtime % 60)}m
								</div>` : ``}</div></div>
					<div class="${"mb-1 w-full flex flex-wrap justify-center md:justify-start md:flex-nowrap md:overflow-y-hidden relative"}">${trailer_details.length > 0 ? `${(0, import_index_bac2f3ba.e)(trailer_details, (trailer) => {
      return `<div class="${"w-56 flex-shrink-0 pl-2 cursor-pointer hover:opacity-80"}"${(0, import_index_bac2f3ba.d)("title", trailer.name, 0)}><img${(0, import_index_bac2f3ba.d)("src", `https://img.youtube.com/vi/${trailer.key}/0.jpg`, 0)}${(0, import_index_bac2f3ba.d)("alt", trailer.name, 0)}>
								</div>`;
    })}
							` : `<div class="${"flex pl-5"}"><p class="${"flex justify-center ml-4"}">No Trailer Available</p></div>`}</div>
					<div class="${"w-full"}"><div class="${"text-lg italic opacity-70"}">${(0, import_index_bac2f3ba.f)(movie_details.tagline)}</div>
						<h4 class="${"my-2 w-full font-semibold"}">Overview</h4>
						<div class="${"overview-details"}">${(0, import_index_bac2f3ba.f)(movie_details.overview)}</div></div></div></div></div></section>

	${(0, import_index_bac2f3ba.v)(import_Cast_498cb0f9.C, "Cast").$$render($$result, { cast }, {}, {})}
	${(0, import_index_bac2f3ba.v)(import_Cast_498cb0f9.M, "Modal").$$render($$result, { this: modal }, {
      this: ($$value) => {
        modal = $$value;
        $$settled = false;
      }
    }, {})}` : `${(0, import_index_bac2f3ba.v)(import_Cast_498cb0f9.S, "Spinner").$$render($$result, {}, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_video_site();
  $$unsubscribe_trailer_key();
  $$unsubscribe_media_type();
  return $$rendered;
});
async function load({ fetch, params }) {
  import_store_56c5f052.a.set("movie");
  const res = await (await fetch("../api/getMovie", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "movie", id: params.id })
  })).json();
  const movie_details = await res.res;
  const trailer = await (await fetch("../api/getTrailer", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "movie", id: params.id })
  })).json();
  const trailer_details = trailer.res.results;
  const resp = await (await fetch("../../api/postData", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      api_ref: "cast",
      id: params.id,
      media: "movie"
    })
  })).json();
  const cast = await resp.res.cast;
  return {
    props: { movie_details, trailer_details, cast }
  };
}
const U5Bidu5D = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let { movie_details } = $$props;
  let { trailer_details } = $$props;
  let { cast } = $$props;
  if ($$props.movie_details === void 0 && $$bindings.movie_details && movie_details !== void 0)
    $$bindings.movie_details(movie_details);
  if ($$props.trailer_details === void 0 && $$bindings.trailer_details && trailer_details !== void 0)
    $$bindings.trailer_details(trailer_details);
  if ($$props.cast === void 0 && $$bindings.cast && cast !== void 0)
    $$bindings.cast(cast);
  return `${(0, import_index_bac2f3ba.v)(MovieMedia, "MovieMedia").$$render($$result, { movie_details, trailer_details, cast }, {}, {})}`;
});
