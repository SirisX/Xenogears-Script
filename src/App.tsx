import { useEffect, useState } from "react";
import "./App.css";
import { DefaultChapters, SIDEBAR_WIDTH } from "./Constants";
import { Chapter } from "./Types";
import fullScript from "./text/FULL_SCRIPT.txt";

const App = () => {
  const [chapterText, setChapterText] = useState<string[]>([]);
  const [japaneseChapterText, setJapaneseChapterText] = useState<string[]>([]);

  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showJapanese, setShowJapanese] = useState<boolean>(false);

  const generateChapterClass = (index: number) => {
    switch (index) {
      case 0:
      case 1:
        return "chapter-text-centered";
      case 2:
        if (showJapanese) {
          return "chapter-text-intro-japanese";
        }
        return "chapter-text-intro";

      case 3:
        return "chapter-text-centered";
      default:
        return "chapter-text";
    }
  };

  // Load English Text
  useEffect(() => {
    Promise.all(
      DefaultChapters.map(async (chapter: Chapter, index) => {
        return await fetch(chapter.text)
          .then((r) => r.text())
          .then((text) => {
            return text;
          });
      })
    ).then((res) => {
      setChapterText(res);
    });

    //Load Japanese Text
    Promise.all(
      DefaultChapters.map(async (chapter: Chapter, index) => {
        if (!chapter.japaneseText) return "";

        return await fetch(chapter.japaneseText)
          .then((r) => r.text())
          .then((text) => {
            return text;
          });
      })
    ).then((res) => {
      setJapaneseChapterText(res);
    });
  }, []);

  // Jump to certain spot in the page based on chapter number
  const handleGoToSection = (chapter: Chapter) => {
    window.location.replace(`/#chapter${chapter.number}`);
  };

  const generateSection = (chapter: string, index: number) => {
    return (
      <div
        className={generateChapterClass(index)}
        id={`chapter${DefaultChapters[index].number}`}
      >
        <div className={`chapter-${index}`}>
          {chapter}
          {index === 0 && (
            <p className="download-link" onClick={() => handleStartDownload()}>
              {showJapanese ? "フルスクリプトをダウンロード" : "Download Full Script" }
            </p>
          )}
        </div>
      </div>
    );
  };

  const renderEnglish = () => {
    return chapterText.map((chapter: string, index) => {
      return generateSection(chapter, index)
    });
  };

  const renderJapanese = () => {
    return japaneseChapterText.map((chapter: string, index) => {
      return generateSection(chapter, index)
    });
  };

  const handleStartDownload = () => {
    var a = document.createElement("a");
    a.href = fullScript;
    a.download = `Xenogears_Fullscript_English`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="App">
      {showSidebar ? (
        <div className="sidebar">
          <div className="sidebar-header">
            <p></p>
            <p className="x-button" onClick={() => setShowSidebar(false)}>
              «
            </p>
          </div>
          <div className="sidebar-grid">
            {DefaultChapters.map((chapter: Chapter) => {
              return (
                <div
                  className="sidebar-link"
                  onClick={() => handleGoToSection(chapter)}
                >
                  {`${chapter.number > 0 ? `${chapter.number}-` : ""}${
                    chapter.name
                  }`}
                </div>
              );
            })}
          </div>
          {showJapanese ? (
            <p
              onClick={() => setShowJapanese(false)}
              className="switch-language-open"
            >
              EN
            </p>
          ) : (
            <p
              onClick={() => setShowJapanese(true)}
              className="switch-language-open"
            >
              JP
            </p>
          )}
        </div>
      ) : (
        <div
          className="sidebar"
          style={{ opacity: 0, pointerEvents: "none", left: "-340px" }}
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
            >
              EN
            </p>
          ) : (
            <p
              onClick={() => setShowJapanese(true)}
              className="switch-language"
            >
              JP
            </p>
          )}
        </div>
      )}

      <div
        className="text-container"
        style={{ paddingLeft: showSidebar ? `${SIDEBAR_WIDTH}` : "0" }}
      >
        {showJapanese ? renderJapanese() : renderEnglish()}
      </div>
    </div>
  );
};

export default App;
