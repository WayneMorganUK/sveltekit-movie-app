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
  del: () => del,
  put: () => put
});
var import_theme_55fe6b69 = __toModule(require("../../chunks/theme-55fe6b69.js"));
var import_stores_bf708f99 = __toModule(require("../../chunks/stores-bf708f99.js"));
var import_index_bac2f3ba = __toModule(require("../../chunks/index-bac2f3ba.js"));
var import_index_d650715d = __toModule(require("../../chunks/index-d650715d.js"));
const put = async ({ body }) => {
  const theme = body.toString();
  if (!(0, import_theme_55fe6b69.i)(theme)) {
    return {
      status: 400,
      body: `not a valid theme value: ${theme}`
    };
  }
  return {
    headers: {
      "Set-Cookie": `theme=${theme}; SameSite=Strict; HttpOnly; Secure`
    }
  };
};
const del = async () => ({
  status: 204,
  headers: {
    "Set-Cookie": `theme= ; Max-Age=0; SameSite=Strict; HttpOnly; Secure`
  }
});
