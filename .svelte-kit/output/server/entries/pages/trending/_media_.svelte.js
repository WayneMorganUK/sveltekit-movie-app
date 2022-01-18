import { c as create_ssr_component, b as subscribe, h as set_store_value, v as validate_component } from "../../../chunks/index-bac2f3ba.js";
import { d as data, c as current_page, a as media_type, s as selected } from "../../../chunks/store-56c5f052.js";
import { M as MainSection } from "../../../chunks/MainSection-8a1d1742.js";
import "../../../chunks/index-d650715d.js";
import "../../../chunks/ProgressBar-fae5f0ef.js";
async function load({ fetch, params }) {
  data.set(void 0);
  current_page.set(1);
  media_type.set(params.media);
  const res = await (await fetch("../../api/getShow", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: params.media, page: "1" })
  })).json();
  data.set(await res.res.results);
  const total_pages = await res.res.total_pages;
  return { props: { total_pages } };
}
const U5Bmediau5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  let $$unsubscribe_data;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_data = subscribe(data, (value) => value);
  let { total_pages } = $$props;
  set_store_value(selected, $selected = null, $selected);
  if ($$props.total_pages === void 0 && $$bindings.total_pages && total_pages !== void 0)
    $$bindings.total_pages(total_pages);
  $$unsubscribe_selected();
  $$unsubscribe_data();
  return `${validate_component(MainSection, "MainSection").$$render($$result, { total_pages }, {}, {})}`;
});
export { U5Bmediau5D as default, load };
