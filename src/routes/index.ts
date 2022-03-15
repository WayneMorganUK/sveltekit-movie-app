const api = import.meta.env.VITE_API_KEY;
/**
 * @type {import('@sveltejs/kit').Load}
 */

export async function get() {
    const api_url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api}&language=en-GB&page=1`;
    const response = await fetch(api_url);
    const res = await response.json();
    const _data = await res.results;
    const _total_pages = await res.total_pages;
    return {
        body: {
            data: _data,
            total_pages: _total_pages
        }
    }
}