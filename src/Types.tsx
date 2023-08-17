export interface Chapter {
    number: number;
    name: string,
    japaneseName?: string;
    text: string,
    japaneseText: string;
    hideInSidebar?: boolean;
    hideInMainContents?: boolean;
    hideTitle?: boolean;
    isCollapsable?: boolean;
    defaultCollapsed?: boolean;
    isDiscText?: boolean;
}

export interface UIChapter {
    number: number;
    name: string,
    japaneseName: string,
    text: string,
    japaneseText: string;
    isExpanded: boolean;
    isCollapsable: boolean;
    hideTitle: boolean;
    isDiscText: boolean;
}