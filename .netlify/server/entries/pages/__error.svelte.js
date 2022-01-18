var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _error,
  load: () => load
});
var import_index_bac2f3ba = __toModule(require("../../chunks/index-bac2f3ba.js"));
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1vd85o7,p.svelte-1vd85o7{margin:0 auto}h1.svelte-1vd85o7{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-1vd85o7{margin:1em auto}@media(min-width: 480px){h1.svelte-1vd85o7{font-size:4em}}",
  map: null
};
function load({ error, status }) {
  return { props: { error, status } };
}
const _error = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error } = $$props;
  const offline = typeof navigator !== "undefined" && navigator.onLine === false;
  const title = offline ? "Offline" : status;
  const message = offline ? "Find the internet and try again" : error.message;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_bac2f3ba.f)(title)}</title>`, ""}`, ""}

<h1 class="${"svelte-1vd85o7"}">${(0, import_index_bac2f3ba.f)(title)}</h1>

<p class="${"svelte-1vd85o7"}">${(0, import_index_bac2f3ba.f)(message)}</p>

${error.stack ? `
	<h2>This page does not exist</h2>

	<pre>${(0, import_index_bac2f3ba.f)(error.stack)}</pre>` : ``}`;
});
