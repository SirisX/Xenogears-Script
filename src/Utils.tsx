import { DefaultChapters } from "./Constants";
import { Chapter } from "./Types";
import fullScript from "./text/FULL_SCRIPT.txt";
import fullScriptJapanese from "./text/JP_FULL_SCRIPT.txt";

// Jump to certain spot in the page based on chapter number
export const handleGoToSection = (chapter: Chapter) => {
  window.location.replace(`/#chapter${chapter.number}`);
};

export const generateChapterName = (chapter: Chapter, showJapanese: boolean) => {
  if (showJapanese) return chapter.japaneseName;
  return chapter.name;
};

export const generateTableOfContents = (isDarkMode: boolean, showJapanese: boolean) => {
  return DefaultChapters.map((chapter: Chapter) => {
    //Hide certain chapters from the sidebar
    if (chapter.hideInSidebar) {
      return;
    }

    //Generates the sidebar Link
    return (
      <div
        className={isDarkMode ? "sidebar-link" : "sidebar-link-light"}
        // style={{ fontSize: showJapanese ? "0.8rem" : "1rem" }}
        onClick={() => handleGoToSection(chapter)}
      >
        {`${
          chapter.number > 0 ? `${chapter.number}. ` : ""
        }${generateChapterName(chapter, showJapanese)}`}
      </div>
    );
  });
};

export const handleStartDownload = (showJapanese: boolean) => {
  let a = document.createElement("a");

  if (showJapanese) {
    a.href = fullScriptJapanese;
    a.download = `ゼノギアス`;
  } else {
    a.href = fullScript;
    a.download = `Xenogears_Fullscript_English`;
  }

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const generateChapterClass = (index: number) => {
  switch (index) {
    case 0:
    case 1:
      return "chapter-text-centered";
    case 3:
      return "chapter-text-centered";
    default:
      return "chapter-text";
  }
};