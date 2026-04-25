<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>
<svelte:head>
            <title>Leaving Cert Grinds - Register</title>
      <script src="https://kit.fontawesome.com/628c8d2499.js" crossorigin="anonymous"></script>

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css" type="text/css" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet">
</svelte:head>
<h1 class="unbounded">Register</h1><div>
<form method="post" use:enhance>
	<br><label>
		Name<br>
		<input type="text" name="name" required />
	</label><br>
	<label>
		Email<br>
		<input type="email" name="email" required />
	</label><br>
	<label>
		Password<br>
		<input type="password" name="password" required />
	</label><br>
	<button>Register</button><br>
</form>
{#if form?.message}
	<p style="color: red">{form.message}</p>
{/if}
<p>Already have an account? <a href="/login">Login</a></p><br>
</div>
<style>
.unbounded{
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
h1{
	margin-top: 150px;
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
    input{
        width: 60%;
            padding: 10px;
    font-size: 18px;
    margin-bottom: 15px;
    border-radius: 8px;
    }
button{
     padding: 10px;
    font-size: 18px;
    margin-bottom: 15px;
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
 a{
	color: white;
	text-decoration: none;
 }
 a:hover{
	text-decoration: underline;
	cursor: pointer;
 }
    </style>
