import React, { useState, useEffect } from "react";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";
import "./splitstyle.css";
export default {
  title: "MKEditorSlpit/MkdEditorEditor",
};

const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

MdEditor.addLocale("de-DE", {
  btnHeader: "Überschrift",
  btnClear: "Löschen",
  btnBold: "Fett",
});
MdEditor.useLocale("de-DE");

const ViewMode = (props) => {
  console.log("xxx ViewMode", props.editor.config.canView);
  const [isWriteActive, setIsWriteActive] = useState(true);
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  const handleClickPreview = () => {
    props.editor.setView({
      md: false,
      menu: true,
      html: true,
    });
    setIsWriteActive(false);
    setIsPreviewActive(true);
  };
  const handleClickWrite = () => {
    props.editor.setView({
      md: true,
      menu: true,
      html: false,
    });
    setIsWriteActive(true);
    setIsPreviewActive(false);
  };

  return (
    <div>
      <button
        className={isWriteActive ? "mode-btn-toogle-active" : "mode-btn-toogle"}
        onClick={handleClickWrite}
        title="Schreibmodus"
      >
        Write
      </button>
      <button
        className={
          isPreviewActive ? "mode-btn-toogle-active" : "mode-btn-toogle"
        }
        onClick={handleClickPreview}
        title="Vorschaumodus"
      >
        Preview
      </button>
    </div>
  );
};

ViewMode.defaultConfig = {};
ViewMode.align = "right";
ViewMode.pluginName = "viewmode";

MdEditor.use(ViewMode, {});

const pluginsList = [
  "viewmode",
  "divider",
  "logger",
  "divider",
  "header",
  "font-bold",
  "font-italic",
  "font-underline",
  "font-strikethrough",
  "list-unordered",
  "list-ordered",
  "block-quote",
  "image",
  "link",
  // "full-screen",
];
function handleEditorChange({ html, text }) {
  console.log("handleEditorChange", html, text);
}
export const MkdSplitedEditor = () => {
  const demoValue = `
  * text
  * text
  * text
  * 
  1. text
  2. text
  3. text

`;
  return (
    <div>
      <MdEditor
        style={{ width: "1000px", height: "700px" }}
        plugins={pluginsList}
        renderHTML={(text) => mdParser.render(text)}
        value={demoValue}
        onChange={handleEditorChange}
        // onImageUpload={onImageUpload}
        shortcuts={true}
        view={{ menu: true, md: true, html: false }}
      />
    </div>
  );
};
