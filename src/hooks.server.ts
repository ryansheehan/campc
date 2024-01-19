import {sequence} from '@sveltejs/kit/hooks';
import {handleTheme} from '$lib/themes/theme.hook';

export const handle = sequence(
    handleTheme
);