const api = import.meta.env.VITE_API_KEY;

/**
* @type {import('@sveltejs/kit').Load}
*/

export async function GET({ params }) {
    const api_url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${api}&language=en-US`
    const movie_res = await fetch(api_url)
    const movie = await movie_res.json();
    const _movie_details = await movie

    const trailer_api = `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${api}&language=en-US`
    const trailer_res = await fetch(trailer_api);
    const trailer = await trailer_res.json();
    const _trailer_details = trailer.results;

    const cast_api = `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${api}&language=en-US`

    const cast_res = await fetch(cast_api);
    const cast = await cast_res.json();
    const _cast_details = await cast.cast;
    return {
        body: {
            movie_details: _movie_details,
            trailer_details: _trailer_details,
            cast_details: _cast_details
        }
    };
}