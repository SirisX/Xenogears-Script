import { useEffect, useState } from 'react';
import './App.css';
import { DefaultChapters } from './Constants';
import React from 'react';
import { Chapter } from './Types';

const App = () => {
  // const [text, setText] = useState({});
  const [chapters, setChapters] = useState<string[]>([]);

  useEffect(() => {
    let chapterText: string[] = [];

    console.log(DefaultChapters);


    Promise.all(
      DefaultChapters.map(async (chapter: Chapter, index) => {
        return await fetch(chapter.text)
        .then(r => r.text())
        .then(text => {
          // setText(text);
          // chapterText[index] = text;
          return text
          // const newChapters = structuredClone(chapters);
          console.log(text);
          // newChapters.push(text);
       });
      })
    ).then((res) => {
      setChapters(res)
    })
  }, [])

  return (
    <div className="App">
      {/* <div className='sidebar'>

      </div> */}
      {chapters.map((chapter: string) => {
        console.log(chapter);
        return <div className='chapter-text'>
          {chapter}
        </div>
      })}
    </div>
  );
}

export default App;
