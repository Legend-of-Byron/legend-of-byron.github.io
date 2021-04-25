interface ChapterMetadata {
    key: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    status: 'wip' | 'unstable' | 'stable',
    url?: string;
}