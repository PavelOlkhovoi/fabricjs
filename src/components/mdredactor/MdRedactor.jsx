import React, { useState, useEffect } from "react";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";
import "./splitstyle.css";
import { simpleMdDemoText } from "./base64img";
import { DeliveredProcedureOutlined } from "@ant-design/icons";

const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

MdEditor.addLocale("de-DE", {
  btnHeader: "Überschrift",
  btnClear: "Löschen",
  btnBold: "Fett",
  btnItalic: "Kursiv",
  btnUnderline: "Unterstreichen",
  btnStrikethrough: "Durchgestrichen",
  btnUnordered: "Ungeordnete Liste",
  btnOrdered: "Ordered List",
  btnQuote: "Zitat",
  btnLink: "Link",
});
MdEditor.useLocale("de-DE");

const ViewMode = (props) => {
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
      <div
        className={isWriteActive ? "mode-btn-toogle-active" : "mode-btn-toogle"}
        onClick={handleClickWrite}
        title="Schreibmodus"
      >
        Write
      </div>
      <div
        className={
          isPreviewActive ? "mode-btn-toogle-active" : "mode-btn-toogle"
        }
        onClick={handleClickPreview}
        title="Vorschaumodus"
      >
        Preview
      </div>
    </div>
  );
};

ViewMode.defaultConfig = {};
ViewMode.align = "right";
ViewMode.pluginName = "viewmode";

MdEditor.use(ViewMode, {});

const SaveDocumentBtn = (props) => {
  const handleSaveDocument = () => {
    const mdDoc = props.editor.getMdValue();
    console.log("xxx mdDoc", { mdDoc });
    props.config.getDocFn();
  };

  return (
    <div>
      <span
      // className="button"
      >
        <DeliveredProcedureOutlined
          className="save-button"
          title="Dokument speichern"
          onClick={handleSaveDocument}
          style={{ marginTop: "6px", marginLeft: "5px", cursor: "pointer" }}
        />
      </span>
    </div>
  );
};

SaveDocumentBtn.defaultConfig = {};
SaveDocumentBtn.align = "left";
SaveDocumentBtn.pluginName = "savedoc";

MdEditor.use(SaveDocumentBtn, {});

const pluginsListSplited = [
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
  "link",
  "divider",
  "savedoc",
  //   "image",
];

const MdRedactor = ({
  mdDoc = simpleMdDemoText.mdDoc,
  getDocFn = () => console.log("getDocFn function"),
  width = "100%",
  height = "700px",
}) => {
  const [mdText, setMdText] = useState(mdDoc);

  SaveDocumentBtn.defaultConfig = {
    getDocFn,
  };

  const handleEditorChange = ({ html, text }) => {
    setMdText(text);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <MdEditor
        style={{ width, height }}
        plugins={pluginsListSplited}
        renderHTML={(text) => mdParser.render(text)}
        value={mdText}
        onChange={handleEditorChange}
        // onImageUpload={onImageUpload}
        shortcuts={true}
        view={{ menu: true, md: true, html: false }}
      />
    </div>
  );
};

export default MdRedactor;
