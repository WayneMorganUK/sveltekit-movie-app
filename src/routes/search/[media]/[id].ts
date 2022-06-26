const api = import.meta.env.VITE_API_KEY;
/**
 * @type {import('@sveltejs/kit').Load}
 */

export async function get({ params }) {
    const api_url = `https://api.themoviedb.org/3/search/${params.media}?api_key=${api}&language=en-US&page=1&include_adult=false&query=${params.id}`
    const response = await fetch(api_url);
    const res = await response.json();
    const newdata = await res.results;
    const _total_pages = await res.total_pages;
    return {
        body: {
            data: newdata,
            total_pages: _total_pages,
            media_type: params.media
        }
    };
}