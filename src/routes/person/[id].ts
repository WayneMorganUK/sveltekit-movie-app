const api = import.meta.env.VITE_API_KEY;

/**
* @type {import('@sveltejs/kit').Load}
*/

export async function GET({ params }) {
    const api_url = `https://api.themoviedb.org/3/person/${params.id}?api_key=${api}&language=en-US`
    const res = await fetch(api_url)
    const _person = await res.json()

    const known_for_api = `https://api.themoviedb.org/3/person/${params.id}/combined_credits?api_key=${api}&language=en-US`

    const resp = await fetch(known_for_api)
    const data = await resp.json();
    const _knownFor = await data.cast;

    return {
        body: {
            person: _person,
            knownFor: _knownFor
        }
    };
}