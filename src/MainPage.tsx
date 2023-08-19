import { useEffect, useState } from "react";
import "./MainPage.css";
import { DefaultChapters, SIDEBAR_WIDTH } from "./Constants";
import { Chapter, UIChapter } from "./Types";
import Sidebar from "./Sidebar";
import ChapterSection from "./ChapterSection";

const MainPage = () => {
  const [chapterText, setChapterText] = useState<UIChapter[]>([]);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showJapanese, setShowJapanese] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [shouldDoBabyLoad, setShouldDoBabyLoad] = useState<boolean>(false);
  const [shouldLoadAllEnglish, setShouldLoadAllEnglish] = useState<boolean>(false);
  const [shouldLoadAllChapters, setShouldLoadAllChapters] = useState<boolean>(false);
  const [uiChapters, setUiChapters] = useState<{ [name: string]: UIChapter }>();
  const [englishChapters, setEnglishChapters] = useState<UIChapter[]>([]);

  const createUIChapter = (chapter: Chapter, englishText: string, jpText: string): UIChapter => {
    const newUIChapter: UIChapter = {
      name: chapter.name,
      japaneseName: chapter.japaneseName ?? chapter.name,
      number: chapter.number,
      text: englishText,
      japaneseText: jpText,
      isCollapsable: chapter.isCollapsable ?? false,
      hideTitle: chapter.hideTitle ?? false,
      isDiscText: chapter.isDiscText ?? false,
      isExpanded:
        chapter.isCollapsable && !!chapter.defaultCollapsed
          ? false
          : true,
    };
    return newUIChapter;
  }

  //Secret first load
  useEffect(() => {
    Promise.all(
      DefaultChapters.slice(0, 3).map(async (chapter: Chapter, index) => {
        const englishText = await fetch(chapter.text)
          .then((r) => r.text())
          .then((text) => {
            return text;
          });
        return createUIChapter(chapter, englishText, "");
      })
    ).then((res) => {
      setChapterText(res);
      setShouldDoBabyLoad(true);
    });
  }, []);


  // Second load, just a few chapters to get them started
  useEffect(() => {
    if (shouldDoBabyLoad) {
      Promise.all(
        DefaultChapters.slice(0, 12).map(async (chapter: Chapter, index) => {
          const englishText = await fetch(chapter.text)
            .then((r) => r.text())
            .then((text) => {
              return text;
            });
            return createUIChapter(chapter, englishText, "");
          })
      ).then((res) => {
        setChapterText(res);
        setTimeout(() => {
          setShouldLoadAllEnglish(true);
        }, 5);
      });
    }
  }, [shouldDoBabyLoad]);


  //Load all english chapters
  useEffect(() => {
    if (shouldLoadAllEnglish) {
      Promise.all(
        DefaultChapters.map(async (chapter: Chapter, index) => {
          const englishText = await fetch(chapter.text)
            .then((r) => r.text())
            .then((text) => {
              return text;
            });
            return createUIChapter(chapter, englishText, "");
          })
      ).then((res) => {
        setEnglishChapters(res);
        setChapterText(res);
        setShouldLoadAllChapters(true);
      });
    }
  }, [shouldLoadAllEnglish])

  // Full load
  useEffect(() => {
    if (shouldLoadAllChapters && englishChapters.length) {

      Promise.all(
        DefaultChapters.map(async (chapter: Chapter, index) => {
          const englishText = englishChapters[index].text;

          const jpText = await fetch(chapter.japaneseText)
            .then((r) => r.text())
            .then((text) => {
              return text;
            });

            return createUIChapter(chapter, englishText, jpText);
        })
      ).then((res) => {
        setChapterText(res);
      });
    }
  }, [englishChapters, shouldLoadAllChapters]);

  const handleExpandChapter = (index: number) => {
    const newChapters = [...chapterText];
    newChapters[index].isExpanded = !newChapters[index].isExpanded;

    setChapterText(newChapters);
  };

  const generateSection = (chapter: UIChapter, index: number) => {
    if (chapter.isDiscText) return <h1 className="chapter-title-header">{chapter.name}</h1>
    return (
      <ChapterSection
        chapter={chapter}
        index={index}
        isDarkMode={isDarkMode}
        showJapanese={showJapanese}
        expandChapter={handleExpandChapter}
      ></ChapterSection>
    );
  };

  const handleChangeDarkMode = () => {
    if (isDarkMode) {
      document.body.style.setProperty("background-color", "white");
      setIsDarkMode(false);
    } else {
      document.body.style.setProperty("background-color", "black");
      setIsDarkMode(true);
    }
  };

  const handleChangeLanguage = () => {
    if (showJapanese) {
      setShowJapanese(false);
    } else {
      setShowJapanese(true);
    }
  };

  const handleChangeSidebar = () => {
    if (showSidebar) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: isDarkMode ? "black" : "white" }}
    >
      <Sidebar
        isDarkMode={isDarkMode}
        showJapanese={showJapanese}
        setIsDarkMode={handleChangeDarkMode}
        setShowJapanese={handleChangeLanguage}
        showSidebar={showSidebar}
        setShowSidebar={handleChangeSidebar}
      ></Sidebar>
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

export default MainPage;
