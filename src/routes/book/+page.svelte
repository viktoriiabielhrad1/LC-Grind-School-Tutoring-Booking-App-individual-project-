<script>
    import subjects from '$lib/data/subjects.json';
    const allSubjects = Object.values(subjects).flat();


</script>
<svelte:head>
    <title>Book a Grind - Grind School</title>
</svelte:head><br>
<div class="form">
<form method="POST">

    <label for="name">Name</label><br>
    <input id="name" name="name" type="text" required><br>

    <label for="email">Email</label><br>
    <input id="email" name="email" type="email" required><br>

    <label for="subject">Subject</label><br>
    <select id="subject" name="subject" required>
    <option value="" disabled selected>-Select a subject-</option>
    {#each allSubjects as subject}
        <option value={subject}>{subject}</option>
    {/each}
    </select><br>

    <label for="type">Grind Type</label><br>
<select id="type" name="type"required>
    <option value="online">Online</option>
    <option value="home">Home Visit</option>
    </select><br>
   
     <label for="address">Address</label><br>
    <input id="address" name="address" type="text" placeholder="Your address (required for Home Visit)..."><br>


<label for="level">Level</label><br>
<select id="level" name="level" required>
    <option value="" disabled selected>-Select level-</option>
    <option value="higher">Higher</option>
    <option value="ordinary">Ordinary</option>
</select>

<br>
        <label for="datetime">Preferred Date/Time</label><br>
    <input id="datetime" name="datetime" type="datetime-local" required><br>

    <button type="submit">Confirm Booking</button><br>
</form>
</div>
<style>
    .form{
        text-align: center;
    max-width: 600px;
        margin: 0 auto;
        margin-top: 100px;
        padding: 20px;
        border: 2px solid #edc914ff;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.3);
        font-size: 20px;
        color: white;
         text-shadow: 0 0 8px white;
    }
    input, select{
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
    </style>