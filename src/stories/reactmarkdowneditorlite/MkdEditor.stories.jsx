import React from "react";
// import Editor from "react-markdown-editor-lite";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";

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
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (data) => {
      resolve(data.target.result);
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
