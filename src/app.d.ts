/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
	API: string;
}

type Media = {
	genres: [Genre];
};

type MediaPlatform = 'movie' | 'tv';
type MediaType = 'movie' | 'tv' | 'person';

type Genre = {
	id: number;
	name: string;
};

type Network = {
	display_priority: number;
	logo_path: string;
	provider_name: string;
	provider_id: number;
}

type Genres = {
	[Key in MediaPlatform]: Genre[];
};
type DataType = MovieType | TvType | PersonType

type PersonType = {
	id: number | null;
	profile_path: string | null;
	character: string | null;
	name: string | null;
	known_for_department: string | null;
	gender: 1 | 2 | null;
	birthday: string | null;
	place_of_birth: string | null;
	also_known_as: Array<string> | null;
	biography: string | null;
	popularity: number | null;
	adult: boolean | null;
	imdb_id: string | null;
	homepage: null | string;
};

type MovieType = {
	adult: boolean;
	backdrop_path: (string | null);
	belongs_to_collection: (null | Array<string>);
	budget: number;
	genres: Array<Genre>;
	homepage: (string | null);
	id: number;
	imdb_id: (string | null);
	original_language: string;
	original_title: string;
	overview: (string | null);
	popularity: number;
	poster_path: (string | null);
	production_companies: ProductionCompanies[];
	production_countries: ProductionCountries[];
	release_date: string;
	revenue: number;
	runtime: (number | null);
	spoken_languages: SpokenLanguages[];
	status: ('Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled');
	tagline: (string | null);
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

type TvType = {
	backdrop_path: (string | null);
	created_by: CreatedBy[];
	episode_run_time: Array<number>;
	first_air_date: string;
	genres: Array<Genre>;
	homepage: string;
	id: number;
	in_production: boolean;
	languages: Array<string>;
	last_air_date: string;
	last_episode_to_air: LastAiredEpisode[];
	name: string;
	next_episode_to_air: null;
	networks: Network[];
	origin_country: string | Array<string>;
	number_of_episodes: number;
	number_of_seasons: number;
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: (string | null);
	production_companies: ProductionCompanies[];
	production_countries: ProductionCountries[];
	seasons: SeasonType[];
	spoken_languages: SpokenLanguages[];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
};

type Data = {
	cast: PersonType[];
};
type ProductionCompanies = {
	name: string;
	id: number;
	logo_path: (string | null);
	origin_country: string;
};

type ProductionCountries = {
	iso_3166_1: string;
	name: string;
};

type SpokenLanguages = {
	iso_639_1: string;
	name: string;
};
type CreatedBy = {
	id: number;
	credit_id: string;
	name: string;
	gender: number;
	profile_path: (string | null);
};

type LastAiredEpisode = {
	air_date: string;
	episode_number: number;
	id: number;
	name: string;
	overview: string;
	production_code: string;
	season_number: number;
	still_path: (string | null);
	vote_average: number;
	vote_count: number;
};

type NetworksType = {
	name: string;
	id: number;
	logo_path: (string | null);
};

type SeasonsType = {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	season_number: number;
};

type SeasonType = {
	_id: string;
	air_date: string;
	episodes: EpisodesType[];
	name: string;
	overview: string;
	id: number;
	poster_path: string | null;
	season_number: number;
};

type EpisodesType = {
	air_date: string;
	episode_number: number;
	crew: CrewType[];
	guest_stars: GuestType[];
	id: number;
	name: string;
	overview: string;
	production_code: string;
	season_number: number;
	still_path: string;
	vote_average: number;
	vote_count: number;
};

type CrewType = {
	department: string;
	job: string;
	credit_id: string;
	adult: boolean | null;
	gender: 0 | 1;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string | null;
};

type GuestType = {
	credit_id: string;
	order: number;
	character: string;
	adult: boolean;
	gender: 0 | 1 | null;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: (string | null);
};

type TrailerType = {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
}

type CastType = {
	credit_id: string;
	original_name: string;
	id: number;
	genre_ids: Array<number>;
	character: string;
	name: string;
	profile_path: string;
	poster_path: string | null;
	vote_count: number;
	vote_average: number;
	popularity: number;
	episode_count: number;
	original_language: string;
	first_air_date: string;
	backdrop_path: string | null;
	overview: string;
	origin_country: Array<string>;
}
type KnownForType = {
	id: number;
	original_language: string;
	episode_count: number;
	overview: string;
	origin_country: Array<string>;
	original_name: string;
	genre_ids: Array<number>;
	name: string;
	media_type: string;
	poster_path: string | null;
	first_air_date: string
	vote_average: number;
	vote_count: number;
	character: string;
	backdrop_path: string | null;
	popularity: number;
	credit_id: string;
	original_title: string;
	video: boolean;
	release_date: string;
	title: string;
	adult: boolean;
}

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
// declare namespace App {
// 	interface Locals { }

// 	interface Platform { }

// 	interface Session { }

// 	interface Stuff { }
// }
