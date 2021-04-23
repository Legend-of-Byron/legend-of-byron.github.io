{
    const CHAPTER_LIST_ELEMENT_ID = 'chapter-list';
    const CHAPTER_NAVIGATION_ELEMENT_ID = 'chapter-navigation';
    const CHAPTER_NAVIGATION_TITLE_ELEMENT_ID = 'chapter-navigation-title';
    const CHAPTER_CONTENT_ELEMENT_ID = 'chapter-content';
    const CHAPTER_NAVIGATION_PREVIOUS_ELEMENT_ID = 'chapter-navigation-previous';
    const CHAPTER_NAVIGATION_NEXT_ELEMENT_ID = 'chapter-navigation-next';
    const CHAPTER_LIST_TOGGLE_ELEMENT_ID = 'chapter-list-toggle';
    const updateChapterContent = (content) => {
        const chapterContainer = document.getElementById(CHAPTER_CONTENT_ELEMENT_ID);
        chapterContainer.innerHTML = content;
    }

    const createDateElement = dateString => {
        const publishedAt = new Date(dateString);
        const timeSincePublishedInWords = dateFns.distanceInWords(publishedAt, new Date());
        const dateFormatted = dateFns.format(publishedAt, 'DD/MM/YYYY');
        return `<span title="${dateFormatted}">${timeSincePublishedInWords}</span>`;
    }

    const createChapterLink = (chapter) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${chapter.title}</span>${createDateElement(chapter.publishedAt)}
        `;
        li.addEventListener('click', () => broadcast(CUSTOM_EVENTS.CHAPTER_CHANGE_REQUEST, chapter));
        return li;
    }

    const updateNavigationChapterList = (chapters) => {
        const chapterListElement = document.getElementById(CHAPTER_LIST_ELEMENT_ID);
        chapterListElement.innerHTML = '';
        for(const chapter of chapters) {
            const li = createChapterLink(chapter);
            chapterListElement.appendChild(li);
        }
    }
    const updateNavigationTitle = (chapter) => {
        const chapterTitleElment = document.getElementById(CHAPTER_NAVIGATION_TITLE_ELEMENT_ID);
        chapterTitleElment.innerText = chapter.title;
    }

    subscribe(CHAPTER_NAVIGATION_ELEMENT_ID, CUSTOM_EVENTS.CHAPTERS_METADATA_LOADED, ({detail}) => {
        updateNavigationChapterList(detail);
    });

    subscribe(CHAPTER_NAVIGATION_ELEMENT_ID, CUSTOM_EVENTS.CHAPTER_CHANGE, ({detail}) => {
        updateNavigationTitle(detail);
    });

    subscribe(CHAPTER_NAVIGATION_ELEMENT_ID, CUSTOM_EVENTS.CHAPTER_CONTENT_CHANGE, ({detail}) => {
        updateChapterContent(detail);
    });

    window.addEventListener('DOMContentLoaded', () => {
        [
            [CHAPTER_NAVIGATION_PREVIOUS_ELEMENT_ID, CUSTOM_EVENTS.CHAPTER_PREVIOUS_CHANGE_REQUEST],
            [CHAPTER_NAVIGATION_NEXT_ELEMENT_ID, CUSTOM_EVENTS.CHAPTER_NEXT_CHANGE_REQUEST]
        ].forEach(([id, eventName]) => document.getElementById(id).addEventListener('click', () => broadcast(eventName)));

        const chapterListToggle = document.getElementById(CHAPTER_LIST_TOGGLE_ELEMENT_ID);
        chapterListToggle.addEventListener('click', () => {
            const chapterList = document.getElementById(CHAPTER_LIST_ELEMENT_ID);
            chapterList.classList.toggle('hidden');
            const iconImg = chapterListToggle.querySelector('img');
            iconImg.src = iconImg.src.replace(/more|less/, function(value) {
                switch(value) {
                    case 'less': return 'more';
                    case 'more': return 'less';
                    default:
                        console.error(`Unable to match chapter list toggle icon`);
                }
            });
        });
    });
}
