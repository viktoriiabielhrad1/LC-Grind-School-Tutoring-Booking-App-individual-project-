Step 1 — Ceating the global layout and adding role-based navigation
-

In this stage of the project I created the global layout for LC Grind School app using +layout.svelte. This file acts as the shared wrapper for every page in the app.

The layout includes:

a header containing the school logo and navigation

navigation is role-based - the layout reads the logged in user from data.user and automatically updates according to user's authentication state

a footer with copyright info

modern style css 

Step 2 — Building the Home Page with cookie banner and subject categories
After the layout, I created the Home Page. This page introduces the app and provides quick access to subjects and booking.
-

The home page includes:

A cookie consent banner that appears for new users and hides for one year after acceptance

Google Font “Unbounded” applied to headings and UI elements

A list of categories and subjects displayed on the homepage

A “Book a Grind” button for quick navigation

A heading and short introductory paragraph

Step 3 — Creating the Tutors Page (initial static version)
Next, I created the Tutors page. At first, this page was hardcoded with simple <h1> and <p> tags showing tutor name, subject, and bio.
-

This early version included:

Static tutor information

Simple layout for testing

Placeholder content until real tutor data was added later

Step 4 — Creating subjects.json and generating Subject Cards
-

I created subjects.json, which contains categories and subject names.
I wasn’t sure how the Subjects page should look, so I generated a reusable Subject Card component.

<script>
    let { name } = $props();
</script>

<div class="subject-card">
    <h3>{name}</h3>
    <a href="/subjects/{name}">View Details</a>
</div>
This component:

Receives a subject name as a prop

Displays the name inside a styled card

Provides a link to the dynamic subject details page

After creating the card, the main Subjects page loops through all subjects using {#each} and displays them as small boxes with a title and “View Details” link.

Step 5 — Creating the dynamic Subject Details page
-

Inside /routes/subjects/[subject], I created a dynamic route that loads detailed information for each subject.

This page imports subjectInfo.json, which contains:

Subject name

Description

Levels (Higher / Ordinary)

Topics

Pricing for online and home visit

<script>
    import { page } from '$app/stores';
    import subjectInfo from '$lib/data/subjectInfo.json';

    // @ts-ignore
    let subjectName = $derived($page.params.subject);

    let info = $derived(subjectName ? subjectInfo[subjectName] : undefined);

    function goToBookPage() {
        window.location.href = '/book';
    }
</script>
This code:

Reads the subject name from the URL ($page.params.subject)

Uses it to look up the correct entry in subjectInfo.json

Stores the subject’s full info (description, levels, topics, pricing)

Provides a button function to navigate to the booking page

Uses JSDoc + $derived to avoid TypeScript errors in a .svelte file

Step 6 — Authentication pages (login, logout, register, resetdb)
-

These pages were provided in the starter template.
I mainly:

Added styling

Ensured layout integration

Confirmed that role-based navigation updates correctly after login/logout

No major logic changes were needed here.

Step 7 — Creating the Booking Page and form logic
-

The /book route contains the booking form. It uses POST actions to submit data to the server.

<script>
    import subjects from '$lib/data/subjects.json';
    const allSubjects = Object.values(subjects).flat();
    const { form } = $props();
</script>
This code:

Imports all subjects from subjects.json

Flattens them into a single array for the subject dropdown

Receives form data from the server (used for validation errors)

Booking form features
Fields: name, email, subject, level, grind type, address (if home visit), date/time

Validation:

Required fields

Address required for home visit

Date must be in the future

Saves last booked subject to cookies

Calculates price using subjectInfo.json

Saves booking to the local SQLite database

Redirects to confirmation page

I asked AI for help here because of TypeScript errors and validation logic, and we resolved all issues cleanly.

Step 8 — Building the Confirmation Page
-

After submitting a booking, the user is redirected to /confirmation.

The confirmation page displays:

Subject

Level

Grind type

Date/time

Address (if provided)

Last booked subject (from cookies)

Price

Buttons: “Book Another Grind” and “Return Home”

A load function retrieves the cookie:

export function load({ cookies }) {
    return { lastSubject: cookies.get('lastSubjectBooked') };
}

Step 9 — Creating the My Bookings Page
-

Inside /routes/bookings, I created a page that shows all bookings for the logged‑in user.

This page:

Loads bookings from the database using Drizzle

Displays subject, level, grind type, address (if any), date/time, and price

Uses {#each} to loop through all user bookings

The booking schema file defines the table structure and is imported into the DB config.

Step 10 — Creating tutors.json and updating Tutors Page
-

Later, I created tutors.json containing:

Name

Subject

Title

Bio

Then I updated the Tutors page to dynamically display tutors instead of hardcoded HTML.

Step 11 — Building the Admin Dashboard
-

The Admin Dashboard allows admins to view and manage data.

This page includes:

Users table

Tutors table

Bookings table (with delete option)

Subjects & categories table

Clean table layout generated with AI assistance

Access restricted to users with role_admin

Logging in as Matt gives admin access; all other users have member_role.

Step 12 — Creating a custom error page
-

Following the provided materials, I created a custom error page that:

Shows a funny image for 404 errors

Displays a message for other errors

Uses the global layout styling

Step 13 — Final cleanup and preparation for submission
-

The final stage included:

Cleaning unused code

Ensuring consistent styling across all pages

Fixing all TypeScript warnings

Making final commits to GitHub

Writing the README (this document)