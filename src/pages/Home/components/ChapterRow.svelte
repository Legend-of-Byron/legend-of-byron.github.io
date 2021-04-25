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

    const statusToDescription = {
        wip: 'Work in progress: the author has not completed this chapter and is completely subject to change'
    }

    let createdAtDistance: string;
    let createdAt: string;

    onMount(() => {
        const dateParsed = parseDate(chapterMetadata.createdAt);
        createdAt = dateParsed.dateFormatted;
        createdAtDistance = dateParsed.timeSincePublishedInWords;
    });
</script>

<a class="chapter-metadata" href={`/chapters/${chapterMetadata.key}`} use:link>
    <div>#{index}</div>
    <div title={statusToDescription[chapterMetadata.status]}>{chapterMetadata.title} ({chapterMetadata.status})</div>
    <div title={createdAt}>{createdAtDistance} ago</div>
</a>

<style>
    .chapter-metadata {
        display: flex;
        width: 100%;
        color: white;
    }

    .chapter-metadata > div:nth-child(2) {
        flex-grow: 1;
        margin-left: 8px;
    }
</style>