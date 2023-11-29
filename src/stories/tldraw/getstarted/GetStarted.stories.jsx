import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";

export default {
  title: "Stories/TldrawStart",
};

export const SimpleRedRectangle = () => {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw />
    </div>
  );
};
