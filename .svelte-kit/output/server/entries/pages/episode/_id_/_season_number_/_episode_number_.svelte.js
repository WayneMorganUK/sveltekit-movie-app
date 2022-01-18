import { c as create_ssr_component, d as add_attribute, f as escape, e as each, v as validate_component } from "../../../../../chunks/index-bac2f3ba.js";
const IMAGE_API = "https://image.tmdb.org/t/p/original";
const Episode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { episode_details } = $$props;
  if ($$props.episode_details === void 0 && $$bindings.episode_details && episode_details !== void 0)
    $$bindings.episode_details(episode_details);
  return `

<section id="${"episode"}"><div class="${"max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-0 pt-1 pb-1 xl:rounded-2xl"}">${episode_details.id ? `<h4 class="${"pl-4"}">Episode Information</h4>
			<div class="${"bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg"}"><div class="${"flex flex-col xl:flex-row text-skin-base xl:rounded-lg"}"><img class="${"xl:h-44 items-start"}"${add_attribute("src", episode_details.still_path ? IMAGE_API + episode_details.still_path : "/default.jpg", 0)} alt="${"episode"}"></div>

				<div class="${"ml-2 block"}"><h4>Season: ${escape(episode_details.season_number)} Episode: ${escape(episode_details.episode_number)}</h4>
					<h4>Episode Name: ${escape(episode_details.name)}</h4>
					<h6>Air Date: ${escape(episode_details.air_date)}</h6>
					<h6>Overview:</h6>
					<h6 class="${"flex-1 pr-8 text-skin-muted mb-4"}">${escape(episode_details.overview)}</h6></div></div>

			${episode_details.guest_stars.length ? `<div><h3>Guest Stars</h3>
					<div class="${"text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${each(episode_details.guest_stars, (guest_star) => {
    return `<div class="${"w-40 h-72 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"}"><a class="${"rounded w-28"}"${add_attribute("href", `/person/${guest_star.id}`, 0)}><img class="${"flex xl:w-40 xl: h-60 items-start"}"${add_attribute("src", guest_star.profile_path ? IMAGE_API + guest_star.profile_path : "/default.jpg", 0)} alt="${"episode"}"></a>
								<p>Character ${escape(guest_star.character)}</p>
								<p>Name ${escape(guest_star.name)}</p>
							</div>`;
  })}</div></div>` : ``}

			${episode_details.crew.length ? `<div><h3>Crew</h3>
					<div class="${"text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${each(episode_details.crew, (crew_member) => {
    return `<div class="${"w-40 h-72 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"}"><a class="${"rounded w-28"}"${add_attribute("href", `/person/${crew_member.id}`, 0)}><img class="${"flex xl:w-40 xl: h-60 items-start"}"${add_attribute("src", crew_member.profile_path ? IMAGE_API + crew_member.profile_path : "/default.jpg", 0)} alt="${"episode"}"></a>
								<p>${escape(crew_member.job)}</p>
								<p>${escape(crew_member.name)}</p>
							</div>`;
  })}</div></div>` : ``}` : ``}</div></section>`;
});
async function load({ fetch, params }) {
  const res = await (await fetch("../../../api/getEpisode", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      id: params.id,
      season_number: params.season_number,
      episode_number: params.episode_number
    })
  })).json();
  const episode_details = await res.res;
  return { props: { episode_details } };
}
const U5Bepisode_numberu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { episode_details } = $$props;
  if ($$props.episode_details === void 0 && $$bindings.episode_details && episode_details !== void 0)
    $$bindings.episode_details(episode_details);
  return `${validate_component(Episode, "Episode").$$render($$result, { episode_details }, {}, {})}`;
});
export { U5Bepisode_numberu5D as default, load };
