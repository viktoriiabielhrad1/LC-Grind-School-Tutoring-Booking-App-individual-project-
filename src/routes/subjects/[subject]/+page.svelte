<script>
    import { page } from '$app/stores';
    import subjectInfo from '$lib/data/subjectInfo.json';


    /** @type {keyof typeof subjectInfo | undefined} */
    
// @ts-ignore
let subjectName = $derived($page.params.subject);

    let info = $derived(subjectName ? subjectInfo[subjectName] : undefined);
    
    function goToBookPage() {
        window.location.href = '/book';
    }
</script>

<svelte:head>
    <title>{subjectName || 'Subject'} - Grind School</title>
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet">
</svelte:head>

{#if info}
    <div class="subject-info">
        <h1  class="unbounded">{subjectName}</h1>
        
        <section>
            <h2  class="unbounded">Description</h2>
            <p>{info.description}</p>
        </section>

        <section>
            <h2  class="unbounded">Available Levels</h2>
            <ul class="levels-list">
                {#each info.levels as level}
                    <li>{level}</li>
                {/each}
            </ul>
        </section>

        <section>
            <h2  class="unbounded">Topics Covered</h2>
            <ul class="topics-list">
                {#each info.topics as topic}
                    <li>{topic}</li>
                {/each}
            </ul>
        </section>
                <section>
    <h2 class="unbounded">Pricing</h2>

    <div class="pricing-box">
        <p><strong>Online Grind:</strong> €{info.pricing.online}</p>
        <p><strong>Home Visit:</strong> €{info.pricing.homeVisit}</p>
    </div>
</section>
<br> 
<button onclick={goToBookPage} class="bookLink" >Book a Grind</button>
    </div><br><br><br><br><br>
{:else}
    <div class="not-found">
        <h1  class="unbounded">{subjectName || 'Subject'}</h1>
        <p>No information available for this subject.</p>
    </div><br><br><br><br><br><br>
{/if}

<style>
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
    .subject-info, .not-found {
        max-width: 800px;
        margin: 0 auto;
        margin-top: 200px;
        padding: 20px;
        border: 2px solid #edc914ff;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.3);

    }

    h1 {
color: white;
    text-shadow: 0 0 8px white;
        margin-bottom: 20px;
        text-align: center;
    }

    h2 {
color: white;
    text-shadow: 0 0 8px white;
        margin-top: 25px;
        margin-bottom: 10px;
    }

    p {
        color: white;
        font-size: 20px;
        line-height: 1.6;
    }

    ul {
        list-style-type: disc;
        padding-left: 25px;
    }

    li {
        color: white;
        font-size: 20px;
        margin: 8px 0;
    }

    .not-found {
        text-align: center;
        color: white;
    }

    .not-found p {
        font-size: 18px;
  color: white;
    }
        .unbounded{
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>