const api = import.meta.env.VITE_API_KEY

export async function post(request: { body: { [x: string]: string } }): Promise<{ body: string; }> {
    //     // await new Promise(resolve => setTimeout(resolve, 1000))
    try {
        const api_url = `https://api.themoviedb.org/3/${request.body["media"]}/${request.body["id"]}?api_key=${api}&language=en-US`
        const res_mov = await fetch(api_url);
        const res = await res_mov.json()
        return {
            body: JSON.stringify({ res })
        }
    }
    catch (e) {
        console.log('error', e)
    }
}