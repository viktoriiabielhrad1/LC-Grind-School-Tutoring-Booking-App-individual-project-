// src/lib/server/seed.js
// Resets the database to contain exactly 2 seed users.
// Can be imported and called from a SvelteKit route.

import { hashPassword } from 'better-auth/crypto';
import { db } from '$lib/server/db';
import { user, account, session, verification } from '$lib/server/db/auth.schema.js';
import seedUsers from '$lib/data/users.json';


export function clearDatabase(dbInstance = db) {
	dbInstance.delete(verification).run();
	dbInstance.delete(session).run();
	dbInstance.delete(account).run();
	dbInstance.delete(user).run();
}

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

export async function resetDatabase() {
	clearDatabase();
	return insertUsers();
}