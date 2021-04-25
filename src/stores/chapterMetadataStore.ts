import { writable } from 'svelte/store';

async function loadChaptersMetadata(): Promise<ChapterMetadata[]> {
    const res = await fetch('./chapters/chapters.json');
    return await res.json();
}

interface ChapterStore {
    metadata: ChapterMetadata[];
    selectedIndex: number;
}

function createChapterStore() {
	const { subscribe, set, update } = writable<ChapterStore>({
        metadata: [],
        selectedIndex: null,
    });

    const setup = () => loadChaptersMetadata()
        .then((chaptersMetadata) => {
            set({
                metadata: chaptersMetadata,
                selectedIndex: 0
            });
        })
        .catch(console.error);

    setup();

	return {
		subscribe,
		selected: (chapterIndex: number) => update((store) => {
            store.selectedIndex = chapterIndex;
            return store;
        }),
		reset: setup
	};
}

const chapterStore = createChapterStore();

export default chapterStore;