import { c as create_ssr_component, b as subscribe, f as escape, e as each, d as add_attribute } from "./index-bac2f3ba.js";
import { v as video_site, b as trailer_key } from "./store-56c5f052.js";
var Spinner_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1d7ew8h{animation:svelte-1d7ew8h-wave 0.8s ease-in-out alternate infinite}div.svelte-1d7ew8h:nth-of-type(1){animation-delay:-0.4s}div.svelte-1d7ew8h:nth-of-type(2){animation-delay:-0.2s}@keyframes svelte-1d7ew8h-wave{from{transform:translateY(-100%)}to{transform:translateY(100%)}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="${"spinner"}" class="${"w-full h-full m-auto"}"><section class="${"flex absolute items-center h-8 top-1/2 left-1/2 transform -translate-x-1/2 "}"><div class="${"inline-flex flex-nowrap flex-row items-center justify-between mx-auto w-12 svelte-1d7ew8h"}"><div class="${"w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full svelte-1d7ew8h"}"></div>
			<div class="${"w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full svelte-1d7ew8h"}"></div>
			<div class="${"w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full svelte-1d7ew8h"}"></div></div></section>
</section>`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $video_site, $$unsubscribe_video_site;
  let $trailer_key, $$unsubscribe_trailer_key;
  $$unsubscribe_video_site = subscribe(video_site, (value) => $video_site = value);
  $$unsubscribe_trailer_key = subscribe(trailer_key, (value) => $trailer_key = value);
  let shown = false;
  function show() {
    shown = true;
  }
  function hide() {
    shown = false;
  }
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0)
    $$bindings.hide(hide);
  $$unsubscribe_video_site();
  $$unsubscribe_trailer_key();
  return `${shown ? `<section id="${"trailer"}" class="${"fixed top-0 bottom-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-60"}"><div class="${"absolute top-0 left-0 w-full h-full bg-contain"}">${$video_site === "YouTube" ? `<iframe class="${"absolute top-0 left-0 w-full h-full bg-contain iframe"}" title="${"Trailer"}" src="${"https://www.youtube.com/embed/" + escape($trailer_key) + "?rel=0"}" allow="${"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}" width="${"1080"}" allowfullscreen><track default kind="${"captions"}"></iframe>` : `${$video_site === "Vimeo" ? `<iframe class="${"absolute top-0 left-0 w-full h-full bg-contain iframe"}" title="${"trailer"}" src="${"https://player.vimeo.com/video/" + escape($trailer_key)}" frameborder="${"0"}" allow="${"autoplay; fullscreen"}" allowfullscreen></iframe>` : ``}`}</div>

		<div><button class="${"absolute left-1/2 right-1/2 top-3 "}" aria-label="${"close"}"><svg class="${"w-12 h-12 fill-red-700"}" aria-hidden="${"true"}" role="${"img"}" style="${"vertical-align: -0.125em;"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 1024 1024"}"><path d="${"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}"></path><path d="${"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"}"></path></svg></button></div></section>` : ``}`;
});
const IMAGE_API = "https://image.tmdb.org/t/p/w200/";
const Cast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cast_details = [] } = $$props;
  if ($$props.cast_details === void 0 && $$bindings.cast_details && cast_details !== void 0)
    $$bindings.cast_details(cast_details);
  return `${cast_details.length ? `<section id="${"people"}" class="${"pt-1 mx-auto max-w-7xl xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 xl:rounded-2xl"}"><h3 class="${"flex justify-center text-2xl font-bold text-skin-base xl:inline-block xl:justify-start xl:my-5"}">Top Billed Cast
		</h3>
		<div class="${"relative flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden"}">${each(cast_details, (person) => {
    return `<div class="${"w-28 flex-shrink-0 mb-2 rounded relative bg-skin-primary m-0.5 sm:mr-3 hover:bg-selected"}"><a${add_attribute("href", `/person/${person.id}`, 0)}><div class="${"bg-blue-900 w-28 h-42"}">${person.profile_path ? `<img class="${"rounded-t w-28 h-42"}"${add_attribute("src", IMAGE_API + person.profile_path, 0)} alt="${"profile"}">` : `<img class="${"bottom-0 flex items-end justify-end pt-8 rounded-t w-28 h-42"}" src="${"/person.svg"}" alt="${"profile"}">`}</div>
						<p class="${"flex items-center justify-center font-semibold text-center text-skin-base line-clamp-1 xl:line-clamp-2"}">${escape(person.character)}</p>
						<p class="${"flex items-center justify-center text-center text-skin-muted line-clamp-1 xl:line-clamp-2"}">${escape(person.name)}
						</p></a>
				</div>`;
  })}</div></section>` : ``}`;
});
export { Cast as C, Modal as M, Spinner as S };
