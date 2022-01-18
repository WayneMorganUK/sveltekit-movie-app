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
  T: () => Theme,
  i: () => isTheme,
  t: () => theme
});
var import_stores_bf708f99 = __toModule(require("./stores-bf708f99.js"));
var import_index_d650715d = __toModule(require("./index-d650715d.js"));
var Theme;
(function(Theme2) {
  Theme2["Light"] = "light";
  Theme2["Dark"] = "dark";
})(Theme || (Theme = {}));
const isTheme = (theme2) => Object.values(Theme).includes(theme2);
const theme = (0, import_index_d650715d.d)(import_stores_bf708f99.s, ($session, set) => {
  if ($session.theme) {
    set($session.theme);
  }
});
