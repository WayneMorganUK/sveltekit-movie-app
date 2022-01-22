export const manifest = {
	appDir: "_app",
	assets: new Set(["default.jpg","favicon.ico","home.svg","icons8-moon-60.png","icons8-sun-24.png","icons8-sun-48.png","icons8-sun.svg","movie.svg","person.svg","robots.txt","sun_light_mode_day-512.webp","television.svg"]),
	_: {
		mime: {".jpg":"image/jpeg",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-e2685e89.js","js":["start-e2685e89.js","chunks/vendor-035761c6.js","chunks/singletons-a6a7384f.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/NotFound\/?$/,
				params: null,
				path: "/NotFound",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/trending\/([^/]+?)\/?$/,
				params: (m) => ({ media: m[1]}),
				path: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/episode\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1], season_number: m[2], episode_number: m[3]}),
				path: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/seasons\/([^/]+?)\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1], season_number: m[2]}),
				path: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/person\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/search\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/genre\/([^/]+?)\/([^/]+?)\/?$/,
				params: (m) => ({ media: m[1], id: m[2]}),
				path: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/movie\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/theme\/?$/,
				params: null,
				load: () => import('./entries/endpoints/theme.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/getMovieGenres\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/getMovieGenres.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/getTvNetworks\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/getTvNetworks.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/postShowGenre\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/postShowGenre.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/postKnownFor\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/postKnownFor.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/getTvGenres\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/getTvGenres.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/postEpisode\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/postEpisode.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/postTrailer\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/postTrailer.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/postPerson\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/postPerson.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/postSearch\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/postSearch.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/postSeason\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/postSeason.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/postMovie\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/postMovie.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/postCast\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/postCast.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/postShow\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/postShow.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/tv\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,11],
				b: [1]
			}
		]
	}
};
