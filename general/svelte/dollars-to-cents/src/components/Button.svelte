<script>
</script>

<button class="button" on:click>
  <slot />
</button>

<style>
  button {
    cursor: pointer;
    padding: 5px 32px;
    font-weight: bold;
    font-size: large;
    border: 2px solid #4f4573;
    background-color: #4f4573;
    color: white;
    box-shadow: none;
  }

  button:hover {
    color: #4f4573;
    background: white;
    border: 2px solid #4f4573;
  }
</style>
