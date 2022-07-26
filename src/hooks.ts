import type { Handle, GetSession } from '@sveltejs/kit';
import cookie from 'cookie';

export const getSession: GetSession = (event) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');
  const theme = cookies.theme || 'light';
  return {
    theme,
  };
};

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');
  const response = await resolve(event)
  event.locals.theme = cookies.theme || null;

  if (!cookies.theme) {
    const theme = event.request.headers.get('theme') || 'dark';
    response.headers.append('set-cookie', `theme=${theme};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`);
  }

  return response
};


