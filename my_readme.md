Step 1 — Ceating the global layout and adding role-based navigation
-

In this stage of the project I created the global layout for LC Grind School app using +layout.svelte. This file acts as the shared wrapper for every page in the app.

The layout includes:
1. a header containing the school logo and navigation
2. main where page content is
3. a footer with copyright info
4. modern style css 
5. navigation is role-based - the layout reads the logged in user from data.user and automatically updates according to user's authentication state

