<script>
    let { data } = $props();
</script>

<h1>My Bookings</h1>

{#each data.bookings as b}
    <div>
        <p>{b.subject} - {b.level}</p>
        <p>{b.type}</p>
        {#if b.address}
            <p><strong>Address:</strong> {b.address}</p>
        {/if}
        <p><strong>Date/Time:</strong>
    {b.datetime ? new Date(b.datetime).toLocaleString() : 'N/A'}</p>
    </div>
{/each}