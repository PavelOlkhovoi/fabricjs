import React from "react";
// import Editor from "react-markdown-editor-lite";
import MdEditor from "react-markdown-editor-lite";
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

export const MkdEditorWithMarkDownIt = () => {
  return (
    <MdEditor
      style={{ height: "500px" }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
    />
  );
};
