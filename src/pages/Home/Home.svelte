<script lang="ts">
    import ChapterList from "./components/ChapterList.svelte";
    import { chapterMetadataStore } from '../../stores';
    import { onMount } from "svelte";
import { onDestroy } from "svelte/internal";
import type { Unsubscriber } from "svelte/store";

    let chaptersMetadata: ChapterMetadata[] = [];
    let unsubscribe: Unsubscriber;

    onMount(() => {
        unsubscribe = chapterMetadataStore.subscribe(data => {
            chaptersMetadata = data.metadata;
        });
    });

    onDestroy(() => {
        unsubscribe();
    });

    const title = "Legend of Byron";
    const summary = `
        is a story set in the future of a young man named 
        Byron as he goes on a journey of self discovery.
    `;
</script>


<h1>{title}</h1>
<p>{summary}</p>

<ChapterList chaptersMetada={chaptersMetadata}/>