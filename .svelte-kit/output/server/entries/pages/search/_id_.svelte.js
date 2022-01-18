import { k as get_store_value, c as create_ssr_component, b as subscribe, v as validate_component } from "../../../chunks/index-bac2f3ba.js";
import { c as current_page, d as data, a as media_type } from "../../../chunks/store-56c5f052.js";
import { M as MainSection } from "../../../chunks/MainSection-8a1d1742.js";
import { p as page } from "../../../chunks/stores-bf708f99.js";
import "../../../chunks/index-d650715d.js";
import "../../../chunks/ProgressBar-fae5f0ef.js";
async function load({ fetch, params }) {
  current_page.set(1);
  const res = await (await fetch("../api/getSearch", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      media: get_store_value(media_type),
      query: params.id,
      page: "1"
    })
  })).json();
  data.set(await res.res.results);
  const total_pages = await res.res.total_pages;
  return { props: { total_pages } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_data;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_data = subscribe(data, (value) => value);
  let { total_pages } = $$props;
  let searching = $page.params.id;
  if ($$props.total_pages === void 0 && $$bindings.total_pages && total_pages !== void 0)
    $$bindings.total_pages(total_pages);
  $$unsubscribe_page();
  $$unsubscribe_data();
  return `${validate_component(MainSection, "MainSection").$$render($$result, { total_pages, searching }, {}, {})}`;
});
export { U5Bidu5D as default, load };
