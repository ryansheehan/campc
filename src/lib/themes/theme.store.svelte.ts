import {browser} from '$app/environment';
import {Theme, defaultTheme, cookieKey, themeAttr} from './theme.types';
import {createThemeCookieOptions} from './theme.cookie';
import {serialize} from 'cookie';

export {Theme} from './theme.types';

const setHtml = (theme: Theme) => {
    if(browser) {        
        const html = document.querySelector('html')! as HTMLElement;
        html.setAttribute(themeAttr, theme);                   
    }
}

let localTheme = defaultTheme;

if(browser) {
    const html = document.querySelector('html')! as HTMLElement;
    const attrTheme = html.getAttribute(themeAttr) ?? '';
    if (attrTheme && attrTheme in Theme) {
        localTheme = attrTheme as Theme;
    }
}

let _theme = $state<Theme>(localTheme);

const setTheme = (newTheme: Theme) => {    
    const currentTheme = _theme;    
    if (currentTheme !== newTheme) {
        setHtml(newTheme);        
        if(browser) {
            const opts = createThemeCookieOptions();
            document.cookie = serialize(cookieKey, newTheme, opts);
        }
        _theme = newTheme;     
    }
};

export const theme = {
    get current() { return _theme; },
    set current(t: Theme) { setTheme(t); }
};
