import { useEffect, useState } from "react";
import "./ChapterSection.css";
import { DefaultChapters, SIDEBAR_WIDTH } from "./Constants";
import { Chapter, UIChapter } from "./Types";
import Sidebar from "./Sidebar";
import {
  generateChapterClass,
  generateTableOfContents,
  handleStartDownload,
} from "./Utils";

interface ChapterSectionProps {
  chapter: UIChapter;
  isDarkMode: boolean;
  showJapanese: boolean;
  index: number;
  expandChapter: (index: number) => void;
}

const ChapterSection = ({ chapter, isDarkMode, showJapanese, index, expandChapter }: ChapterSectionProps) => {

  const handleExpandChapter = (index: number) => {
    expandChapter(index);
  };

  return (
    <div
      className={generateChapterClass(index)}
      id={`chapter${DefaultChapters[index].number}`}
    >
      {chapter.isCollapsable && (
        <button
          className="chapter-button"
          onClick={() => handleExpandChapter(index)}
        >
          {chapter.isExpanded ? "-" : "+"}
        </button>
      )}
      <div
        className={chapter.isExpanded ? `chapter-visible` : `chapter-hidden`}
        style={{ color: isDarkMode ? "white" : "black" }}
      >
        {!chapter.hideTitle && (
          <h1 className="chapter-title-header">
            {showJapanese ? chapter.japaneseName : chapter.name}
          </h1>
        )}

        {showJapanese ? chapter.japaneseText : chapter.text}
        {index === 0 && (
          <p
            className="download-link"
            data-umami-event={
              showJapanese ? "Download Link (JP)" : "Download Link (EN)"
            }
            onClick={() => handleStartDownload(showJapanese)}
          >
            {showJapanese
              ? "フルスクリプトをダウンロード"
              : "Download Full Script"}
          </p>
        )}
        <div className="chapter-text-intro">
          {index === 1 && generateTableOfContents(isDarkMode, showJapanese, false)}
        </div>
      </div>
    </div>
  );
};

export default ChapterSection;
