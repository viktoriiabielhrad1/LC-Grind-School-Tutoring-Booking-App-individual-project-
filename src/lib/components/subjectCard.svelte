<script>
    
    let { name } = $props();
</script>

<div class="subject-card">
    <h3>{name}</h3>
    <a href="/subjects/{name}">View Details</a>
</div>

<style>
    .subject-card {
        border: 2px solid #24386eff;
        background-color: #f9ecb8ff;
        border-radius: 12px;
        padding: 20px;
        text-align: center;
        transition: box-shadow 0.2s ease, opacity 0.2s ease;
    }

    .subject-card:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        opacity: 0.9;
    }

    h3 {
        margin: 0 0 10px 0;
        font-size: 20px;
        color: #24386eff;
    }

    a {
        color: #4e4d4dff;
        text-decoration: none;
        font-size: 16px;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
