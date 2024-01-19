import type {CookieSerializeOptions} from 'cookie';
import {cookieDuration} from './theme.types';

export function createThemeCookieOptions() {
    const expires = new Date();
    expires.setDate(expires.getDate() + cookieDuration);

    const httpOnly = false;
    const secure = false;
    const path = '/';

    const opts: CookieSerializeOptions & {path: string} = {expires, httpOnly, secure, path};

    return opts;
}