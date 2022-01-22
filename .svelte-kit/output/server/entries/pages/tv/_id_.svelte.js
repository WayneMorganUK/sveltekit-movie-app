import { c as create_ssr_component, e as each, d as add_attribute, f as escape, b as subscribe, h as set_store_value, v as validate_component } from "../../../chunks/index-bac2f3ba.js";
import { v as video_site, b as trailer_key, e as show_id, f as season_count, g as show_name, a as media_type } from "../../../chunks/store-56c5f052.js";
import { P as ProgressBar } from "../../../chunks/ProgressBar-fae5f0ef.js";
import { C as Cast, M as Modal, S as Spinner } from "../../../chunks/Cast-bda459e3.js";
import { p as page } from "../../../chunks/stores-bf708f99.js";
import "../../../chunks/index-d650715d.js";
const IMAGE_API$1 = "https://www.themoviedb.org/t/p/original";
const Seasons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tv_details } = $$props;
  let { tv_id } = $$props;
  if ($$props.tv_details === void 0 && $$bindings.tv_details && tv_details !== void 0)
    $$bindings.tv_details(tv_details);
  if ($$props.tv_id === void 0 && $$bindings.tv_id && tv_id !== void 0)
    $$bindings.tv_id(tv_id);
  return `<section id="${"Seasons"}"><div class="${"max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 pb-1 xl:rounded-2xl"}"><h4 class="${"pb-2"}">Season Information</h4>
		${each(tv_details.seasons, (episode) => {
    return `<div class="${"bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg"}"><a${add_attribute("href", `/seasons/${tv_id}/${episode.season_number}`, 0)} class="${"flex flex-col xl:flex-row text-skin-base xl:rounded-lg"}"><div class="${"flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-40 xl:h-60 xl:items-start"}"><img class="${"flex xl:w-40 xl: h-60 items-start"}"${add_attribute("src", episode.poster_path ? IMAGE_API$1 + episode.poster_path : "/default.jpg", 0)} alt="${"episode"}"></div>
					<div class="${"justify-self-center ml-2 block xl:justify-start"}"><h4>${escape(episode.name)}</h4>
						<h6>Air Date: ${escape(episode.air_date)}</h6>
						<h6>Overview:</h6>
						<h6 class="${"flex-1 pr-8 text-skin-muted mb-4"}">${escape(episode.overview)}</h6>
					</div></a>
			</div>`;
  })}</div>

	
	</section>`;
});
const IMAGE_API = "https://image.tmdb.org/t/p/";
const TvMedia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_video_site;
  let $$unsubscribe_trailer_key;
  let $show_id, $$unsubscribe_show_id;
  let $season_count, $$unsubscribe_season_count;
  let $show_name, $$unsubscribe_show_name;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_video_site = subscribe(video_site, (value) => value);
  $$unsubscribe_trailer_key = subscribe(trailer_key, (value) => value);
  $$unsubscribe_show_id = subscribe(show_id, (value) => $show_id = value);
  $$unsubscribe_season_count = subscribe(season_count, (value) => $season_count = value);
  $$unsubscribe_show_name = subscribe(show_name, (value) => $show_name = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let { tv_details } = $$props;
  let { trailer_details } = $$props;
  let { tv_id } = $$props;
  let { cast_details } = $$props;
  set_store_value(show_name, $show_name = tv_details.name, $show_name);
  set_store_value(season_count, $season_count = tv_details.number_of_seasons, $season_count);
  set_store_value(show_id, $show_id = tv_details.id, $show_id);
  let modal;
  window.scrollTo({ top: -1e3, behavior: "smooth" });
  if ($$props.tv_details === void 0 && $$bindings.tv_details && tv_details !== void 0)
    $$bindings.tv_details(tv_details);
  if ($$props.trailer_details === void 0 && $$bindings.trailer_details && trailer_details !== void 0)
    $$bindings.trailer_details(trailer_details);
  if ($$props.tv_id === void 0 && $$bindings.tv_id && tv_id !== void 0)
    $$bindings.tv_id(tv_id);
  if ($$props.cast_details === void 0 && $$bindings.cast_details && cast_details !== void 0)
    $$bindings.cast_details(cast_details);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${tv_details.id && trailer_details ? `<section id="${"media"}" class="${"bg-right-top bg-no-repeat bg-contain text-skin-inverted md:mt-5 md:bg-cover md:rounded-2xl"}" style="${"background-image: url(" + escape(IMAGE_API) + "original/" + escape(tv_details.backdrop_path) + ")"}"><div class="${"bg-gradient-to-r md:rounded-2xl"}" style="${"background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"}"><div class="${"grid max-w-7xl md:grid-cols-[20rem_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] px-10 py-8 mx-auto md:rounded-2xl"}"><div class="${"col-start-1 col-end-2 "}"><img class="${"w-64 mx-auto overflow-hidden h-96 md:h-120 md:w-80 rounded-2xl"}"${add_attribute("src", tv_details.poster_path ? IMAGE_API + "w500" + tv_details.poster_path : "/default.jpg", 0)} alt="${"movie poster"}"></div>
				<div class="${"flex flex-wrap content-start md:col-start-2 md:col-end-5 md:pl-10"}"><div class="${"flex flex-wrap w-full mt-6 mb-6 md:mt-0"}"><h4 class="${"w-full md:text-4xl"}">${escape(tv_details.name)}
							<span class="${"ml-1 text-lg md:text-4xl text-skin-inverted"}">${escape(tv_details ? tv_details.first_air_date.substring(0, 4) : "")}</span></h4>
						${tv_details.vote_average ? `<div class="${"inline-flex justify-center transform -translate-x-5 bg-transparent align-center scale-60"}">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { progress: tv_details.vote_average }, {}, {})}</div>` : ``}
						<div class="${"md:flex"}"><div class="${"pl-0"}">${escape("first_air_date" in tv_details ? tv_details.first_air_date : "No Date Available")}
								<span class="${"hidden md:px-2 md:inline"}">\u2022</span></div>
							<div>${each(tv_details.genres, ({ id, name }, i) => {
      return `<a class="${"hover:text-skin-selected"}" href="${"/genre/" + escape($media_type) + "/" + escape(id)}">${escape(name)}</a>
									${i !== tv_details.genres.length - 1 ? `<span class="${"mx-2"}">|</span>` : ``}`;
    })}</div></div></div>
					<div class="${"relative flex flex-wrap justify-center w-full mb-1 md:h-48 md:justify-start md:flex-nowrap md:overflow-y-hidden"}">${trailer_details.length > 0 ? `${each(trailer_details, (trailer) => {
      return `<div class="${"flex-shrink-0 w-56 pl-2 cursor-pointer hover:opacity-80"}"><button${add_attribute("title", trailer.name, 0)}><img${add_attribute("src", `https://img.youtube.com/vi/${trailer.key}/0.jpg`, 0)} alt="${"movie poster"}"></button>
								</div>`;
    })}
							` : `<div class="${"flex pl-5"}"><p class="${"flex justify-center ml-4"}">No Trailer Available</p></div>`}</div>
					<div class="${"w-full"}"><div class="${"text-lg italic opacity-70"}">${escape(tv_details.tagline)}</div>
						<h4 class="${"w-full my-2 font-semibold"}">Overview</h4>
						<div class="${"overview-details"}">${escape(tv_details.overview)}</div></div></div></div></div></section>

	${validate_component(Cast, "Cast").$$render($$result, { cast_details }, {}, {})}

	${validate_component(Modal, "Modal").$$render($$result, { this: modal }, {
      this: ($$value) => {
        modal = $$value;
        $$settled = false;
      }
    }, {})}

	${$media_type === "tv" ? `${validate_component(Seasons, "Seasons").$$render($$result, { tv_details, tv_id }, {}, {})}` : ``}` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
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
  media_type.set("tv");
  const tv_res = await fetch("../api/postMovie", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "tv", id: params.id })
  });
  const tv = await tv_res.json();
  const tv_details = await tv.res;
  const trailer_res = await fetch("../api/postTrailer", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "tv", id: params.id })
  });
  const trailer = await trailer_res.json();
  const trailer_details = trailer.res.results;
  const cast_res = await fetch("../../api/postCast", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "tv", id: params.id })
  });
  const cast = await cast_res.json();
  const cast_details = await cast.res.cast;
  return {
    props: {
      tv_details,
      trailer_details,
      cast_details
    }
  };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { tv_details } = $$props;
  let { trailer_details } = $$props;
  let { cast_details } = $$props;
  let tv_id = $page.params.id;
  if ($$props.tv_details === void 0 && $$bindings.tv_details && tv_details !== void 0)
    $$bindings.tv_details(tv_details);
  if ($$props.trailer_details === void 0 && $$bindings.trailer_details && trailer_details !== void 0)
    $$bindings.trailer_details(trailer_details);
  if ($$props.cast_details === void 0 && $$bindings.cast_details && cast_details !== void 0)
    $$bindings.cast_details(cast_details);
  $$unsubscribe_page();
  return `${validate_component(TvMedia, "TvMedia").$$render($$result, {
    tv_details,
    trailer_details,
    cast_details,
    tv_id
  }, {}, {})}`;
});
export { U5Bidu5D as default, load };
