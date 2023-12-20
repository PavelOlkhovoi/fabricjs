import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

export default {
  title: "Uiw/Uiw React",
};

export const UiwReact = () => {
  return (
    <div>
      <h1>Uiw React</h1>
    </div>
  );
};

export const UiwReactFirst = () => {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div>
      <div className="container">
        <MDEditor value={value} onChange={setValue} />
        <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
      </div>
    </div>
  );
};
