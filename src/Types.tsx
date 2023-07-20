export interface Chapter {
    number: number;
    name: string,
    japaneseName?: string;
    text: string,
    japaneseText: string;
    hideInSidebar?: boolean;
    isCollapsable?: boolean;
    defaultCollapsed?: boolean;
}

export interface UIChapter {
    number: number;
    name: String,
    text: string,
    japaneseText: string;
    isExpanded: boolean;
    isCollapsable: boolean;
}