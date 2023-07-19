export interface Chapter {
    number: number;
    name: String,
    text: string,
    japaneseText: string;
    hideInSidebar?: boolean;
}

export interface UIChapter {
    number: number;
    name: String,
    text: string,
    japaneseText: string;
    isExpanded: boolean;
}