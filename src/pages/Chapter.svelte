<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
import type { Unsubscriber } from 'svelte/store';
import { chapterMetadataStore } from '../stores';
    import { link } from 'svelte-spa-router';
    export let params = { chapter: '' };
    let chapter: string;

    async function loadChapter(): Promise<string> {
        const res = await fetch(`./chapters/${params.chapter}.html`, {cache: 'force-cache'});
        return await res.text();
    }

    $: cssVarStyles = '';

    let unsubscribe: Unsubscriber;
    onMount(async () => {
        chapter = await loadChapter();
        unsubscribe = chapterMetadataStore.subscribe((({metadata, selectedIndex}) => {
            cssVarStyles = `--background-image: url("${metadata[selectedIndex].url}")`;
            console.log(cssVarStyles)
        }));
    });

    onDestroy(() => {
        unsubscribe();
    })
</script>

<div id="container" style={cssVarStyles}>
    <a href="/" use:link>Legend of Byron</a>
    <div>
        {@html chapter}
    </div>
</div>

<style>

    a {
        position: absolute;
        top: 0;
        left: 0;
        padding: 8px 16px;
        background-color: rgba(0, 0, 0, 0.5);
        border-bottom-right-radius: 5px;
        color: white !important;

    }
    div#container {
        position: relative;
        padding-top: 64px;
        display: flex;
        flex-direction: column;
        text-align: justify;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        background-image: var(--background-image);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        min-height: 100vh;
        min-width: 100vw;
    }

    div#container > div {
        max-width: min(600px, 100vw);
        background-color: rgb(232, 216, 189);
        padding: 0 32px;
        border-radius: 5px;
        box-shadow: 0 0 16px black;
        min-height: 80vh;
    }

    #container :global(h2) {
        margin: 64px 0;
        font-family: 'Euphoria Script', cursive;
        font-size: 400%;
    }

    #container :global(*) {
        color: #654321;
    }
</style>

