const loadChapterContent = async (key) => {
    const chapterResponse = await fetch(`${document.location}chapters/${key}.html`);
    return await chapterResponse.text();
}

const createChapterContent = (content) => {
    const chapterContainer = document.getElementById('chapter');
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
    li.addEventListener('click', () => onChapterLinkClick(chapter));
    return li;
}

let selectedChapter = '';
const onChapterLinkClick = async (chapter) => {
    if(selectedChapter === chapter.key) {
        console.info(`Chapter (${selectedChapter}) already loaded as content`);
        return;
    }
    try {
        const chapterContent = await loadChapterContent(chapter.key);
        createChapterContent(chapterContent);
        selectedChapter = chapter.key;
    } catch(err) {
        console.error(err);
        selectedChapter = '';
    }
}

const chapterMetadataLoader = async () => {
    const res = await fetch(`${document.location}chapters.json`);
    const chapters = await res.json();
    const chaptersContainer = document.getElementById('chapters');
    for(const chapter of chapters) {
        const li = createChapterLink(chapter);
        chaptersContainer.appendChild(li);
    }
}