import { useEffect, useState } from "react";
import "./App.css";
import { DefaultChapters } from "./Constants";
import { Chapter } from "./Types";

const App = () => {
  const [chapterText, setChapterText] = useState<string[]>([]);
  const [japaneseChapterText, setJapaneseChapterText] = useState<string[]>([]);

  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [showJapanese, setShowJapanese] = useState<boolean>(false);

  // Load all chapter text files
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

  const renderEnglish = () => {
    return chapterText.map((chapter: string, index) => {
      return (
        <div
          className={index == 0 ? "chapter-text-intro" : "chapter-text"}
          id={`chapter${DefaultChapters[index].number}`}
        >
          <div className={`chapter-${index}`}>{chapter}</div>
        </div>
      );
    });
  };

  const renderJapanese = () => {
    return japaneseChapterText.map((chapter: string, index) => {
      return (
        <div
          className={index == 0 ? "chapter-text-intro" : "chapter-text"}
          id={`chapter${DefaultChapters[index].number}`}
        >
          <div className={`chapter-${index}`}>{chapter}</div>
        </div>
      );
    });
  };

  return (
    <div className="App">
      {showSidebar ? (
        <div className="sidebar">
          <div className="sidebar-header" onClick={() => setShowSidebar(false)}>
            <p>Quick Jump</p>
            <p className="x-button">X</p>
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
        <div
          className="sidebar-openbox"
          onClick={() => {
            showSidebar ? setShowSidebar(true) : setShowSidebar(false);
          }}
        >
          {showSidebar ? "" : <p className="quick-jump">Quick Jump</p>}
        </div>
      )}
      {showJapanese ? (
        <p onClick={() => setShowJapanese(false)} className="switch-language">Show English</p>
      ) : (
        <p onClick={() => setShowJapanese(true)} className="switch-language">Show Japanese</p>
      )}

      <div
        className="text-container"
        style={{ paddingLeft: showSidebar ? "192px" : "0" }}
      >
        {showJapanese ? renderJapanese() : renderEnglish()}
      </div>
    </div>
  );
};

export default App;
