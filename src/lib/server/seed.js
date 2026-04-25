// src/lib/server/seed.js
// Resets the database to contain exactly 2 seed users.
// Can be imported and called from a SvelteKit route.

import { hashPassword } from 'better-auth/crypto';
import { db } from '$lib/server/db';
import { user, account, session, verification } from '$lib/server/db/auth.schema.js';
import seedUsers from '$lib/data/users.json';

// Deletes all rows from every auth table (order matters — FK constraints).
// Accepts a db instance so it can be called from outside SvelteKit (e.g. seed.js).
export function clearDatabase(dbInstance = db) {
	dbInstance.delete(verification).run();
	dbInstance.delete(session).run();
	dbInstance.delete(account).run();
	dbInstance.delete(user).run();
}

// Inserts all users from users.json and their credential accounts.
// Returns an array of the inserted email addresses.
// Accepts a db instance so it can be called from outside SvelteKit (e.g. seed.js).
export async function insertUsers(dbInstance = db) {
	for (const u of seedUsers) {
		const id = crypto.randomUUID();
		const now = new Date();
		const hashed = await hashPassword(u.password);

		dbInstance.insert(user).values({
			id,
			name:          u.name,
			email:         u.email,
			emailVerified: false,
			image:         u.image ?? null,
			createdAt:     now,
			updatedAt:     now,
			balance:       u.balance,
			category:      u.category,
			role:          u.role,
		}).run();

		dbInstance.insert(account).values({
			id:         crypto.randomUUID(),
			accountId:  id,
			providerId: 'credential',
			userId:     id,
			password:   hashed,
			createdAt:  now,
			updatedAt:  now,
		}).run();
	}

	return seedUsers.map((u) => u.email);
}

// Convenience wrapper used by SvelteKit routes.
export async function resetDatabase() {
	clearDatabase();
	return insertUsers();
}