import { useEffect, useState } from "react";
import "./App.css";
import { DefaultChapters } from "./Constants";
import React from "react";
import { Chapter } from "./Types";

const App = () => {
  // const [text, setText] = useState({});
  const [chapterText, setChapterText] = useState<string[]>([]);

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

  const handleGoToSection = (chapter: Chapter) => {
    window.location.replace(`/#chapter${chapter.number}`)
  }

  return (
    <div className="App">
      <div className="sidebar">
        {DefaultChapters.map((chapter: Chapter) => {
          return (
            <div className="sidebar-link" onClick={() => handleGoToSection(chapter)}>
              {`${chapter.number > 0 ? `${chapter.number}-` : ""}${chapter.name}`}
            </div>
          );
        })}
      </div>
      {chapterText.map((chapter: string, index) => {
        return (
          <div className="chapter-text" id={`chapter${DefaultChapters[index].number}`}>
            <div className={`chapter-${index}`}>{chapter}</div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
