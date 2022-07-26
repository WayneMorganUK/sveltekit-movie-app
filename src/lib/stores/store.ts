import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const current_page: Writable<number> = writable(1);
export const trailer_key: Writable<string> = writable('xyz');
export const video_site: Writable<string> = writable('');


export const media_type: Writable<MediaType> = writable('movie');

export const tv_network: Writable<Network[]> = writable([]);
export const selected: Writable<number | null> = writable();
export const show_name: Writable<string> = writable('');
export const season_count: Writable<number> = writable(0);
export const show_id: Writable<number> = writable(0);
export const data: Writable<DataType[]> = writable([])

export const tv_genres: Writable<Genre[]> = writable([]);
export const movie_genres: Writable<Genre[]> = writable([]);


export const createWritableStore = (key: string, startValue: any): any => {
  const { subscribe, set } = writable(startValue);

  return {
    subscribe,
    set,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(JSON.parse(json));
      }

      subscribe((current) => {
        localStorage.setItem(key, JSON.stringify(current));
      });
    },
  };
};

export const theme = createWritableStore('theme', { mode: 'dark' })