const api = import.meta.env.VITE_API_KEY
/***
 * @type {import('@sveltejs/kit').Load}
 */

export async function GET({ params }: { params: { id: number, season_number: number, episode_number: number } }) {
    const api_url = `https://api.themoviedb.org/3/tv/${params.id}/season/${params.season_number}/episode/${params.episode_number}?api_key=${api}&language=en-US`;
    const response = await fetch(api_url)
    const _episode_details = await response.json()
    return {
        body: {
            episode_details: _episode_details
        }
    }
}
