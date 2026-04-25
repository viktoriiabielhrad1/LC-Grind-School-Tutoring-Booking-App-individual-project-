<script>
    let { data } = $props();
</script>
<svelte:head>
            <title>Leaving Cert Grinds - My Bookings</title>
      <script src="https://kit.fontawesome.com/628c8d2499.js" crossorigin="anonymous"></script>

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css" type="text/css" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet">
</svelte:head>
<h1 class="unbounded">My Bookings</h1>

{#each data.bookings as b}
    <div>
        <p>{b.subject} - {b.level}</p>
        <p>{b.type}</p>
        {#if b.address}
            <p><strong>Address:</strong> {b.address}</p>
        {/if}
        <p><strong>Date/Time:</strong>
    {b.datetime ? new Date(b.datetime).toLocaleString() : 'N/A'}</p>
    <p>Price: €{b.price}</p>

</div>
{/each}<br><br>
<style>
.unbounded{
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
h1{
	margin-top: 100px;
}
h1,p{
	  text-align: center;
    color: white;
    text-shadow: 0 0 8px white;
 }
    div{
        text-align: center;
    max-width: 600px;
        margin: 0 auto;
        margin-top: 40px;
        padding: 20px;
        border: 2px solid #edc914ff;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.3);
        font-size: 18px;
        color: white;
         text-shadow: 0 0 8px white;
    }
    
    </style>
