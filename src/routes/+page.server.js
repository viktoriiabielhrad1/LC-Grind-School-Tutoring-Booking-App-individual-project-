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
// import { redirect } from '@sveltejs/kit';
//
// export const load = async (event) => {
// 	if (!event.locals.user) {
// 		return redirect(302, '/login');
// 	}
// 	return { user: event.locals.user };
// };