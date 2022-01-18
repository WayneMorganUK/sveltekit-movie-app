import { c as create_ssr_component, b as subscribe, f as escape, d as add_attribute, v as validate_component, e as each } from "../../../chunks/index-bac2f3ba.js";
import { v as video_site, b as trailer_key, a as media_type } from "../../../chunks/store-56c5f052.js";
import { P as ProgressBar } from "../../../chunks/ProgressBar-fae5f0ef.js";
import { C as Cast, M as Modal, S as Spinner } from "../../../chunks/Cast-498cb0f9.js";
import "../../../chunks/index-d650715d.js";
const IMAGE_API = "https://image.tmdb.org/t/p/";
const MovieMedia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_video_site;
  let $$unsubscribe_trailer_key;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_video_site = subscribe(video_site, (value) => value);
  $$unsubscribe_trailer_key = subscribe(trailer_key, (value) => value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
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
    $$rendered = `${movie_details.id && trailer_details ? `<section id="${"media"}" class="${"text-skin-inverted xl:mt-5 bg-no-repeat bg-right-top bg-contain md:bg-cover md:rounded-2xl"}" style="${"background-image: url(" + escape(IMAGE_API) + "original/" + escape(movie_details.backdrop_path) + ")"}"><div class="${"bg-gradient-to-r md:rounded-2xl"}" style="${"background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"}"><div class="${"grid max-w-7xl md:grid-cols-[20rem_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] px-10 py-8 mx-auto md:rounded-2xl"}"><div class="${"col-start-1 col-end-2 "}"><img class="${"h-96 w-64 md:h-120 md:w-80 overflow-hidden rounded-2xl mx-auto"}"${add_attribute("src", movie_details.poster_path ? IMAGE_API + "w500" + movie_details.poster_path : "/default.jpg", 0)} alt="${"movie poster"}"></div>
				<div class="${"md:col-start-2 md:col-end-5 flex flex-wrap content-start md:pl-10"}"><div class="${"mt-6 md:mt-0 w-full flex flex-wrap"}"><h4 class="${"md:flex w-full md:text-4xl"}">${escape(movie_details.title)}
							<span class="${"ml-1 text-lg md:text-4xl text-skin-inverted"}">${escape(movie_details.release_date ? movie_details.release_date.substring(0, 4) : "")}</span></h4>
						${movie_details.vote_average ? `<div class="${"bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60"}">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { progress: movie_details.vote_average }, {}, {})}</div>` : ``}

						<div class="${"md:flex"}"><div class="${"pl-0"}">${escape(movie_details.release_date ? movie_details.release_date : "No Date Available")}
								<span class="${"hidden md:px-2 md:inline"}">\u2022</span></div>
							<div>${each(movie_details.genres, ({ id, name }, i) => {
      return `<a class="${"hover:text-skin-selected"}" href="${"/genre/" + escape($media_type) + "/" + escape(id)}">${escape(name)}</a>
									${i !== movie_details.genres.length - 1 ? `<span class="${"mx-2"}">|</span>` : ``}`;
    })}</div>
							${"runtime" in movie_details ? `<div class="${"duration"}"><span class="${"hidden md:px-2 md:inline"}">\u2022</span>${escape((movie_details.runtime - movie_details.runtime % 60) / 60)}h ${escape(movie_details.runtime % 60)}m
								</div>` : ``}</div></div>
					<div class="${"mb-1 w-full flex flex-wrap justify-center md:justify-start md:flex-nowrap md:overflow-y-hidden relative"}">${trailer_details.length > 0 ? `${each(trailer_details, (trailer) => {
      return `<div class="${"w-56 flex-shrink-0 pl-2 cursor-pointer hover:opacity-80"}"${add_attribute("title", trailer.name, 0)}><img${add_attribute("src", `https://img.youtube.com/vi/${trailer.key}/0.jpg`, 0)}${add_attribute("alt", trailer.name, 0)}>
								</div>`;
    })}
							` : `<div class="${"flex pl-5"}"><p class="${"flex justify-center ml-4"}">No Trailer Available</p></div>`}</div>
					<div class="${"w-full"}"><div class="${"text-lg italic opacity-70"}">${escape(movie_details.tagline)}</div>
						<h4 class="${"my-2 w-full font-semibold"}">Overview</h4>
						<div class="${"overview-details"}">${escape(movie_details.overview)}</div></div></div></div></div></section>

	${validate_component(Cast, "Cast").$$render($$result, { cast }, {}, {})}
	${validate_component(Modal, "Modal").$$render($$result, { this: modal }, {
      this: ($$value) => {
        modal = $$value;
        $$settled = false;
      }
    }, {})}` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_video_site();
  $$unsubscribe_trailer_key();
  $$unsubscribe_media_type();
  return $$rendered;
});
async function load({ fetch, params }) {
  media_type.set("movie");
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
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie_details } = $$props;
  let { trailer_details } = $$props;
  let { cast } = $$props;
  if ($$props.movie_details === void 0 && $$bindings.movie_details && movie_details !== void 0)
    $$bindings.movie_details(movie_details);
  if ($$props.trailer_details === void 0 && $$bindings.trailer_details && trailer_details !== void 0)
    $$bindings.trailer_details(trailer_details);
  if ($$props.cast === void 0 && $$bindings.cast && cast !== void 0)
    $$bindings.cast(cast);
  return `${validate_component(MovieMedia, "MovieMedia").$$render($$result, { movie_details, trailer_details, cast }, {}, {})}`;
});
export { U5Bidu5D as default, load };
