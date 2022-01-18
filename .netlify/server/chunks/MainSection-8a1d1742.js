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
  M: () => MainSection
});
var import_index_bac2f3ba = __toModule(require("./index-bac2f3ba.js"));
var import_store_56c5f052 = __toModule(require("./store-56c5f052.js"));
var import_ProgressBar_fae5f0ef = __toModule(require("./ProgressBar-fae5f0ef.js"));
const IMAGE_API$2 = "https://image.tmdb.org/t/p/w300";
const MovieCard = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_media_type = (0, import_index_bac2f3ba.b)(import_store_56c5f052.a, (value) => $media_type = value);
  let { datum } = $$props;
  if ($$props.datum === void 0 && $$bindings.datum && datum !== void 0)
    $$bindings.datum(datum);
  $$unsubscribe_media_type();
  return `<section id="${"movie-card"}" class="${"group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg"}"><div class="${"relative preserve-3d w-full duration-700 group-hover:rotate-y-180"}"><div class="${"backface-hidden top-0 right-0 text-skin-base bg-skin-bg xl:rounded-lg"}"><img class="${"oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-muted "}"${(0, import_index_bac2f3ba.d)("src", datum.poster_path ? IMAGE_API$2 + datum.poster_path : "/default.jpg", 0)}${(0, import_index_bac2f3ba.d)("alt", datum.title, 0)}>
			<div class="${"p-2 xl:ml-4"}"><h6 class="${"text-sm xl:text-lg text-skin-base w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis"}">${(0, import_index_bac2f3ba.f)(datum.title)}</h6>
				<h6 class="${"xl:text-lg font-bold"}">${(0, import_index_bac2f3ba.f)(datum.release_date ? datum.release_date.substring(0, 4) : "-")}</h6></div>
			<div class="${"transform scale-44 origin-top-left absolute left-1 top-56 xl:top-80"}">${(0, import_index_bac2f3ba.v)(import_ProgressBar_fae5f0ef.P, "ProgressBar").$$render($$result, { progress: datum.vote_average }, {}, {})}</div></div>
		<a class="${"w-full backface-hidden text-skin-base top-0 right-0 bg-skin-bg rounded-lg absolute bottom-0 text-decoration-none rotate-y-180 p-2 h-full ease-in-out movie-back text-sm overflow-auto duration-300 z-10"}"${(0, import_index_bac2f3ba.d)("href", `/${$media_type}/${datum.id}`, 0)}><h6 class="${"mt-1 xl:text-xl uppercase text-skin-base bg-secondary rounded"}">Overview</h6>
			<p class="${"md:text-base mt-1"}">${(0, import_index_bac2f3ba.f)(datum.overview)}</p></a></div></section>`;
});
const Skeleton = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_bac2f3ba.e)(Array(20), (_) => {
    return `<section id="${"movie-card"}" class="${"w-44 xl:h-108 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg"}"><div class="${"top-0 right-0 text-textDark bg-skin-bg xl:rounded-lg"}"><div class="${"w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg bg-skin-muted"}"></div>
			<div class="${"py-4 xl:ml-6 h-18 w-44 xl:w-60"}"><div class="${"w-28 xl:w-40 h-5 bg-skin-muted rounded"}"></div>
				<div class="${"mt-2 w-20 xl:w-26 h-5 bg-skin-muted rounded"}"></div>
			</div></div>
	</section>`;
  })}`;
});
const MovieList = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  $$unsubscribe_data = (0, import_index_bac2f3ba.b)(import_store_56c5f052.d, (value) => $data = value);
  let MovieData = $data;
  $$unsubscribe_data();
  return `<section id="${"movie-list"}" class="${"bg-skin-tertiary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl"}">${$data ? `${(0, import_index_bac2f3ba.e)(MovieData, (datum) => {
    return `${(0, import_index_bac2f3ba.v)(MovieCard, "MovieCard").$$render($$result, { datum }, {}, {})}`;
  })}` : `${(0, import_index_bac2f3ba.v)(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`}</section>`;
});
const IMAGE_API$1 = "https://image.tmdb.org/t/p/w300";
const TvCard = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_media_type = (0, import_index_bac2f3ba.b)(import_store_56c5f052.a, (value) => $media_type = value);
  let { datum } = $$props;
  if ($$props.datum === void 0 && $$bindings.datum && datum !== void 0)
    $$bindings.datum(datum);
  $$unsubscribe_media_type();
  return `<section id="${"tv-card"}" class="${"group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg"}"><div class="${"relative preserve-3d w-full duration-700 group-hover:rotate-y-180"}"><div class="${"backface-hidden top-0 right-0 text-skin-base bg-skin-bg xl:rounded-lg"}"><img class="${"oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-muted "}"${(0, import_index_bac2f3ba.d)("src", datum.poster_path ? IMAGE_API$1 + datum.poster_path : "/default.jpg", 0)}${(0, import_index_bac2f3ba.d)("alt", datum.name, 0)}>
			<div class="${"p-2 xl:ml-4"}"><h6 class="${"text-sm xl:text-lg text-skin-base w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis"}">${(0, import_index_bac2f3ba.f)(datum.name ? datum.name : " ")}</h6>
				<h6 class="${"xl:text-lg font-bold"}">${(0, import_index_bac2f3ba.f)(datum.first_air_date ? datum.first_air_date.substring(0, 4) : "-")}</h6></div>
			<div class="${"transform scale-44 origin-top-left absolute left-1 top-56 xl:top-80"}">${(0, import_index_bac2f3ba.v)(import_ProgressBar_fae5f0ef.P, "ProgressBar").$$render($$result, { progress: datum.vote_average }, {}, {})}</div></div>
		<a class="${"w-full backface-hidden text-skin-base top-0 right-0 bg-skin-bg rounded-lg absolute bottom-0 text-decoration-none rotate-y-180 p-2 h-full ease-in-out movie-back text-sm overflow-auto duration-300 z-10"}"${(0, import_index_bac2f3ba.d)("href", `/${$media_type}/${datum.id}`, 0)}><h6 class="${"mt-1 xl:text-xl uppercase text-skin-base bg-secondary rounded"}">Overview</h6>
			<p class="${"md:text-base mt-1"}">${(0, import_index_bac2f3ba.f)(datum.overview)}</p></a></div></section>`;
});
const TvList = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  $$unsubscribe_data = (0, import_index_bac2f3ba.b)(import_store_56c5f052.d, (value) => $data = value);
  let TvData = $data;
  $$unsubscribe_data();
  return `<section id="${"movie-list"}" class="${"bg-skin-tertiary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl"}">${$data ? `${(0, import_index_bac2f3ba.e)(TvData, (datum) => {
    return `${(0, import_index_bac2f3ba.v)(TvCard, "TvCard").$$render($$result, { datum }, {}, {})}`;
  })}` : `${(0, import_index_bac2f3ba.v)(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`}</section>`;
});
const IMAGE_API = "https://image.tmdb.org/t/p/w500";
const PersonCard = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let { datum } = $$props;
  if ($$props.datum === void 0 && $$bindings.datum && datum !== void 0)
    $$bindings.datum(datum);
  return `<section id="${"person-card"}" class="${"w-44 xl:h-108 xl:w-60 my-0.5 xl:my-2 bg-skin-bg xl:rounded-lg"}"><a${(0, import_index_bac2f3ba.d)("href", `/person/${datum.id}`, 0)} class="${"top-0 right-0 text-skin-base xl:rounded-lg"}"><img class="${"h-64 oject-cover w-44 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-base"}"${(0, import_index_bac2f3ba.d)("src", datum.profile_path === null ? "/person.svg" : IMAGE_API + datum.profile_path, 0)}${(0, import_index_bac2f3ba.d)("alt", datum.name, 0)}>
		<div class="${"p-2 h-18 w-44 xl:w-60 bg-skin-bg"}"><h6 class="${"w-40 overflow-hidden text-sm xl:text-lg text-textDark xl:w-52 whitespace-nowrap overflow-ellipsis"}">${(0, import_index_bac2f3ba.f)(datum.name)}</h6></div></a></section>`;
});
const PersonList = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  $$unsubscribe_data = (0, import_index_bac2f3ba.b)(import_store_56c5f052.d, (value) => $data = value);
  let PersonData = $data;
  $$unsubscribe_data();
  return `<section id="${"person-list"}" class="${"bg-skin-tertiary flex flex-wrap justify-around max-w-7xl xl:mt-2 mx-auto xl:rounded-2xl"}">${$data ? `${(0, import_index_bac2f3ba.e)(PersonData, (datum) => {
    return `${(0, import_index_bac2f3ba.v)(PersonCard, "PersonCard").$$render($$result, { datum }, {}, {})}`;
  })}` : `${(0, import_index_bac2f3ba.v)(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`}</section>`;
});
const InfiniteScroll = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_bac2f3ba.j)();
  let component;
  (0, import_index_bac2f3ba.o)(() => {
  });
  return `<div id="${"svelte-infinite-scroll"}" class="${"w-0"}"${(0, import_index_bac2f3ba.d)("this", component, 0)}></div>`;
});
const MainSection = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let $current_page, $$unsubscribe_current_page;
  let $$unsubscribe_data;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_current_page = (0, import_index_bac2f3ba.b)(import_store_56c5f052.c, (value) => $current_page = value);
  $$unsubscribe_data = (0, import_index_bac2f3ba.b)(import_store_56c5f052.d, (value) => value);
  $$unsubscribe_media_type = (0, import_index_bac2f3ba.b)(import_store_56c5f052.a, (value) => $media_type = value);
  let { total_pages = 1 } = $$props;
  let { genres = void 0 } = $$props;
  let { searching = void 0 } = $$props;
  if ($$props.total_pages === void 0 && $$bindings.total_pages && total_pages !== void 0)
    $$bindings.total_pages(total_pages);
  if ($$props.genres === void 0 && $$bindings.genres && genres !== void 0)
    $$bindings.genres(genres);
  if ($$props.searching === void 0 && $$bindings.searching && searching !== void 0)
    $$bindings.searching(searching);
  $$unsubscribe_current_page();
  $$unsubscribe_data();
  $$unsubscribe_media_type();
  return `<section id="${"main"}" class="${"h-full"}">

	${$media_type === "person" ? `${(0, import_index_bac2f3ba.v)(PersonList, "PersonList").$$render($$result, {}, {}, {})}` : `${$media_type === "movie" ? `${(0, import_index_bac2f3ba.v)(MovieList, "MovieList").$$render($$result, {}, {}, {})}` : `${$media_type === "tv" ? `${(0, import_index_bac2f3ba.v)(TvList, "TvList").$$render($$result, {}, {}, {})}` : ``}`}`}

	${$current_page < total_pages ? `${(0, import_index_bac2f3ba.v)(InfiniteScroll, "InfiniteScroll").$$render($$result, {}, {}, {})}` : ``}</section>`;
});
