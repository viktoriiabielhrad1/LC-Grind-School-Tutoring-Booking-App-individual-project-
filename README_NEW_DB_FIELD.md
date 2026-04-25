# Adding a new dtaabase field (property) to the `user` table

Let's add an Integer field `yearsWithCompany` to the `user` table. This requires changes to our schema and seed code.



---

## 1. `src/lib/server/db/auth.schema.js`

Add `yearsWithCompany` as an integer column to the `user` table definition, after the existing `role` field:

```js
  role: text("role").default("ROLE_MEMBER").notNull(),
  yearsWithCompany: integer("years_with_company").default(0),
```

The full updated `user` table definition will look like this:

```js
export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" })
    .default(false)
    .notNull(),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .$onUpdate(() => new Date())
    .notNull(),
  balance: integer("balance").default(0),
  category: text("category").default(""),
  role: text("role").default("ROLE_MEMBER").notNull(),
  yearsWithCompany: integer("years_with_company").default(0),
});
```

---

## 2. Apply the Schema Change to the Database

After updating the schema file, push the change to the SQLite database:

```bash
npm run db:push
```

This uses `drizzle-kit push` to apply the schema diff directly to the database without generating a migration file. Alternatively, to generate and apply a migration file instead:

```bash
npm run db:generate
npm run db:migrate
```

---

## 3. `src/lib/server/seed.js`

Add `yearsWithCompany: u.yearsWithCompany ?? 0` to the `db.insert(user).values({...})` call inside `insertUsers()`:

```js
		dbInstance.insert(user).values({
			id,
			name:             u.name,
			email:            u.email,
			emailVerified:    false,
			image:            u.image ?? null,
			createdAt:        now,
			updatedAt:        now,
			balance:          u.balance,
			category:         u.category,
			role:             u.role,
			yearsWithCompany: u.yearsWithCompany ?? 0,
		}).run();
```

This is the only place the user insert logic lives. Both `resetDatabase()` (used by SvelteKit routes) and the root `seed.js` script ultimately call this function.

---

## 4. `src/lib/data/users.json`

Since we allow a default to zero about in `src/lib/server/seed.js`, we don't have to provide a value in our defaults users in  `src/lib/data/users.json`, but if we do add a value for `yearsWithCompany` in our seed data, it will be used when the database is reset.

So we can add a `yearsWithCompany` integer value to each user object.

```json
[
    {
        "name": "Matt",
        "email": "matt@tud.ie",
        "password": "password",
        "balance": 100,
        "category": "elite",
        "role": "ROLE_ADMIN",
        "image": "/images/default.svg",
        "yearsWithCompany": 10
    },
    {
        "name": "Joe",
        "email": "joe@apple.com",
        "password": "password",
        "balance": 0,
        "category": "bronze",
        "role": "ROLE_MEMBER",
        "image": "/images/default.svg",
        "yearsWithCompany": 2
    }
]
```

---

## Summary of Changes

| File | Change |
|---|---|
| `src/lib/server/db/auth.schema.js` | Add `yearsWithCompany: integer("years_with_company").default(0)` to the `user` table |
| *(terminal)* | Run `npm run db:push` to apply the schema change to the database |
| `src/lib/server/seed.js` | Add `yearsWithCompany: u.yearsWithCompany ?? 0` to the `user` insert in `insertUsers()` |

if we wish we can also update values in our `src/lib/data/users.json` file:

| File | Change |
|---|---|
|src/lib/data/users.json` | Add `"yearsWithCompany": <number>` to each user object |
