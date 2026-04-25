<script>
  
    import subjects from '$lib/data/subjects.json';
    const categories = Object.entries(subjects);

    
 let { data } = $props();
   
      function goToBookPage() {
    window.location.href = '/book';
  }
</script>

<svelte:head>
            <title>Leaving Cert Grinds - Online & Home Visits</title>
      <script src="https://kit.fontawesome.com/628c8d2499.js" crossorigin="anonymous"></script>

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css" type="text/css" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet">
</svelte:head>

{#if data.showBanner}

<div class="cookie-banner">
    <p>We use cookies to improve your experience.</p>
    <form method="POST" action="?/acceptCookies">
    <button type="submit">Accept</button>
</form>

</div>
{/if}

<div class = "home"><br>
    <h1 class="unbounded">Leaving Cert Grinds – Online & Home Visits</h1>
    <p class="unbounded">Expert tutors helping you achieve top results!</p>
</div>
<br>
{#each categories as [category, subjectList]}
<div class="dropdown">{category}
  <div class="dropdown-content">
    {#each subjectList as subject}
    <p id="subj">{subject}</p>
    {/each}
  </div>
</div>
<br>
{/each}
<div><br><br>
<button onclick={goToBookPage} class="bookLink" >Book a Grind</button>
</div>




<style>


/*https://www.w3schools.com/Css/css_dropdowns.asp - dropdown menu src*/
 p{
    font-size: 25px;
    margin-top: 40px;
    
 } 
 h1,p{
    color: white;
    text-shadow: 0 0 8px white;
 }
 button{
    font-size: 16px;
    padding: 10px;
      background-color: #4e4d4dff;
  border-radius: 12px;
  border: 2px solid #f9ecb8ff;
  color: white;
  text-shadow: 0 0 8px white;
 }  
 button:hover{
    opacity: 70%;
    cursor: pointer;
 }
.dropdown {
  position: relative;
  font-size: 20px;
  border: 2px solid #24386eff;
  background-color: #f9ecb8ff;
  border-radius: 12px;
  padding: 15px;
  margin-left: 40%;
  margin-right: 40%;
  
}

.dropdown-content {
  display: none;
  position: relative; 
  max-height: 0;
  left: 2%;
  background-color: #f9f9f9;
  max-width: 300px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  padding: 0 16px; 
  overflow: hidden;
  transition: max-height 0.25s ease;
}

.dropdown:hover .dropdown-content {
  display: block;
  max-height: 400px;
  padding: 12px 16px; 
  margin-bottom: 10px; 
}

div {
  text-align: center;
}
#subj{
    color: black;
    font-size: 20px;
}
.cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #333;
    color: white;
    padding: 15px;
    text-align: center;
}
.cookie-banner button {
    margin-left: 10px;
    padding: 8px 16px;
    cursor: pointer;
}
.unbounded{
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>



