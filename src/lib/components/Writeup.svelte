<script lang="ts">
    const {title, subtitle} = $$props
</script>

<svelte:head>
    <title>{title ? title : "Untitled Post"}</title>
</svelte:head>

<article class="max-w-2xl mx-auto p-8 prose">
    {#if title}
    <h1>{title}</h1>
    {/if}
    {#if subtitle}
    <h2>{subtitle}</h2>
    {/if}
    {#if title || subtitle}
    <div class="divider"/>
    {/if}
    <slot />
</article>
