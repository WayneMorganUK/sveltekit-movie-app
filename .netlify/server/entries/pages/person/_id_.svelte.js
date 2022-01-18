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
var import_index_d650715d = __toModule(require("../../../chunks/index-d650715d.js"));
const IMAGE_API$1 = "https://image.tmdb.org/t/p/w300";
function isMovie(x) {
  return x.media_type === "movie";
}
function isTv(x) {
  return x.media_type === "tv";
}
const KnownFor = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let { knownFor } = $$props;
  let films;
  let tv;
  films = knownFor.filter(isMovie);
  tv = knownFor.filter(isTv);
  films.sort((a, b) => a.release_date > b.release_date ? -1 : 1);
  tv.sort((a, b) => a.first_air_date > b.first_air_date ? -1 : 1);
  if ($$props.knownFor === void 0 && $$bindings.knownFor && knownFor !== void 0)
    $$bindings.knownFor(knownFor);
  return `<section id="${"known-for"}" class="${"grid mx-auto"}">${films ? `<h3 class="${"flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold"}">Movies
		</h3>
		<div class="${"text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${(0, import_index_bac2f3ba.e)(films, (movie) => {
    return `<div class="${"w-28 h-56 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"}"><a class="${"rounded w-28"}"${(0, import_index_bac2f3ba.d)("href", `/movie/${movie.id}`, 0)}><img class="${"object-cover w-28 h-44 rounded-t"}"${(0, import_index_bac2f3ba.d)("src", movie.poster_path ? IMAGE_API$1 + movie.poster_path : "/default.jpg", 0)}${(0, import_index_bac2f3ba.d)("alt", movie.title, 0)}>
						<div class="${"w-28 h-12 p-0.5"}"><p class="${"text-xs text-center flex justify-center items-center line-clamp-2"}">${(0, import_index_bac2f3ba.f)(movie.title)}</p>
							<p class="${"text-xs text-center flex justify-center items-center"}">${(0, import_index_bac2f3ba.f)(movie.release_date ? movie.release_date.substring(0, 4) : "")}</p>
						</div></a>
				</div>`;
  })}</div>` : ``}
	${tv ? `<h3 class="${"flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold"}">TV
		</h3>
		<div class="${"flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${(0, import_index_bac2f3ba.e)(tv, (show) => {
    return `<div class="${"w-28 h-56 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"}"><a class="${"rounded w-28"}"${(0, import_index_bac2f3ba.d)("href", `/tv/${show.id}`, 0)}><img class="${"object-cover w-28 h-44 rounded-t"}"${(0, import_index_bac2f3ba.d)("src", show.poster_path ? IMAGE_API$1 + show.poster_path : "/default.jpg", 0)}${(0, import_index_bac2f3ba.d)("alt", show.name, 0)}>
						<div class="${"w-28 h-12 p-0.5"}"><p class="${"text-xs text-center flex justify-center items-center line-clamp-2"}">${(0, import_index_bac2f3ba.f)(show.name)}</p>
							<p class="${"text-xs text-center flex justify-center items-center "}">${(0, import_index_bac2f3ba.f)(show.first_air_date ? show.first_air_date.substring(0, 4) : "")}</p>
						</div></a>
				</div>`;
  })}</div>` : ``}</section>`;
});
const IMAGE_API = "https://image.tmdb.org/t/p/w500/";
const Person = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let { person } = $$props;
  let { knownFor } = $$props;
  if ($$props.person === void 0 && $$bindings.person && person !== void 0)
    $$bindings.person(person);
  if ($$props.knownFor === void 0 && $$bindings.knownFor && knownFor !== void 0)
    $$bindings.knownFor(knownFor);
  return `<section id="${"person"}" class="${"xl:rounded-2xl mx-auto max-w-7xl xl:pb-20 xl:mt-5"}"><div class="${"grid xl:grid-cols-5 xl:grid-rows-auto xl:auto-rows-fr"}"><div class="${"xl:rounded-2xl bg-skin-secondary w-full xl:p-2 xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-3 mx-auto"}">${person.profile_path ? `<img class="${"mt-4 xl:mt-0 xl:pt-0 w-64 h-96 rounded-2xl mx-auto"}"${(0, import_index_bac2f3ba.d)("src", IMAGE_API + person.profile_path, 0)} alt="${"profile"}">` : `<img class="${"mt-4 xl:pt-0 flex justify-end w-64 h-96 rounded-2xl mx-auto"}" src="${"/person.svg"}" alt="${"profile"}">`}
			<h4 class="${"mt-2 w-full text-skin-base text-center mx-auto xl:hidden"}">${(0, import_index_bac2f3ba.f)(person.name)}</h4>
			<div class="${"text-skin-base pl-8 w-full xl:p-3"}"><h4 class="${"xl:text-2xl mt-2"}">Personal Info</h4>
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Known For</h6>
				<p class="${"text-skin-muted xl:text-base"}">${(0, import_index_bac2f3ba.f)(person.known_for_department)}</p>
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Gender</h6>
				${person.gender === 2 ? `<p class="${"text-skin-muted xl:text-base"}">Male</p>` : `<p class="${"text-skin-muted xl:text-base"}">Female</p>`}
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Birthdate</h6>
				${person.birthday ? `<p class="${"text-skin-muted xl:text-base"}">${(0, import_index_bac2f3ba.f)(person.birthday)}</p>` : `<p class="${"text-skin-muted xl:text-base"}">Unknown</p>`}
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Place of Birth</h6>
				${person.place_of_birth ? `<p class="${"text-skin-muted xl:text-base"}">${(0, import_index_bac2f3ba.f)(person.place_of_birth)}</p>` : `<p class="${"text-skin-muted xl:text-base"}">Unknown</p>`}
				${person.also_known_as && person.also_known_as.length ? `<h4 class="${"mt-4 mb-1"}">Also Known As</h4>
					${(0, import_index_bac2f3ba.e)(person.also_known_as, (alias) => {
    return `<p class="${"text-skin-muted xl:text-base"}">${(0, import_index_bac2f3ba.f)(alias)}</p>`;
  })}` : ``}</div></div>

		<div class="${"bg-skin-tertiary xl:rounded-2xl text-skin-base xl:col-start-2 xl:col-end-6 xl:row-start-1 xl:row-end-2 xl:ml-5 xl:mb-5"}"><div class="${"mb-2 xl:mb-4 relative bg-primary xl:ml-5 p-3.5 rounded-2xl"}"><h4 class="${"xl:text-2xl hidden xl:inline-block"}">${(0, import_index_bac2f3ba.f)(person.name)}</h4>
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Biography</h6>
				<p class="${"text-skin-muted xl:text-base"}">${(0, import_index_bac2f3ba.f)(person.biography)}</p></div></div>
		<div class="${"bg-skin-tertiary rounded-2xl text-skin-base xl:col-start-2 xl:col-end-6 xl:row-start-2 xl:row-end-3 xl:bg-primary xl:ml-5 xl:p-3.5"}"><div class="${"pt-8"}"><h4 class="${"xl:text-2xl pl-3.5 xl:pl-0"}">Known For</h4>
				${(0, import_index_bac2f3ba.v)(KnownFor, "KnownFor").$$render($$result, { knownFor }, {}, {})}</div></div></div></section>`;
});
async function load({ fetch, params }) {
  const res = await (await fetch("../api/getMovie", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "person", id: params.id })
  })).json();
  const person = await res.res;
  const resp = await (await fetch("../api/getKnownFor", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ person: params.id })
  })).json();
  const data = await resp;
  const knownFor = data.res.cast;
  return { props: { person, knownFor } };
}
const U5Bidu5D = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_media_type = (0, import_index_bac2f3ba.b)(import_store_56c5f052.a, (value) => $media_type = value);
  (0, import_index_bac2f3ba.h)(import_store_56c5f052.a, $media_type = "person", $media_type);
  let { person } = $$props;
  let { knownFor } = $$props;
  if ($$props.person === void 0 && $$bindings.person && person !== void 0)
    $$bindings.person(person);
  if ($$props.knownFor === void 0 && $$bindings.knownFor && knownFor !== void 0)
    $$bindings.knownFor(knownFor);
  $$unsubscribe_media_type();
  return `${(0, import_index_bac2f3ba.v)(Person, "Person").$$render($$result, { person, knownFor }, {}, {})}`;
});
