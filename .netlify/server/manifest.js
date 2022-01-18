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
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: new Set(["default.jpg", "favicon.ico", "icons8-moon-60.png", "icons8-sun-24.png", "icons8-sun-48.png", "icons8-sun.svg", "person.svg", "robots.txt", "sun_light_mode_day-512.webp"]),
  _: {
    mime: { ".jpg": "image/jpeg", ".ico": "image/vnd.microsoft.icon", ".png": "image/png", ".svg": "image/svg+xml", ".txt": "text/plain", ".webp": "image/webp" },
    entry: { "file": "start-cfb167c3.js", "js": ["start-cfb167c3.js", "chunks/vendor-b506428e.js", "chunks/singletons-4a680913.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toModule(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/11.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/NotFound\/?$/,
        params: null,
        path: "/NotFound",
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/trending\/([^/]+?)\/?$/,
        params: (m) => ({ media: m[1] }),
        path: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/episode\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
        params: (m) => ({ id: m[1], season_number: m[2], episode_number: m[3] }),
        path: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/seasons\/([^/]+?)\/([^/]+?)\/?$/,
        params: (m) => ({ id: m[1], season_number: m[2] }),
        path: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/person\/([^/]+?)\/?$/,
        params: (m) => ({ id: m[1] }),
        path: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/search\/([^/]+?)\/?$/,
        params: (m) => ({ id: m[1] }),
        path: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/genre\/([^/]+?)\/([^/]+?)\/?$/,
        params: (m) => ({ media: m[1], id: m[2] }),
        path: null,
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/movie\/([^/]+?)\/?$/,
        params: (m) => ({ id: m[1] }),
        path: null,
        a: [0, 10],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/theme\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/theme.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getMovieGenres\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/getMovieGenres.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getTvNetworks\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/getTvNetworks.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getShowGenre\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/getShowGenre.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getKnownFor\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/getKnownFor.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getTvGenres\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/getTvGenres.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getEpisode\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/getEpisode.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getTrailer\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/getTrailer.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getPerson\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/getPerson.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getSearch\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/getSearch.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getSeason\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/getSeason.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getMovie\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/getMovie.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/postData\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/postData.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getCast\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/getCast.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getShow\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/getShow.ts.js")))
      },
      {
        type: "page",
        pattern: /^\/tv\/([^/]+?)\/?$/,
        params: (m) => ({ id: m[1] }),
        path: null,
        a: [0, 11],
        b: [1]
      }
    ]
  }
};
