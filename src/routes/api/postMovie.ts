const api = import.meta.env.VITE_API_KEY

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }: { request: Request; }): Promise<{ status: number; body: string; } | { status: number; }> {
    const body = await request.json();
    const api_url = `https://api.themoviedb.org/3/${body["media"]}/${body["id"]}?api_key=${api}&language=en-US`
    const res_mov = await fetch(api_url);
    const res = await res_mov.json()
    if (res_mov.ok) {
        return {
            status: 200,
            body: JSON.stringify({ res })
        }
    }
    return {
        status: 404
    }

}
