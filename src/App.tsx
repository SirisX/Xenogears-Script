import { useEffect, useState } from "react";
import "./App.css";
import { DefaultChapters, SIDEBAR_WIDTH } from "./Constants";
import { Chapter, UIChapter } from "./Types";
import fullScript from "./text/FULL_SCRIPT.txt";

const App = () => {
  const [chapterText, setChapterText] = useState<UIChapter[]>([]);
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
          isExpanded: true,
          text: englishText,
          japaneseText: jpText
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
  }

  const generateSection = (chapter: UIChapter, index: number) => {
    return (
      <div
        className={generateChapterClass(index)}
        id={`chapter${DefaultChapters[index].number}`}
      >
        {index > 3 && <button className="chapter-button" onClick={() => handleExpandChapter(index)}>{chapter.isExpanded ? "-" : "+"}</button>}
        {chapter.isExpanded ? <div className={`chapter-${index}`}>
          {showJapanese ? chapter.japaneseText : chapter.text}
          {index === 0 && (
            <p className="download-link" onClick={() => handleStartDownload()}>
              {showJapanese ? "フルスクリプトをダウンロード" : "Download Full Script" }
            </p>
          )}
        </div> : <div style={{ minWidth: "200px" }} className={`chapter-${index}`}>
            {chapter.name}
          </div>}
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
              //Hide certain chapters from the sidebar
              if (chapter.hideInSidebar) {
                return;
              }

              //Generates the sidebar Link
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
        {chapterText.map((chapter: UIChapter, index) => {
          return generateSection(chapter, index)
        })}
      </div>
    </div>
  );
};

export default App;
