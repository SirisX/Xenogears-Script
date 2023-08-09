import "./Sidebar.css";
import { Chapter } from "./Types";
import { generateTableOfContents } from "./Utils";

interface SidebarProps {
  showSidebar: boolean;
  showJapanese: boolean;
  isDarkMode: boolean;
  setIsDarkMode: () => void;
  setShowJapanese: () => void;
  setShowSidebar: () => void;
}

const Sidebar = ({
  showJapanese,
  showSidebar,
  isDarkMode,
  setIsDarkMode,
  setShowJapanese,
  setShowSidebar,
}: SidebarProps) => {
  const generateChapterName = (chapter: Chapter) => {
    if (showJapanese) return chapter.japaneseName;
    return chapter.name;
  };

  const generateVisibleSidebar = () => {
    return (
      <div
        className="sidebar"
        style={{
          backgroundColor: isDarkMode ? "black" : "white",
          borderColor: isDarkMode ? "white" : "black",
        }}
      >
        <div className="sidebar-grid">{generateTableOfContents(isDarkMode, showJapanese)}</div>
      </div>
    );
  };

  const generateInvisibleSidebar = () => {
    return (
      <div
        className="sidebar"
        style={{ opacity: 0, pointerEvents: "none", left: "-390px" }}
      ></div>
    );
  };

  const generateOmegaButton = () => {
    return (
      <p
        onClick={() => setIsDarkMode()}
        className={showSidebar ? "switch-darkmode-open" : "switch-darkmode"}
        style={{ color: isDarkMode ? "white" : "black" }}
        data-umami-event={isDarkMode ? "Dark Mode Button" : "Light Mode Button"}
      >
        Ω
      </p>
    );
  };

  const generateJapaneseButton = () => {
    return showJapanese ? (
      <p
        onClick={() => setShowJapanese()}
        className={showSidebar ? "switch-language-open" : "switch-language"}
        style={{ color: isDarkMode ? "white" : "black" }}
        data-umami-event={"EN Button"}
      >
        EN
      </p>
    ) : (
      <p
        onClick={() => setShowJapanese()}
        className={showSidebar ? "switch-language-open" : "switch-language"}
        style={{ color: isDarkMode ? "white" : "black" }}
        data-umami-event={"JP Button"}
      >
        JP
      </p>
    );
  };

  const generateOpenButton = () => {
    return (
      <p
        className={showSidebar ? "x-button" : "quick-jump"}
        style={{
          color: isDarkMode ? "white" : "black",
          fontSize: "1.5rem",
        }}
        onClick={() => {
          setShowSidebar();
        }}
      >
        {showSidebar ? "»" : "»"}
      </p>
    );
  };

  return (
    <div
      className="Sidebar"
      style={{ backgroundColor: isDarkMode ? "black" : "white" }}
    >
      {showSidebar ? generateVisibleSidebar() : generateInvisibleSidebar()}
      <div className="sidebar-openbox">
        {generateOpenButton()}
        {generateJapaneseButton()}
        {generateOmegaButton()}
      </div>
    </div>
  );
};

export default Sidebar;
