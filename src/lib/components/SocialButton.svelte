<script lang="ts">
    export let link: string = "";
    export let iconPath: string;
    export let alt: string;
    export let tip: string = "";
</script>


<div class={`${tip != "" ? "tooltip tooltip-bottom" : ""} btn btn-ghost btn-square normal-case py-2`} data-tip={tip}>
    {#if link != ""}
    <a href={link}>
        <img alt={alt} src={iconPath} class="inline-block h-8 w-8" />
    </a>
    {:else}
    <img alt={alt} src={iconPath} class="inline-block h-8 w-8" />
    {/if}
</div>
