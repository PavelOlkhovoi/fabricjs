import "@mdxeditor/editor/style.css";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { headingsPlugin } from "@mdxeditor/editor/plugins/headings";
export default {
  title: "MDXReact/MDX React",
};

export const MDXReact = () => {
  return <MDXEditor markdown="# Hello world" plugins={[headingsPlugin()]} />;
};
