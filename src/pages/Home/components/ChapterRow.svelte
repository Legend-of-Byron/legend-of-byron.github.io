<script lang="ts">
import { onMount } from "svelte";

    export let chapterMetadata: ChapterMetadata;
    export let index: number;
    import { formatDistance, format } from 'date-fns';
    import { link } from 'svelte-spa-router';

    const parseDate = (dateString: string) => {
        const publishedAt = new Date(dateString);
        const timeSincePublishedInWords = formatDistance(publishedAt, new Date());
        const dateFormatted = format(publishedAt, 'dd/MM/yyyy');
        return {
            dateFormatted,
            timeSincePublishedInWords
        };
    }

    let publishedAtDistance: string;
    let publishedAt: string;

    onMount(() => {
        const dateParsed = parseDate(chapterMetadata.publishedAt);
        console.log(dateParsed);
        publishedAt = dateParsed.dateFormatted;
        publishedAtDistance = dateParsed.timeSincePublishedInWords;
    });
</script>

<a class="chapter-metadata" href={`/chapters/${chapterMetadata.key}`} use:link>
    <div>{index}</div>
    <div>{chapterMetadata.title}</div>
    <div title={publishedAt}>{publishedAtDistance} ago</div>
</a>

<style>
    .chapter-metadata {
        display: flex;
    }

    .chapter-metadata > div:nth-child(2) {
        flex-grow: 1;
        margin-left: 8px;
    }
</style>