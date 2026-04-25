# Using data about the logged-in user

Since `+layout.server.js` get details about the currently logged-in user (if someone is logged in), then we can use this in our layout Svelte file and our individual page Svelte files.

For example, we could use the text content of the user's `image` property to display the corresponding image file in `/static/images`

In a Svelte script we access the 'user' object from the `data` props, so `data.user` is our 'user' object.
- before attempting to access a property of a 'user' object, first test if a user is logged-in
  - `+layout.server.js` sets a Boolean property `isLoggedIn`
- once we've confirmed there is a user logged-in, you can access a property with `data.user.<propertyName>`
  - e.g. to get the `image` property of the logged-in user we write `data.user.image`

Here's how we could update out site layout Svelte script to show the image, as well as user's name, at the top of every page:

`/routes/+layout.svelte`

```javascript
<header>
    {#if data.isLoggedIn}
    You are logged in as: <strong>{data.user.name}</strong>
    <br>
        <img src={data.user.image} alt="user image" id="profile_image"/>

    ... as before
        
    {@render children()}
        
    <style>
        #profile_image {
            width: 50px;
        }
    </style>
```

the above will now display a 50px wide image of the user at the top of each page
- this is achieved by giving the image element an `id` of `profile_image` (`id="profile_image"`), 
- and then declaring a CSS style for the element with this `id` (`#profile_image { ... }`)


![screenshot showing Matt's user profile image](/screenshots/1_user_profile_image.png)


## structure of the 'user' table

The properties of each 'user' object you are most likely to use can be seen in the seed data JSON file at:
- `/lib/data/users.json`

e.g. here is the seed data for at 'Matt' user:

```json
	{
		"name": "Matt",
		"email": "matt@tud.ie",
		"password": "password",
		"balance": 100,
		"category": "elite",
		"role": "ROLE_ADMIN",
		"image": "/images/matt.png"
	}
```

There are a few other properties for each 'user' entity, such as cerated-at and updated-at datetimes, which you can see in file:
- `src/lib/server/db/auth.schema.js`

```javascript
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
        .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
    balance: integer("balance").default(0),
    category: text("category").default(""),
    role: text("role").default("ROLE_MEMBER").notNull(),
    });
```