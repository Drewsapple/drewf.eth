<script lang="ts">
    const {title, subtitle} = $$props
</script>

<article class="max-w-2xl mx-auto p-2 prose">
    {#if title}
    <h1>{title}</h1>
    {/if}
    {#if subtitle}
    <h2>{subtitle}</h2>
    {/if}
    <slot />
</article>
