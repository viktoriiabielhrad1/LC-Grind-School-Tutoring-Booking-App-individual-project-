  <script>
    import { page } from '$app/state';
    const statusCode = page.status;
  </script>
  <svelte:head>
            <title>Error</title>
      <script src="https://kit.fontawesome.com/628c8d2499.js" crossorigin="anonymous"></script>

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css" type="text/css" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet">
</svelte:head>
  {#if page.error}
    {#if statusCode == 404}
      <div class="error-container">
        <h1 class="unbounded">😕 Page Not Found (error 404)</h1>
        <p class="unbounded">The page you’re looking for doesn’t exist or has been moved.</p>
        <a href="/" class="unbounded">Go back to homepage</a>
      <br><br>
        <img src="/images/404.jpg" alt="this is not the page you are looking for">
      </div>
  
      {:else}
  
      <!-- Default error message for other statuses (we’ll expand this later) -->
      <div class="error-container">
        <h1 class="unbounded">Oops! Something went wrong</h1>
        <p class="unbounded">Status Code: {statusCode}</p>
        <p class="unbounded">Message: {page.error.message}</p>
      </div>
    {/if}
  {/if}
  <style>

 p{
    font-size: 20px;
    
 } 
 h1,p, a{
    color: white;
    text-shadow: 0 0 8px white;
 }

div {
    margin-top: 150px;
  text-align: center;
}

.unbounded{
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
a{
    text-decoration: underline;
}
a:hover {
    cursor: pointer;
    text-decoration: none;
}
a:visited{
    color: #edc914ff;
}
img{
    width: 400px;
    height: 300px;
}
</style>


