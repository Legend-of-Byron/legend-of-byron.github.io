<script lang="ts">
    import ChapterList from "./components/ChapterList.svelte";
    import { chapterMetadataStore } from '../../stores';
    import { onMount } from "svelte";
    import { onDestroy } from "svelte/internal";
    import type { Unsubscriber } from "svelte/store";
    import NavBar from "../../components/NavBar.svelte";
    import { summary, title, version } from "../../constants";

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
</script>

<div id="container">
    <div>
        <NavBar title={title} summary={summary} version={version}/>
        <ChapterList chaptersMetada={chaptersMetadata}/>
    </div>
</div>



<style>
    div#container {
        position: relative;
        background-image: url(https://ik.imagekit.io/edx0qsxaq/elvenzone__XrR2Sl9ngy.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100vh;
        width: 100vw;
        overflow-y: hidden;
    }

    div#container > div {
        display: flex;
        flex-direction: column;
        justify-self: flex-start;
        align-items: center;
        height: 100%;
        color: white;
    }

    #meta {
        background-color: rgba(0, 0, 0, 0.5);
        text-align: center;
        padding-bottom: 16px;
        width: 100%;
    }
</style>

