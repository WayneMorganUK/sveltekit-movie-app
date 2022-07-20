const api = import.meta.env.VITE_API_KEY
const GENRES_MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language-en-GB`;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET(): Promise<{ status: number; body: string; } | { status: number; }> {
	const response: Response = await fetch(GENRES_MOVIE_API);
	const response_json: Media = await response.json();
	const movie_genres: Genre[] = response_json.genres;
	if (response.ok) {
		return {
			status: 200,
			body: JSON.stringify({ movie_genres })
		}
	}
	return {
		status: 404
	}

}
