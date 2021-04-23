{
    const chaptersMetadata = [];
    const chaptersMap = new Map();

    let selectedChapter = null;

    const loadChapterContent = async () => {
        const {key} = selectedChapter;
        if(chaptersMap.has(key)) {
            console.info(`Chapter (${key}) has already been loaded`);
            return;
        }
        const chapterResponse = await fetch(`${document.location}chapters/${key}.html`);
        const chapterContent = await chapterResponse.text();
        chaptersMap.set(key, chapterContent);
        console.log(`Loaded new content chapter (${key})`);
    }

    const loadChaptersMetadata = async () => {
        const res = await fetch(`${document.location}chapters.json`);
        chaptersMetadata.push(...await res.json());
    } 

    const selectRelevantChapter = () => {
        // TODO: in future save last chapter read in localstorage and then load from that
        selectedChapter = chaptersMetadata[0];
    }

    const broadCastChapterMetadata = () => {
        broadcast(CUSTOM_EVENTS.CHAPTER_CHANGE, selectedChapter);
    }
    const broadCastChapterContent = () => {
        broadcast(CUSTOM_EVENTS.CHAPTER_CONTENT_CHANGE, chaptersMap.get(selectedChapter.key));
    }

    const findChapterIndex = () => {
        return chaptersMetadata.findIndex(({key}) => key === selectedChapter.key);
    }

    const broadCastChapter = () => {
        broadCastChapterMetadata();
        broadCastChapterContent();
    }
    const setChapterMetadataIndex = (newIndex) => {
        const {length} = chaptersMetadata;
        const nextChapter = chaptersMetadata[(newIndex + length) % length];
        if(!nextChapter) {
            console.error(`Unable to find next chapter with index ${newIndex}`);
            return;
        }
        selectedChapter = nextChapter;
    }

    window.addEventListener('DOMContentLoaded', async () => {
        await loadChaptersMetadata();
        selectRelevantChapter();
        await loadChapterContent();
        broadcast(CUSTOM_EVENTS.CHAPTERS_METADATA_LOADED, chaptersMetadata);
        broadCastChapter();

        subscribe('chapter-store', CUSTOM_EVENTS.CHAPTER_CHANGE_REQUEST, async ({detail}) => {
            selectedChapter = detail;
            await loadChapterContent();
            broadCastChapter();
        });

        subscribe('chapter-store', CUSTOM_EVENTS.CHAPTER_NEXT_CHANGE_REQUEST, async () => {
            const index = findChapterIndex();
            if(index === -1) {
                console.error(`Unable to find next chapter with key ${selectedChapter.key}`);
                return;
            }
            setChapterMetadataIndex(index + 1);
            await loadChapterContent();
            broadCastChapter();
        });

        subscribe('chapter-store', CUSTOM_EVENTS.CHAPTER_PREVIOUS_CHANGE_REQUEST, async () => {
            const index = findChapterIndex();
            if(index === -1) {
                console.error(`Unable to find previous chapter with key ${selectedChapter.key}`);
                return;
            }
            setChapterMetadataIndex(index - 1);
            await loadChapterContent()
            broadCastChapter();
        });
    });
}