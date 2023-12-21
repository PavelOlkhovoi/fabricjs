import "@mdxeditor/editor/style.css";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { headingsPlugin } from "@mdxeditor/editor/plugins/headings";

const MdxEditor = () => {
  return (
    <div style={{ width: "500px", height: "800px" }}>
      <MDXEditor markdown="# Hello world" plugins={[headingsPlugin()]} />
    </div>
  );
};

export default MdxEditor;
