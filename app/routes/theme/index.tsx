import { ActionFunction, createCookie, redirect } from 'remix';
import { parseCookie } from '~/utils';

export const theme = createCookie('theme');

export const action: ActionFunction = async ({ request }) => {
    const cookie = await parseCookie(request, theme) || {};
    const formData = await request.formData();

    cookie.mode = formData.get('mode') || cookie.mode || 'light';

    return redirect(formData.get('redirect')?.toString() || '/', {
        headers: {
            'Set-Cookie': await theme.serialize(cookie),
        }
    })
}