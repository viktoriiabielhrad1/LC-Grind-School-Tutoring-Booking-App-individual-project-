<script>
    // Svelte 5 rule: $props() must be a simple top-level initializer
    const props = $props();

    // Now safely extract your data
    const data = props.data;

    // Destructure your values
    const { bookings, users, tutors, subjects } = data;
</script>

<svelte:head>
    <title>Admin Dashboard</title>
     <script src="https://kit.fontawesome.com/628c8d2499.js" crossorigin="anonymous"></script>

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css" type="text/css" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="admin-container">
    <h1 class="unbounded" id="ad">Admin Dashboard</h1>

    <!-- BOOKINGS TABLE -->
    <section class="card">
        <h2 class="unbounded">All Bookings</h2>

        {#if bookings.length === 0}
            <p>No bookings found.</p>
        {:else}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Level</th>
                        <th>Type</th>
                        <th>Date/Time</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {#each bookings as b}
                        <tr>
                            <td>{b.name}</td>
                            <td>{b.email}</td>
                            <td>{b.subject}</td>
                            <td>{b.level}</td>
                            <td>{b.type}</td>
                            <td>{b.datetime}</td>
                            <td>
                                <form method="POST" action="?/deleteBooking">
                                    <input type="hidden" name="id" value={b.id}>
                                    <button class="delete-btn">X</button>
                                </form>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/if}
    </section>

    <!-- USERS TABLE -->
    <section class="card">
        <h2 class="unbounded">All Users</h2>

        {#if users.length === 0}
            <p>No users found.</p>
        {:else}
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {#each users as u}
                        <tr>
                            <td>{u.email}</td>
                            <td>{u.role}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/if}
    </section>

    <!-- TUTORS TABLE -->
    <section class="card">
        <h2 class="unbounded">All Tutors</h2>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                </tr>
            </thead>
            <tbody>
                {#each tutors as t}
                    <tr>
                        <td>{t.name}</td>
                        <td>{t.subject}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </section>

    <!-- SUBJECTS TABLE -->
    <section class="card">
        <h2 class="unbounded">Categories & Subjects</h2>

        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Subjects</th>
                </tr>
            </thead>
            <tbody>
                {#each Object.entries(subjects) as [category, list]}
                    <tr>
                        <td>{category}</td>
                        <td>{list.join(', ')}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </section>
</div>

<style>
#ad{
     color: white;
         text-shadow: 0 0 8px white;
}
.unbounded{
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
    .admin-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        color: #333;
    }

    h1 {
        text-align: center;
        margin-bottom: 30px;
        color: #24386e;
    }

    .card {
        background: #f9ecb8;
        padding: 20px;
        border-radius: 12px;
        margin-bottom: 30px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    h2 {
        margin-bottom: 15px;
        color: #24386e;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        background: white;
        border-radius: 10px;
        overflow: hidden;
    }

    th {
        background: #24386e;
        color: white;
        padding: 10px;
        text-align: left;
    }

    td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    tr:nth-child(even) {
        background: #f9f9f9;
    }

    .delete-btn {
        background: #edc914;
        border: none;
        padding: 6px 10px;
        border-radius: 6px;
        cursor: pointer;
        color: #333;
        font-weight: bold;
    }

    .delete-btn:hover {
        background: #0892e1;
        color: white;
    }
</style>

