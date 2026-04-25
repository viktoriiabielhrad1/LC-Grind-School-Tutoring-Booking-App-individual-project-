<script>
    import subjects from '$lib/data/subjects.json';
    import SubjectCard from '$lib/components/subjectCard.svelte';

    const categories = Object.entries(subjects);
</script>

<svelte:head>
    <title>Subjects - Grind School</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet">
</svelte:head>

<h1 class="unbounded" >All Subjects</h1>

{#each categories as [category, subjectList]}
    <section class="category">
        <h2 class="unbounded">{category}</h2>
        <div class="subject-grid">
            {#each subjectList as subject}
                <SubjectCard name={subject} />
            {/each}
        </div>
    </section>
{/each}
<br>
<style>
    h1 {
        text-align: center;
      color: white;
    text-shadow: 0 0 8px white;
        margin-bottom: 30px;
    }

    h2 {
       color: white;
    text-shadow: 0 0 8px white;
        margin: 30px 0 15px 0;
        margin-left: 17px;
    }

    .category {
        margin-bottom: 20px;
    }

    .subject-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        padding: 0 40px;
    }
    .unbounded{
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>