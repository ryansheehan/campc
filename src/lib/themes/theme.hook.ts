import type {Handle} from '@sveltejs/kit';
import {Theme, cookieKey, defaultTheme} from '$lib/themes/theme.types';
import {createThemeCookieOptions} from './theme.cookie';
import {theme} from './theme.store.svelte';

export const handleTheme:Handle = (async ({event, resolve}) => {
    const {cookies} = event;
    const storedTheme = cookies.get(cookieKey) ?? '';
    let currentTheme = defaultTheme;
    if(storedTheme && storedTheme in Theme) {
        currentTheme = storedTheme as Theme;
    } else {
        const opts = createThemeCookieOptions()
        cookies.set(cookieKey, currentTheme, opts);        
    }

    theme.current = currentTheme;

    return resolve(event, {
        transformPageChunk: ({html}) => html.replace('%theme%', currentTheme),
    });
}) satisfies Handle;
