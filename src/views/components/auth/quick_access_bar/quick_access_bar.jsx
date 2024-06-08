import React from "react";
import QuickAccessBookmarks from "./quick_access_bookmarks";
import QuickAccessLanguages from "./quick_access_languages";
import QuickAccessTheme from "./quick_access_theme";

const QuickAccessBar = () => {
  return (
    <div className="quick_access_container">
      <div className="quick_access_wrapper">
        <QuickAccessBookmarks />
        <QuickAccessLanguages />
        <QuickAccessTheme />
      </div>
    </div>
  );
};

export default QuickAccessBar;
