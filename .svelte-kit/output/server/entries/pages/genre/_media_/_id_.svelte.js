import { c as create_ssr_component, b as subscribe, h as set_store_value, v as validate_component } from "../../../../chunks/index-bac2f3ba.js";
import { c as current_page, d as data, a as media_type, s as selected } from "../../../../chunks/store-56c5f052.js";
import { M as MainSection } from "../../../../chunks/MainSection-8a1d1742.js";
import "../../../../chunks/index-d650715d.js";
import "../../../../chunks/ProgressBar-fae5f0ef.js";
const prerender = true;
async function load({ fetch, params }) {
  current_page.set(1);
  data.set(void 0);
  const genres = params.id;
  media_type.set(params.media);
  const res = await (await fetch("../../api/getShowGenre", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      media: params.media,
      genre: genres,
      page: "1"
    })
  })).json();
  data.set(await res.res.results);
  const total_pages = await res.res.total_pages;
  return { props: { total_pages, genres } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  let $$unsubscribe_data;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_data = subscribe(data, (value) => value);
  let { total_pages } = $$props;
  let { genres } = $$props;
  set_store_value(selected, $selected = null, $selected);
  if ($$props.total_pages === void 0 && $$bindings.total_pages && total_pages !== void 0)
    $$bindings.total_pages(total_pages);
  if ($$props.genres === void 0 && $$bindings.genres && genres !== void 0)
    $$bindings.genres(genres);
  $$unsubscribe_selected();
  $$unsubscribe_data();
  return `${validate_component(MainSection, "MainSection").$$render($$result, { total_pages, genres }, {}, {})}`;
});
export { U5Bidu5D as default, load, prerender };
