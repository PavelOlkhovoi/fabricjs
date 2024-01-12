import React, { useState, useEffect, useRef } from "react";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";
import "./splitstyle.css";
import {
  image64,
  seconBase64,
  mdDoc,
  mockedMDData,
  newContent,
  simpleMdDemoText,
} from "./base64img";
import { nanoid } from "nanoid";
import {
  PictureFilled,
  SaveFilled,
  DeliveredProcedureOutlined,
} from "@ant-design/icons";
// import insert from "markdown-it-ins";

export default {
  title: "MdCompmonent/Md Editor Component Preparation",
  parameters: {
    options: {
      storybook: { font: { family: "Assistant, Helvetica, Roboto, Arial" } },
    },
  },
};

const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight(str, lang) {},
});

MdEditor.addLocale("de-DE", {
  btnHeader: "Überschrift",
  btnClear: "Löschen",
  btnBold: "Fett",
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
          title="Save"
          onClick={handleSaveDocument}
          style={{ marginTop: "6px", marginRight: "6px", cursor: "pointer" }}
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
  "image",
];

export const MdEditorComponentPreparation = ({
  mdDoc = simpleMdDemoText.mdDoc,
  getDocFn = () => console.log("getDocFn function"),
  width = "100%",
  height = "700px",
}) => {
  const mdEditorRef = React.useRef(null);
  const [mdText, setMdText] = useState(mdDoc);

  SaveDocumentBtn.defaultConfig = {
    getDocFn,
  };

  const handleEditorChange = ({ html, text }) => {
    setMdText(text);
  };

  useEffect(() => {}, []);
  const handleGetMdDocument = () => {
    if (mdEditorRef.current) {
      console.log("", mdEditorRef.current.getMdValue());
    }
  };
  const onImageUpload = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data) => {
        resolve(data.target.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const replaceWithUnderline = (text) => {
    const regex = /\+\+(.*?)\+\+/g;
    const replacedText = text.replace(regex, "<u>$1</u>");

    return replacedText;
  };

  return (
    <div>
      <MdEditor
        ref={mdEditorRef}
        style={{ width, height }}
        plugins={pluginsListSplited}
        renderHTML={(text) => mdParser.render(replaceWithUnderline(text))}
        value={mdText}
        onChange={handleEditorChange}
        onImageUpload={onImageUpload}
        shortcuts={true}
        view={{ menu: true, md: true, html: false }}
      />
    </div>
  );
};
