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
  P: () => ProgressBar
});
var import_index_bac2f3ba = __toModule(require("./index-bac2f3ba.js"));
const ProgressBar = (0, import_index_bac2f3ba.c)(($$result, $$props, $$bindings, slots) => {
  let { progress } = $$props;
  let progress_percent;
  let canvas;
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  progress_percent = progress * 10;
  return `<section id="${"progress"}" class="${"bg-gray-900 block rounded-full align-center relative w-24 h-24"}"><div class="${"box"}"><div class="${"percent"}"><canvas class="${"w-24 h-24"}" width="${"98"}" height="${"98"}"${(0, import_index_bac2f3ba.d)("this", canvas, 0)}></canvas>
			<div class="${"absolute top-0 left-0 w-full h-full flex justify-center items-center"}"><h2 class="${"text-gray-200 text-3xl"}">${(0, import_index_bac2f3ba.f)(progress_percent)}<span class="${"text-xl align-top"}">%</span></h2></div></div></div></section>`;
});
