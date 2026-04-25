# Cache disabled (so each link/form is a new HTTP Request)


By default, SvelteKit acts as a Single Page Application (SPA): 
- after the first page load, it handles navigation client-side using its own router, which can cache `load()` data and intercept redirects before they reach the server.

To simplify scripting for detecting whether a user is logged-in or not, this project disables that behaviour globally via `src/routes/+layout.js`:

```js
export const csr = false;
```

Setting `csr = false` ("client-side rendering") turns off the SvelteKit client-side router for every page. The result is that the app behaves like a traditional server-rendered website:

- Every link click and form submission is a full HTTP request to the server
- Every `load()` function always runs fresh on the server — no stale cached data
- Redirects (e.g. `redirect(302, '/login')`) are real HTTP redirects followed by the browser natively
- No JavaScript is shipped to the browser at all

### Reverting to SvelteKit defaults

To restore normal SvelteKit SPA behaviour, simply delete the file `src/routes/+layout.js`. The default value of `csr` is `true`, so removing the file is all that is needed.

If you only want to disable caching on specific pages rather than globally, you can instead export `csr = false` from an individual `+page.js` file for just that route.

