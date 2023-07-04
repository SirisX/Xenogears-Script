import { useEffect, useState } from "react";
import "./App.css";
import { DefaultChapters } from "./Constants";
import { Chapter } from "./Types";

const App = () => {
  const [chapterText, setChapterText] = useState<string[]>([]);
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

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
  }, []);

  // Jump to certain spot in the page based on chapter number
  const handleGoToSection = (chapter: Chapter) => {
    window.location.replace(`/#chapter${chapter.number}`);
  };

  return (
    <div className="App">
      {showSidebar ? (
        <div className="sidebar">
          <div className="sidebar-header">
            <p>Nav</p>
            <p className="x-button" onClick={() => setShowSidebar(false)}>
              X
            </p>
          </div>
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
      ) : (
        <div
          className="sidebar"
          style={{ opacity: 0, pointerEvents: "none", left: "-290px" }}
        ></div>
      )}
      {showSidebar ? (
        ""
      ) : (
        <div
          className="sidebar-openbox"
          onClick={() => {
            showSidebar ? setShowSidebar(false) : setShowSidebar(true);
          }}
        >
          {showSidebar ? "" : <p className="open-nav">Nav</p>}
        </div>
      )}

      <div className="text-container" style={{ paddingLeft: showSidebar ? "180px" : "0"}}>
        {chapterText.map((chapter: string, index) => {
          return (
            <div
              className="chapter-text"
              id={`chapter${DefaultChapters[index].number}`}
            >
              <div className={`chapter-${index}`}>{chapter}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;