import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_attribute, e as each, f as escape } from "../../chunks/index-bac2f3ba.js";
import { m as movie_genres, s as selected, a as media_type, t as tv_genres } from "../../chunks/store-56c5f052.js";
import { t as theme, T as Theme } from "../../chunks/theme-d5dc0345.js";
import "../../chunks/index-d650715d.js";
import "../../chunks/stores-bf708f99.js";
var app = "";
const ToggleDarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return `<button id="${"night-mode"}" aria-label="${"night-mode-switch"}" class="${"text-skin-inverted"}"><div class="${"flex justify-center w-8 h-8 mr-2 align-middle border-2 rounded-full border-skin-border focus:outline-none"}">${$theme === Theme.Dark ? `<span><svg class="${"inline justify-center align-middle w-5 h-5"}" aria-hidden="${"true"}" role="${"img"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><g fill="${"none"}" stroke="${"#ff0"}" stroke-linecap="${"round"}" stroke-width="${"2"}"><path d="${"M12 3V2m0 20v-1m9-9h1M2 12h1m15.5-6.5L20 4M4 20l1.5-1.5M4 4l1.5 1.5m13 13L20 20"}"></path><circle cx="${"12"}" cy="${"12"}" r="${"4"}"></circle></g></svg></span>` : `<span><svg class="${"inline justify-center align-middle w-5 h-5"}" aria-hidden="${"true"}" viewBox="${"0 0 24 24"}" preserveAspectRatio="${"xMidYMid meet"}"><g fill="${"silver"}"><path d="${"M20.958 15.325c.204-.486-.379-.9-.868-.684a7.684 7.684 0 0 1-3.101.648c-4.185 0-7.577-3.324-7.577-7.425a7.28 7.28 0 0 1 1.134-3.91c.284-.448-.057-1.068-.577-.936C5.96 4.041 3 7.613 3 11.862 3 16.909 7.175 21 12.326 21c3.9 0 7.24-2.345 8.632-5.675z"}"></path><path d="${"M15.611 3.103c-.53-.354-1.162.278-.809.808l.63.945a2.332 2.332 0 0 1 0 2.588l-.63.945c-.353.53.28 1.162.81.808l.944-.63a2.332 2.332 0 0 1 2.588 0l.945.63c.53.354 1.162-.278.808-.808l-.63-.945a2.332 2.332 0 0 1 0-2.588l.63-.945c.354-.53-.278-1.162-.809-.808l-.944.63a2.332 2.332 0 0 1-2.588 0l-.945-.63z"}"></path></g></svg></span>`}</div></button>`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm;
  return `<section id="${"search"}" class="${"flex flex-row"}">${validate_component(ToggleDarkMode, "ToggleDarkMode").$$render($$result, {}, {}, {})}
	<form class="${"text-skin-base flex justify-end items-center pr-0.5"}" label="${"search form"}"><input label="${"search"}" class="${"w-24 h-8 px-2 text-lg bg-transparent border-2 rounded-full lg:w-48 placeholder-text-skin-base::placeholder border-skin-border"}" type="${"text"}" placeholder="${"Search..."}"${add_attribute("value", searchTerm, 0)}></form></section>`;
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
  return `<div class="${"w-full bg-skin-primary"}"><div class="${"flex flex-row p-1"}"><div class="${"flex flex-col p-1 m-1 bg-skin-secondary"}"><h6 class="${"flex flex-ruppercase text-skin-base"}"><span class="${"mr-2"}"><svg class="${"w-6 h-6 fill-base"}" aria-hidden="${"true"}" role="${"img"}" style="${"vertical-align: -0.125em;"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path d="${"M18 11c0-.959-.68-1.761-1.581-1.954C16.779 8.445 17 7.75 17 7c0-2.206-1.794-4-4-4-1.517 0-2.821.857-3.5 2.104C8.821 3.857 7.517 3 6 3 3.794 3 2 4.794 2 7c0 .902.312 1.727.817 2.396A1.994 1.994 0 0 0 2 11v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-2.638l4 2v-7l-4 2V11zm-5-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM4 19v-8h12l.002 8H4z"}"></path></svg>
				</span>Movies
			</h6>
			<div class="${"py-0.5 justify-center bg-skin-inverted"}"></div>
			<ul class="${"flex flex-col justify-center text-sm "}">${each($movie_genres, (genre) => {
    return `<li class="${"flex"}"><button${add_attribute("aria-label", genre.name, 0)} class="${[
      "block p-1 hover:bg-skin-primary text-skin-base hover:text-skin-selected whitespace-nowrap",
      $selected === genre.id && $media_type === "movie" ? "bg-selected" : ""
    ].join(" ").trim()}">${escape(genre.name)}</button>
					</li>`;
  })}</ul></div>
		<div class="${"flex flex-col p-1 m-1 bg-skin-secondary"}"><h6 class="${"flex flex-row uppercase text-skin-base"}"><span class="${"mr-2"}"><svg class="${"w-6 h-6 fill-base"}" aria-hidden="${"true"}" role="${"img"}" style="${"vertical-align: -0.125em;"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path d="${"M21 17H3V5h18m0-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"}"></path></svg>
				</span>Tv
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
  return `<div class="${"pl-6 xl:pl-8 "}"><div class="${"relative z-50 inline-block group"}"><button aria-label="${"Movies"}" class="${[
    "inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected",
    $media_type === "movie" ? "text-skin-selected" : ""
  ].join(" ").trim()}"><svg class="${[
    "w-6 h-6 fill-inverted group-hover:fill-selected",
    $media_type === "movie" ? "fill-selected" : ""
  ].join(" ").trim()}" aria-hidden="${"true"}" role="${"img"}" style="${"vertical-align: -0.125em;"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path d="${"M18 11c0-.959-.68-1.761-1.581-1.954C16.779 8.445 17 7.75 17 7c0-2.206-1.794-4-4-4-1.517 0-2.821.857-3.5 2.104C8.821 3.857 7.517 3 6 3 3.794 3 2 4.794 2 7c0 .902.312 1.727.817 2.396A1.994 1.994 0 0 0 2 11v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-2.638l4 2v-7l-4 2V11zm-5-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM4 19v-8h12l.002 8H4z"}"></path></svg>
			<span class="${"hidden mx-2 xl:block"}">Movies</span></button></div></div>

<div class="${"pl-6 xl:pl-8 "}"><div class="${"relative z-50 inline-block group"}"><button aria-label="${"TV Shows"}" class="${[
    "inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected",
    $media_type === "tv" ? "text-skin-selected" : ""
  ].join(" ").trim()}"><span><svg class="${[
    "w-6 h-6 fill-inverted group-hover:fill-selected",
    $media_type === "tv" ? "fill-selected" : ""
  ].join(" ").trim()}" aria-hidden="${"true"}" role="${"img"}" style="${"vertical-align: -0.125em;"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path d="${"M21 17H3V5h18m0-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"}"></path></svg></span>
			<span class="${"hidden mx-2 xl:block"}">Tv</span></button></div></div>

<div class="${"pl-6 xl:pl-8 "}"><div class="${"relative z-50 inline-block group"}"><button aria-label="${"People"}" class="${[
    "inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected",
    $media_type === "person" ? "text-skin-selected" : ""
  ].join(" ").trim()}"><span><svg class="${[
    "w-6 h-6 stroke-inverted group-hover:stroke-selected",
    $media_type === "person" ? "stroke-selected" : ""
  ].join(" ").trim()}" aria-hidden="${"true"}" role="${"img"}" style="${"vertical-align: -0.125em;"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><g fill="${"none"}" stroke-width="${"2"}"><circle cx="${"12"}" cy="${"7"}" r="${"5"}"></circle><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"}"></path></g></svg></span>
			<span class="${"hidden mx-2 xl:block"}">People</span></button></div></div>
<div class="${"pl-6 xl:pl-8 "}"><div class="${"relative z-50 inline-block group"}"><button aria-label="${"Genres"}" class="${"inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected"}"><span><svg class="${"align-middle w-6 h-6 fill-inverted group-hover:fill-selected"}" aria-hidden="${"true"}" role="${"img"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 14 14"}"><path d="${"M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}"></path></svg></span>
				<span class="${"hidden mx-2 xl:block"}">Genres</span></button>
			<ul class="${"fixed left-0 hidden rounded xl:absolute bg-skin-primary text-skin-base group-hover:block"}">${validate_component(Genre, "Genre").$$render($$result, {}, {}, {})}</ul></div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_media_type;
  $$unsubscribe_media_type = subscribe(media_type, (value) => value);
  $$unsubscribe_media_type();
  return `<header class="${"fixed top-0 z-50 w-full h-12 bg-skin-primary"}"><div class="${"flex items-center justify-between h-12 pl-2 pr-1 mx-auto max-w-7xl md:pl-5 lg:pl-7 "}"><div class="${"flex flex-row items-center"}"><button aria-label="${"home"}" class="${"text-3xl text-skin-inverted hover:text-skin-selected"}" href="${"/"}">
				<svg class="${"w-8 h-8 fill-inverted hover:fill-selected"}" aria-hidden="${"true"}" role="${"img"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 576 512"}"><path d="${"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}"></path></svg></button>
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
  return `${$$result.head += `${$$result.title = `<title>TMDB on Sveltekit</title>`, ""}<meta name="${"description"}" content="${"TMDB movie & tv database"}" data-svelte="svelte-mhgiy0"><meta name="${"keywords"}" content="${"HTML, CSS, JavaScript, svelte"}" data-svelte="svelte-mhgiy0"><meta name="${"author"}" content="${"Wayne Morgan"}" data-svelte="svelte-mhgiy0">`, ""}

<main${add_attribute("class", $theme, 0)}><div class="${"fixed top-0 w-full min-h-screen -z-50 bg-gradient-to-r from-skin-bg to-skin-border"}"></div>

	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<section class="${"mx-auto mt-[60px] max-w-7xl"}">${slots.default ? slots.default({}) : ``}</section></main>`;
});
export { _layout as default, load };
