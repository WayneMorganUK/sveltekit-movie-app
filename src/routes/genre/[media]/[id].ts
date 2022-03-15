const api = import.meta.env.VITE_API_KEY
/***
 * @type {import('@sveltejs/kit').Load}
 */

export async function get({ params }) {
    const api_url = `https://api.themoviedb.org/3/discover/${params.media}?api_key=${api}&with_genres=${params.id}&page=1`
    const response = await fetch(api_url)
    const res = await response.json()
    const newdata = await res.results
    const _total_pages = await res.total_pages
    return {
        body: {
            data: newdata,
            media_type: params.media,
            total_pages: _total_pages,
            genres: params.id
        }
    }
}
