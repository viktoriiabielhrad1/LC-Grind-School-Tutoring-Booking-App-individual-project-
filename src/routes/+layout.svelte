<script>
    import favicon from '$lib/assets/favicon.svg';

    let { children, data } = $props();


</script>



<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<header>
<img src="/images/logo.png" alt="Logo">
<nav>
    <a href="/">Home</a>
    |
    <a href="/subjects">Subjects</a>
    |
    <a href="/tutors">Tutors</a>
    |
    {#if data.role === 'ROLE_ADMIN'}
        <a href="/admin">Admin Dashboard</a>
        |
        <form method="post" action="/logout" style="display: inline;">
    <button type="submit" class="logout-link">Logout</button>
</form>

    {:else if data.isLoggedIn}
        <a href="/book">Book a Grind</a>
        |
        <a href="/bookings">My Bookings</a>
        |
        <form method="post" action="/logout" style="display: inline;">
    <button type="submit" class="logout-link">Logout</button>
</form>

    {:else}
    <a href="/book">Book a Grind</a>
        |
        <a href="/login">login</a>
    {/if}
</nav>




<hr>
</header>

   <div class="layout-bg">
   <hr>
    {@render children()}

</div>

<footer>
    <hr>
  <p>&copy; 2026 Leaving Cert Grind School</p>
</footer>

<style>
.logout-link {
  background: none;
  border: none;
  padding: 0.4rem 0;
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
  font-family: inherit; 
}

.logout-link:hover {
  color: #0892e1ff;
}

nav:has(a:hover) .logout-link:not(:hover) {
  opacity: 0.3;
}

    img{
        width: 80px;
        height:80px;
        padding: 5px;
    }
    header, footer{
       background-color: #4e4d4dff;
    }

    footer{
        min-height: 8vh;
        text-align: center;
    }
/*//https://freefrontend.com/css-menu/ --css nav style src*/
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 5px;
}

nav a {
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  padding: 0.4rem 0;
  transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

nav a:hover {
  color: #0892e1ff;
}

nav:has(a:hover) a:not(:hover) {
  opacity: 0.3;
}
hr{
    border: 2px solid #edc914ff;
}
footer p{
    margin-top: 30px;
    color: white;
}
.layout-bg {
    min-height: 100vh;
    background-image: url('/images/bg.jpg');
    background-repeat: repeat-y;
    background-position: top center;
    min-height: 100vh;
}


</style>