import { c as create_ssr_component, f as escape } from "../../chunks/index-bac2f3ba.js";
function load({ error }) {
  return { props: { message: error.message } };
}
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  return `



<div class="${"text-center mb-16 "}"><h2>Oops</h2>
	<p>${escape(message)}</p>
	<a href="${"/"}">Return to the home screen</a></div>


`;
});
export { _error as default, load };
