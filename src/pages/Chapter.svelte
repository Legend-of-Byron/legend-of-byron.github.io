<script lang="ts">
    import { onMount } from 'svelte';
import NavBar from '../components/NavBar.svelte';
import { title, version } from '../constants';
    export let params = { chapter: '' };
    let chapter: string;

    async function loadChapter(): Promise<string> {
        const res = await fetch(`./chapters/${params.chapter}.html`, {cache: 'force-cache'});
        return await res.text();
    }

    onMount(async () => {
        chapter = await loadChapter();
    });
</script>

<NavBar title={title} version={version}/>

<div contenteditable>
    {@html chapter}
</div>
