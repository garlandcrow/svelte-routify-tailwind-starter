<script>
  export let homeText
</script>

<nav class="border-b border-red-300 flex items-center">
  <a href=".">{homeText}</a>
  <a href="about">about</a>
</nav>

<style>
  a {
    @apply block p-3;
    text-decoration: none;
  }

  a:hover {
    @apply bg-red-300;
  }
</style>
