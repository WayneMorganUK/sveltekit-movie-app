import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_attribute, e as each, f as escape } from "../../chunks/index-bac2f3ba.js";
import { m as movie_genres, s as selected, a as media_type, t as tv_genres } from "../../chunks/store-56c5f052.js";
import { t as theme, T as Theme } from "../../chunks/theme-55fe6b69.js";
import "../../chunks/index-d650715d.js";
import "../../chunks/stores-bf708f99.js";
var app = "";
const ToggleDarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return `<button class="${"text-skin-inverted"}"><div class="${"flex justify-center w-8 h-8 mr-2 align-middle border-2 rounded-full border-skin-border focus:outline-none"}" aria-label="${"Toggle Light and Dark mode"}">${$theme === Theme.Dark ? `<span><i class="${"text-yellow-400 fa fa-sun-o"}" id="${"toggle-switch"}"></i></span>` : `<span><i class="${"text-gray-300 fa fa-moon-o"}" id="${"toggle-switch"}"></i></span>`}</div></button>`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm;
  return `<section id="${"search"}" class="${"flex flex-row"}">${validate_component(ToggleDarkMode, "ToggleDarkMode").$$render($$result, {}, {}, {})}
	<form class="${"flex justify-end items-center pr-0.5"}" label="${"search form"}"><input label="${"search"}" class="${"bg-transparent w-24 lg:w-48 h-8 rounded-full text-lg px-2 placeholder-text-skin-base::placeholder border-2 border-skin-border"}" type="${"text"}" placeholder="${"Search..."}"${add_attribute("value", searchTerm, 0)}></form></section>`;
});
const Genre = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $movie_genres, $$unsubscribe_movie_genres;
  let $selected, $$unsubscribe_selected;
  let $media_type, $$unsubscribe_media_type;
  let $tv_genres, $$unsubscribe_tv_genres;
  $$unsubscribe_movie_genres = subscribe(movie_genres, (value) => $movie_genres = value);
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  $$unsubscribe_tv_genres = subscribe(tv_genres, (value) => $tv_genres = value);
  $$unsubscribe_movie_genres();
  $$unsubscribe_selected();
  $$unsubscribe_media_type();
  $$unsubscribe_tv_genres();
  return `<div class="${"w-full bg-skin-primary"}"><div class="${"flex flex-row p-1"}"><div class="${"flex flex-col p-1 m-1 bg-skin-secondary"}"><h6 class="${"uppercase text-skin-base"}"><span class="${"mr-2"}"><i class="${"fa fa-video-camera"}" aria-hidden="${"true"}"></i></span>Movies
			</h6>
			<div class="${"py-0.5 justify-center bg-skin-inverted"}"></div>
			<ul class="${"flex flex-col justify-center text-sm "}">${each($movie_genres, (genre) => {
    return `<li class="${"flex"}"><button${add_attribute("aria-label", genre.name, 0)} class="${[
      "block p-1 hover:bg-skin-primary text-skin-base hover:text-skin-selected whitespace-nowrap",
      $selected === genre.id && $media_type === "movie" ? "bg-selected" : ""
    ].join(" ").trim()}">${escape(genre.name)}</button>
					</li>`;
  })}</ul></div>
		<div class="${"flex flex-col p-1 m-1 bg-skin-secondary"}"><h6 class="${"flex uppercase text-skin-base"}"><span class="${"mr-2"}"><i class="${"fa fa-tv"}" aria-hidden="${"true"}"></i></span>Tv
			</h6>
			<p class="${"py-0.5 justify-center text-skin-base"}"></p>
			<ul class="${"flex flex-col justify-center text-sm"}">${each($tv_genres, (genre) => {
    return `<li class="${"flex"}"><button class="${[
      "block p-1 hover:bg-skin-primary text-skin-base hover:text-skin-selected whitespace-nowrap",
      $selected === genre.id && $media_type === "tv" ? "bg-selected" : ""
    ].join(" ").trim()}">${escape(genre.name)}</button>
					</li>`;
  })}</ul></div></div></div>`;
});
const Selector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $media_type, $$unsubscribe_media_type;
  let $$unsubscribe_selected;
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  $$unsubscribe_media_type();
  $$unsubscribe_selected();
  return `<div class="${"pl-6 xl:pl-8 "}"><div class="${"group inline-block relative z-50"}"><button aria-label="${"Movies"}" class="${[
    "text-skin-inverted font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected",
    $media_type === "movie" ? "text-skin-selected" : ""
  ].join(" ").trim()}"><span><i class="${"fa fa-video-camera"}" aria-hidden="${"true"}"></i></span>
			<span class="${"hidden xl:block mx-2"}">Movies</span></button></div></div>

<div class="${"pl-6 xl:pl-8 "}"><div class="${"group inline-block relative z-50"}"><button aria-label="${"TV Shows"}" class="${[
    "text-skin-inverted font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected",
    $media_type === "tv" ? "text-skin-selected" : ""
  ].join(" ").trim()}"><span><i class="${"fa fa-television"}" aria-hidden="${"true"}"></i></span>
			<span class="${"hidden xl:block mx-2"}">Tv</span></button></div></div>

<div class="${"pl-6 xl:pl-8 "}"><div class="${"group inline-block relative z-50"}"><button aria-label="${"People"}" class="${[
    "text-skin-inverted font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected",
    $media_type === "person" ? "text-skin-selected" : ""
  ].join(" ").trim()}"><span><i class="${"fa fa-user"}" aria-hidden="${"true"}"></i></span>
			<span class="${"hidden xl:block mx-2"}">People</span></button></div></div>
<div class="${"pl-6 xl:pl-8 "}"><div class="${"group inline-block relative z-50"}"><button aria-label="${"Genres"}" class="${"text-skin-inverted font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected"}"><span><i class="${"fa fa-tag"}" aria-hidden="${"true"}"></i></span>
				<span class="${"hidden xl:block mx-2"}">Genres</span></button>
			<ul class="${"rounded xl:absolute fixed left-0 hidden bg-skin-primary text-skin-base group-hover:block"}">${validate_component(Genre, "Genre").$$render($$result, {}, {}, {})}</ul></div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_media_type;
  $$unsubscribe_media_type = subscribe(media_type, (value) => value);
  $$unsubscribe_media_type();
  return `<header class="${"w-full z-50 fixed top-0 h-12 bg-skin-primary"}"><div class="${"h-12 max-w-7xl mx-auto flex justify-between pl-2 md:pl-5 lg:pl-7 pr-1 items-center "}"><div class="${"flex flex-row items-center"}"><button class="${"text-3xl text-skin-inverted hover:text-skin-selected"}" href="${"/"}"><i class="${"fa fa-home"}"></i></button>
			${validate_component(Selector, "Selector").$$render($$result, {}, {}, {})}</div>

		${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div></header>`;
});
async function load({ fetch }) {
  try {
    const resTv = await (await fetch("/api/getTvGenres")).json();
    tv_genres.set(resTv.tv_genres);
    const resMovie = await (await fetch("/api/getMovieGenres")).json();
    movie_genres.set(resMovie.movie_genres);
    return {};
  } catch (e) {
    console.log("error", e);
  }
}
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" data-svelte="svelte-wejjgj"><link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;1,400&display=swap"}" data-svelte="svelte-wejjgj"><link rel="${"stylesheet"}" href="${"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}" data-svelte="svelte-wejjgj">${$$result.title = `<title>TMDB on Sveltekit</title>`, ""}<meta name="${"description"}" content="${"TMDB movie & tv database"}" data-svelte="svelte-wejjgj"><meta name="${"keywords"}" content="${"HTML, CSS, JavaScript, svelte"}" data-svelte="svelte-wejjgj"><meta name="${"author"}" content="${"Wayne Morgan"}" data-svelte="svelte-wejjgj">`, ""}

<main${add_attribute("class", $theme, 0)}><div class="${"fixed top-0 w-full min-h-screen -z-50 bg-gradient-to-r from-skin-bg to-skin-border"}"></div>

	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<section class="${"mt-[52px] max-w-7xl mx-auto"}">${slots.default ? slots.default({}) : ``}</section></main>`;
});
export { _layout as default, load };
