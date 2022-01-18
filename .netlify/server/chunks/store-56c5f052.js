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
  a: () => media_type,
  b: () => trailer_key,
  c: () => current_page,
  d: () => data,
  e: () => show_id,
  f: () => season_count,
  g: () => show_name,
  m: () => movie_genres,
  s: () => selected,
  t: () => tv_genres,
  v: () => video_site
});
var import_index_d650715d = __toModule(require("./index-d650715d.js"));
const current_page = (0, import_index_d650715d.w)(1);
const trailer_key = (0, import_index_d650715d.w)("xyz");
const video_site = (0, import_index_d650715d.w)("");
const media_type = (0, import_index_d650715d.w)("movie");
const selected = (0, import_index_d650715d.w)(null);
const show_name = (0, import_index_d650715d.w)("");
const season_count = (0, import_index_d650715d.w)(0);
const show_id = (0, import_index_d650715d.w)(0);
const data = (0, import_index_d650715d.w)([]);
const tv_genres = (0, import_index_d650715d.w)([]);
const movie_genres = (0, import_index_d650715d.w)([]);
