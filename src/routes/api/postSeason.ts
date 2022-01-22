const api = import.meta.env.VITE_API_KEY

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }: { request: Request; }): Promise<{ status: number; body: string; } | { status: number; }> {
	const body = await request.json();
	const api_url = `https://api.themoviedb.org/3/tv/${body["id"]}/season/${body["season_number"]}?api_key=${api}&language=en-US`;
	const res_api = await fetch(api_url);
	const res = await res_api.json()
	if (res_api.ok) {
		return {
			status: 200,
			body: JSON.stringify({ res })
		}
	}
	return {
		status: 404
	}

}
