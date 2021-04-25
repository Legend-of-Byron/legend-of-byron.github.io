<script lang="ts">
    import { onMount } from 'svelte';
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


<div contenteditable>
    {@html chapter}
</div>
