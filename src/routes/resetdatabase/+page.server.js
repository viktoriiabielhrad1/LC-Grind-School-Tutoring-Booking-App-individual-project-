import { resetDatabase } from '$lib/server/seed.js';
import { auth } from '$lib/server/auth.js';

/** @type {import('./$types').PageServerLoad} */
export const load = async (event) => {
	if (event.locals.user) {
		await auth.api.signOut({ headers: event.request.headers });
	}

	const users = await resetDatabase();

	return { users, isLoggedIn: false, user: undefined };
};
