const api = import.meta.env.VITE_API_KEY
const GENRES_TV_API = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api}&language-en-GB`;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET(): Promise<{ status: number; body: string; } | { status: number; }> {
	const response: Response = await fetch(GENRES_TV_API);
	const response_json: Media = await response.json();
	const tv_genres = response_json.genres
	if (response.ok) {
		return {
			status: 200,
			body: JSON.stringify({ tv_genres })
		}
	}
	return {
		status: 404
	}

}
