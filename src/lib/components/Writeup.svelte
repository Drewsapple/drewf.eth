<script lang="ts">
    const {title, subtitle} = $$props
</script>

<article class="max-w-2xl mx-auto p-2">
    {#if title}
    <h1 class="text-2xl font-bold">{title}</h1>
    {/if}
    {#if subtitle}
    <h2 class="text-xl font-medium text-gray-500">{subtitle}</h2>
    {/if}
    <slot />
</article>
