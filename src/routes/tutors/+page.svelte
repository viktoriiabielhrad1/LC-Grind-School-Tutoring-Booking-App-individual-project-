<svelte:head>
            <title>Tutors - Grind School</title>
</svelte:head>

<script lang="ts">
    let { data }: { data: any } = $props();
</script>

<br><br>
{#each data.tutors as tutor}
<div class="tutors">
    <h1>{tutor.title}</h1>
    <p>{tutor.bio}</p>
</div>
{/each}
<br>

<style>
    .tutors{
        padding: 20px;
        border: 2px solid #edc914ff;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.3);
        margin-left: 150px;
        margin-right: 150px;
        margin-bottom: 40px;
    }
     h1 {
margin-left: 20px;
      color: white;
    text-shadow: 0 0 8px white;
        margin-bottom: 30px;
    }
    p{
    font-size: 25px;
    color: white;
    padding: 20px;
    }
    </style>