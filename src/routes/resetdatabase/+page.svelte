<script>
	let { data } = $props();
</script>

<h1>Database Reset</h1>
<p>The database has been reset with the following users:</p>
<ul>
	{#each data.users as email}
		<li>{email} (password: <code>password</code>)</li>
	{/each}
</ul>
<a href="/login">Go to login</a>
<style>
	h1{
		text-align: center;
		color:white;
		text-shadow: 0 0 8px white;
	}
	p,ul{
		text-align: center;
		font-size: 18px;
		color: white;
	}
	a{
		display: block;
		text-align: center;
		margin-top: 20px;
		font-size: 18px;
		color: rgb(255, 255, 255);
		text-decoration: none;
	}
	a:hover{
		text-decoration: underline;
		cursor: pointer;
	}
</style>