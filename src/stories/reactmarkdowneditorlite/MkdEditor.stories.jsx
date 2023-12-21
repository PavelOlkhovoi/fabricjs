import React, { useState } from "react";
// import Editor from "react-markdown-editor-lite";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";
import { FormOutlined } from "@ant-design/icons";

export default {
  title: "MKDLite/MkdEditorEditor",
};

export const MkdEditorWithMarkDown = () => {
  const mdEditor = React.useRef(null);
  const [value, setValue] = React.useState("xxx");

  const handleClick = () => {
    if (mdEditor.current) {
      alert(mdEditor.current.getMdValue());
    }
  };

  const handleEditorChange = ({ html, text }) => {
    const newValue = text.replace(/\d/g, "");
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Get value</button>
      <MdEditor
        ref={mdEditor}
        value={value}
        style={{
          height: "500px",
        }}
        onChange={handleEditorChange}
        renderHTML={(text) => <ReactMarkdown children={text} />}
      />
    </div>
  );
};

const mdParser = new MarkdownIt(/* Markdown-it options */);

function handleEditorChange({ html, text }) {
  console.log("handleEditorChange", html, text);
}
function onImageUpload(file) {
  const imagePath =
    "https://github.com/PavelOlkhovoi/fabricjs/assets/55281206/4953c6d8-3e8d-4a0a-a320-2bb2c36c6ae5";
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (data) => {
      resolve(imagePath);
    };
    reader.readAsDataURL(file);
  });
}
// MdEditor.unuse(Plugins.Header);
// MdEditor.use(Plugins.AutoResize, {
//   min: 100, // min height
//   max: 200, // max height
// });

// const plugins = [
//   "header",
//   "image",
//   "divider",
//   "link",
//   "clear",
//   "divider",
//   "font-bold",
// ];

const plugins = [
  "header",
  "font-bold",
  "font-italic",
  "font-underline",
  "font-strikethrough",
  "list-unordered",
  "list-ordered",
  "block-quote",
  "block-wrap",
  "block-code-inline",
  "block-code-block",
  "table",
  "image",
  "link",
  "clear",
  "logger",
  "mode-toggle",
  "full-screen",
  "tab-insert",
];

MdEditor.addLocale("de-DE", {
  btnHeader: "Überschrift",
  btnClear: "Löschen",
  btnBold: "Fett",
});
MdEditor.useLocale("de-DE");

export const MkdEditorWithMarkDownIt = () => {
  const [value, setValue] = React.useState("Text from use state");
  return (
    <div>
      <MdEditor
        pl
        style={{ height: "500px" }}
        // value={value}
        plugins={plugins}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
        onImageUpload={onImageUpload}
      />
    </div>
  );
};

const Counter = (props) => {
  const [num, setNum] = useState(props.config.start);

  const handleClick = () => {
    // Call API, insert number to editor
    props.editor.insertText(num);
    // Update itself's state
    setNum(num + 1);
  };

  return (
    <span
      className="button button-type-counter"
      title="Zähler"
      onClick={handleClick}
    >
      {num}
    </span>
  );
};
// Define default config if required
Counter.defaultConfig = {
  start: 0,
};
Counter.align = "left";
Counter.pluginName = "counter";

// Usage:
MdEditor.use(Counter, {
  start: 10,
});

export const MkdEditorFirstPlagin = () => {
  const [value, setValue] = React.useState("Text from use state");
  return (
    <div>
      <MdEditor
        style={{ height: "500px" }}
        // value={value}
        // plugins={plugins}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
        onImageUpload={onImageUpload}
      />
    </div>
  );
};

const TodoList = (props) => {
  const [num, setNum] = useState(props.config.start);

  const handleClick = () => {
    // Call API, insert number to editor
    props.editor.insertText(`- [ ] ddddddddddddd`);
  };

  return (
    <span
      className="button button-type-counter"
      title="ToDo-Liste"
      onClick={handleClick}
    >
      <FormOutlined style={{ fontSize: "16px", marginTop: "6px" }} />
    </span>
  );
};
// Define default config if required
TodoList.defaultConfig = {
  start: 0,
};
TodoList.align = "left";
TodoList.pluginName = "todo";

// Usage:
MdEditor.use(TodoList, {
  start: 10,
});

const pluginsList = [
  "header",
  "font-bold",
  "font-italic",
  "block-quote",
  "link",
  "block-code-block",
  "divider",
  "list-ordered",
  "list-unordered",
  "todo",
  "divider",
  "image",
  // "logger",
  "mode-toggle",
  // "full-screen",
  // "tab-insert",
  ,
];

export const MkdEditorTodoListPlagin = () => {
  return (
    <div>
      <MdEditor
        style={{ height: "500px" }}
        plugins={pluginsList}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
        onImageUpload={onImageUpload}
        shortcuts={true}
        view={{ menu: true, md: true, html: false }}
      />
    </div>
  );
};
