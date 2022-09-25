<script lang="ts">
     
    export let title: string = "";
    export let summary: string = "";
    export let contents: any[] = [];

</script>

<div class="gallery max-h-full">
    <h2 class="text-4xl">{title}</h2>
    <p>{summary}</p>

    <slot class="grid" />
</div>

<style>

</style>