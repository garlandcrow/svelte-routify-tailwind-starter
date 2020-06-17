<script>
  import { Router } from '@sveltech/routify'
  import { routes } from '@sveltech/routify/tmp/routes'
  import GlobalStyles from './GlobalStyles.svelte'
</script>

<GlobalStyles />

<Router {routes} />
