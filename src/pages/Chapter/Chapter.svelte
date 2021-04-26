<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import type { Unsubscriber } from 'svelte/store';
    import { chapterMetadataStore } from '../../stores';
    import { link } from 'svelte-spa-router';
    import Alert from '../../components/Alert.svelte';
    import { WIP_ALERET } from './constants';
    import { shouldReload } from './helpers';
    import { RingLoader } from 'svelte-loading-spinners'
    export let params = { chapter: '' };
    let chapter: string;
    let chapterMetadata: ChapterMetadata | undefined;
    async function loadChapter(): Promise<string> {
        const cacheStrategy = shouldReload(chapterMetadata.key, new Date(chapterMetadata.updatedAt)) ? 'reload' : 'force-cache';
        console.log(cacheStrategy);
        const res = await fetch(`./chapters/${params.chapter}.html`, {cache: cacheStrategy});
        return await res.text();
    }

    $: cssVarStyles = '';

    let unsubscribe: Unsubscriber;
    onMount(() => {
        unsubscribe = chapterMetadataStore.subscribe((async ({metadata, selectedIndex}) => {
            if(metadata.length === 0) {
                console.warn('Metadata unavailable');
                return;
            }
            chapterMetadata = metadata[selectedIndex];
            cssVarStyles = `--background-image: url("${chapterMetadata.url}")`;
            chapter = await loadChapter();
        }));
    });

    onDestroy(() => {
        unsubscribe();
    })
</script>

<div id="container" style={cssVarStyles}>
    <a href="/" use:link>Legend of Byron</a>
    {#if chapterMetadata && chapterMetadata.status === 'wip'}
        <div>
            <Alert type={WIP_ALERET.type} title={WIP_ALERET.title} description={WIP_ALERET.description}/>
        </div>
    {/if}
    {#if chapter}
        <div id="chapter">
            {@html chapter}
        </div>
    {:else}
        <RingLoader size="128" color="rgb(232, 216, 189)" unit="px" duration="2s"></RingLoader>
    {/if}
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
        padding: 64px 0;
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
        box-sizing: border-box;
    }

    div#chapter {
        background-color: rgb(232, 216, 189);
        padding: 0 32px;
        padding-bottom: 32px;
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

