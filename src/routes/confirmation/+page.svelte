<script>
    let { data } = $props();

   let subject = $state('');
let type = $state('');
let level = $state('');
let datetime = $state('');
let lastBooked = $state('');


</script>



<svelte:head>
    <title>Booking Confirmed - Grind School</title>
</svelte:head>

<div class="confirmation-page">
    <div class="success-header">
        <h1 class="unbounded">Booking Confirmed!</h1>
        <p>Your grind has been successfully scheduled.</p>
    </div>

    <div class="summary-box">
        <h2>Booking Summary</h2>
        <div class="summary-item">
            <span class="label">Subject:</span>
            <span class="value">{subject || 'N/A'}</span>
        </div>
        <div class="summary-item">
            <span class="label">Level:</span>
            <span class="value">{level || 'N/A'}</span>
        </div>
        <div class="summary-item">
            <span class="label">Grind Type:</span>
            <span class="value">{type === 'home' ? 'Home Visit' : 'Online'}</span>
        </div>
        <div class="summary-item">
            <span class="label">Date/Time:</span>
            <span class="value">{datetime || 'N/A'}</span>
        </div>
        <div class="summary-item">
            <span class="label">Last Booked Subject:</span>
            <span class="value">{lastBooked || 'N/A'}</span>
        </div>
    </div>

    <div class="nav-buttons">
        <a href="/book" class="btn">Book Another Grind</a>
        <a href="/" class="btn">Return Home</a>
    </div>
</div>

<style>
    .confirmation-page {
        max-width: 600px;
        margin: 40px auto;
        padding: 20px;
        text-align: center;
    }

    .success-header {
        margin-bottom: 30px;
    }

h1 {
     color: white;
  text-shadow: 0 0 8px white;
        font-size: 36px;
        margin-bottom: 10px;
    }

    .success-header p {
        font-size: 18px;
        color: white;
          text-shadow: 0 0 8px white;
    }

    .summary-box {
        background-color: #f9ecb8ff;
        border: 2px solid #24386eff;
        border-radius: 12px;
        padding: 25px;
        text-align: left;
        margin-bottom: 30px;
    }

    .summary-box h2 {
        color: #24386eff;
        margin-bottom: 20px;
        text-align: center;
    }

    .summary-item {
        margin: 15px 0;
        font-size: 16px;
    }

    .label {
        font-weight: bold;
        color: #4e4d4dff;
    }

    .value {
        margin-left: 10px;
        color: #24386eff;
    }

    .nav-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .btn {
        padding: 12px 24px;
        background-color: #4e4d4dff;
        text-decoration: none;
        border-radius: 12px;
        font-size: 16px;
        transition: opacity 0.2s ease;
        border: 2px solid #f9ecb8ff;
        color: white;
        text-shadow: 0 0 8px white;
    }

    .btn:hover {
        opacity: 0.8;
    }
        .unbounded{
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>