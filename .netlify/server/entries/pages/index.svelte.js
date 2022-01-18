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
  default: () => Routes,
  load: () => load
});
var import_index_bac2f3ba = __toModule(require("../../chunks/index-bac2f3ba.js"));
var import_store_56c5f052 = __toModule(require("../../chunks/store-56c5f052.js"));
var import_MainSection_8a1d1742 = __toModule(require("../../chunks/MainSection-8a1d1742.js"));
var import_index_d650715d = __toModule(require("../../chunks/index-d650715d.js"));
var import_ProgressBar_fae5f0ef = __toModule(require("../../chunks/ProgressBar-fae5f0ef.js"));
async function load({ fetch }) {
  import_store_56c5f052.d.set(void 0);
  import_store_56c5f052.c.set(1);
  const res = await fetch("/api/getShow", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "movie", page: "1" })
  });
  const json_res = await res.json();
  import_store_56c5f052.d.set(json_res.res.results);
  const total_pages = await json_res.res.total_pages;
  if (res.ok) {
    return { props: { total_pages } };
  }
  return {
    status: res.status,
    error: new Error("failure to communicate")
  };
}
const Routes = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  let $$unsubscribe_data;
  $$unsubscribe_selected = (0, import_index_bac2f3ba.b)(import_store_56c5f052.s, (value) => $selected = value);
  $$unsubscribe_data = (0, import_index_bac2f3ba.b)(import_store_56c5f052.d, (value) => value);
  let { total_pages } = $$props;
  (0, import_index_bac2f3ba.h)(import_store_56c5f052.s, $selected = null, $selected);
  if ($$props.total_pages === void 0 && $$bindings.total_pages && total_pages !== void 0)
    $$bindings.total_pages(total_pages);
  $$unsubscribe_selected();
  $$unsubscribe_data();
  return `${(0, import_index_bac2f3ba.v)(import_MainSection_8a1d1742.M, "MainSection").$$render($$result, { total_pages }, {}, {})}`;
});
