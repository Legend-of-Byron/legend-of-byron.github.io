<script lang="ts">
    export let chaptersMetada: ChapterMetadata[] = [];
    import ChapterRow from './ChapterRow.svelte';
</script>

<div>
    {#each chaptersMetada as chapterMetadata, index}
        <ChapterRow chapterMetadata={chapterMetadata} index={index}/>
    {/each}
</div>

<style>
    div {
        width: min(500px, 100vw);
        margin: 16px 4px;
    }
</style>