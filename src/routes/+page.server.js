import { redirect } from '@sveltejs/kit';

export const load = ({ cookies }) => {
    return {
        showBanner: cookies.get('cookieConsent') !== 'accepted'
    };
};

export const actions = {
    acceptCookies: async ({ cookies }) => {
        cookies.set('cookieConsent', 'accepted', {
            path: '/',
            maxAge: 60 * 60 * 24 * 365
        });

        throw redirect(303, '/');
    }
};
