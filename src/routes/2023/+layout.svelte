<script lang="ts">
    import { base } from '$app/paths';
</script>
<a href="/{base}">&lt; Back home</a>
<main>
<slot></slot>
</main>

<style>
    main {
        padding: 1rem;
        max-width: 80rem;
    }
</style>