import { useEffect, useState } from "react";
import "./App.css";
import { DefaultChapters, SIDEBAR_WIDTH } from "./Constants";
import { Chapter, UIChapter } from "./Types";
import fullScript from "./text/FULL_SCRIPT.txt";

const App = () => {
  const [chapterText, setChapterText] = useState<UIChapter[]>([]);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showJapanese, setShowJapanese] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const generateChapterClass = (index: number) => {
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

  // Load all text files and chapters into state
  useEffect(() => {
    Promise.all(
      DefaultChapters.map(async (chapter: Chapter, index) => {
        const englishText = await fetch(chapter.text)
          .then((r) => r.text())
          .then((text) => {
            return text;
          });

        const jpText = await fetch(chapter.japaneseText)
          .then((r) => r.text())
          .then((text) => {
            return text;
          });

        const newUIChapter: UIChapter = {
          name: chapter.name,
          number: chapter.number,
          isExpanded: chapter.defaultCollapsed ? false : true,
          text: englishText,
          japaneseText: jpText,
        };

        return newUIChapter;
      })
    ).then((res) => {
      setChapterText(res);
    });
  }, []);

  // Jump to certain spot in the page based on chapter number
  const handleGoToSection = (chapter: Chapter) => {
    window.location.replace(`/#chapter${chapter.number}`);
  };

  const handleExpandChapter = (index: number) => {
    const newChapters = [...chapterText];
    newChapters[index].isExpanded = !newChapters[index].isExpanded;

    setChapterText(newChapters);
  };

  //   window.addEventListener('keydown', (e) => {
  //     if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70) || (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70) || (e.metaKey && e.keyCode === 70))) {

  //     }
  // })

  const generateChapterName = (chapter: Chapter) => {
    if (showJapanese) return chapter.japaneseName;
    return chapter.name;
  }

  const generateTableOfContents = () => {
    return DefaultChapters.map((chapter: Chapter) => {
      //Hide certain chapters from the sidebar
      if (chapter.hideInSidebar) {
        return;
      }

      //Generates the sidebar Link
      return (
        <div
          className={isDarkMode ? "sidebar-link" : "sidebar-link-light"}
          style={{ fontSize: showJapanese ? "0.8rem" : "1rem" }}
          onClick={() => handleGoToSection(chapter)}
        >
          {`${chapter.number > 0 ? `${chapter.number}. ` : ""}${generateChapterName(chapter)}`}
        </div>
      );
    });
  };

  const generateSection = (chapter: UIChapter, index: number) => {
    return (
      <div
        className={generateChapterClass(index)}
        id={`chapter${DefaultChapters[index].number}`}
      >
        {index > 3 && (
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
          {showJapanese ? chapter.japaneseText : chapter.text}
          {index === 0 && (
            <p className="download-link" onClick={() => handleStartDownload()}>
              {showJapanese
                ? "フルスクリプトをダウンロード"
                : "Download Full Script"}
            </p>
          )}
          <div className="chapter-text-intro">
            {index === 1 && generateTableOfContents()}
          </div>
        </div>
      </div>
    );
  };

  const handleStartDownload = () => {
    var a = document.createElement("a");
    a.href = fullScript;
    a.download = `Xenogears_Fullscript_English`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDisableDarkMode = () => {
    document.body.style.setProperty("background-color", "white")
    setIsDarkMode(false);
  };

  const handleEnableDarkMode = () => {
    document.body.style.setProperty("background-color", "black")
    setIsDarkMode(true);
  }

  return (
    <div
      className="App"
      style={{ backgroundColor: isDarkMode ? "black" : "white" }}
    >
      {showSidebar ? (
        <div
          className="sidebar"
          style={{ backgroundColor: isDarkMode ? "black" : "white", borderColor: isDarkMode ? "white" : "black" }}
        >
          <div className="sidebar-header">
            <p></p>
            <p
              style={{ color: isDarkMode ? "white" : "black" }}
              className="x-button"
              onClick={() => setShowSidebar(false)}
            >
              «
            </p>
          </div>
          <div className="sidebar-grid">{generateTableOfContents()}</div>
          {showJapanese ? (
            <p
              onClick={() => setShowJapanese(false)}
              style={{ color: isDarkMode ? "white" : "black" }}
              className="switch-language-open"
            >
              EN
            </p>
          ) : (
            <p
              onClick={() => setShowJapanese(true)}
              style={{ color: isDarkMode ? "white" : "black" }}
              className="switch-language-open"
            >
              JP
            </p>
          )}
          {isDarkMode ? (
            <p
              onClick={() => handleDisableDarkMode()}
              className="switch-darkmode-open"
              style={{ color: "white" }}
            >
              Ω
            </p>
          ) : (
            <p
              onClick={() => handleEnableDarkMode()}
              className="switch-darkmode-open"
              style={{ color: "black" }}
            >
              Ω
            </p>
          )}
        </div>
      ) : (
        <div
          className="sidebar"
          style={{ opacity: 0, pointerEvents: "none", left: "-390px" }}
        ></div>
      )}
      {showSidebar ? (
        ""
      ) : (
        <div className="sidebar-openbox">
          {showSidebar ? (
            ""
          ) : (
            <p
              className="quick-jump"
              style={{ color: isDarkMode ? "white" : "black", fontSize: "1.5rem" }}
              onClick={() => {
                showSidebar ? setShowSidebar(false) : setShowSidebar(true);
              }}
            >
              »
            </p>
          )}
          {showJapanese ? (
            <p
              onClick={() => setShowJapanese(false)}
              className="switch-language"
              style={{ color: isDarkMode ? "white" : "black" }}
            >
              EN
            </p>
          ) : (
            <p
              onClick={() => setShowJapanese(true)}
              className="switch-language"
              style={{ color: isDarkMode ? "white" : "black" }}
            >
              JP
            </p>
          )}
          {isDarkMode ? (
            <p
              onClick={() => handleDisableDarkMode()}
              className="switch-darkmode"
              style={{ color: "white" }}
            >
              Ω
            </p>
          ) : (
            <p
              onClick={() => handleEnableDarkMode()}
              className="switch-darkmode"
              style={{ color: "black" }}
            >
              Ω
            </p>
          )}
        </div>
      )}

      <div
        className="text-container"
        style={{ paddingLeft: showSidebar ? `${SIDEBAR_WIDTH}` : "0" }}
      >
        {chapterText.map((chapter: UIChapter, index) => {
          return generateSection(chapter, index);
        })}
      </div>
    </div>
  );
};

export default App;
