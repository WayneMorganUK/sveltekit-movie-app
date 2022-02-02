import type { Theme } from '$lib/stores/theme'
import type { Writable } from 'svelte/store'
/** @type {import('@sveltejs/kit').GetSession} */

export type SessionData = { theme: Theme | null }
export type SessionStore = Writable<SessionData>

const getCookieValue = (cookie: string, name: string): string | null =>
    cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || null


export const getSession = ({ request }: { request: Request }) => {
    const theme = request.headers.get('cookie')
        ? (getCookieValue(request.headers.get('cookie'), 'theme') as Theme)
        : null

    return { theme }
}
