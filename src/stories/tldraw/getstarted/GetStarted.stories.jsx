import {
  Canvas,
  Tldraw,
  track,
  useEditor,
  useTLStore,
  createTLStore,
  defaultShapeUtils,
  stopEventPropagation,
} from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import { useEffect, useState, useCallback, useLayoutEffect } from "react";
import "./custom-ui.css";

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
export const TldrawHideUi = () => {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw hideUi />
    </div>
  );
};

export function CustomUiExample() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw hideUi>
        <Canvas />
        <CustomUi />
      </Tldraw>
    </div>
  );
}

const CustomUi = track(() => {
  const editor = useEditor();

  useEffect(() => {
    const handleKeyUp = (e) => {
      switch (e.key) {
        case "Delete":
        case "Backspace": {
          editor.deleteShapes(editor.selectedShapeIds);
          break;
        }
        case "v": {
          editor.setCurrentTool("select");
          break;
        }
        case "e": {
          editor.setCurrentTool("eraser");
          break;
        }
        case "x":
        case "p":
        case "b":
        case "d": {
          editor.setCurrentTool("draw");
          break;
        }
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <div className="custom-layout">
      <div className="custom-toolbar">
        <button
          className="custom-button"
          data-isactive={editor.currentToolId === "select"}
          onClick={() => editor.setCurrentTool("select")}
        >
          Select
        </button>
        <button
          className="custom-button"
          data-isactive={editor.currentToolId === "text"}
          onClick={() => editor.setCurrentTool("text")}
        >
          Text
        </button>
        <button
          className="custom-button"
          data-isactive={editor.currentToolId === "draw"}
          onClick={() => editor.setCurrentTool("draw")}
        >
          Pencil
        </button>
        <button
          className="custom-button"
          data-isactive={editor.currentToolId === "eraser"}
          onClick={() => editor.setCurrentTool("eraser")}
        >
          Eraser
        </button>
      </div>
    </div>
  );
});

function CustomShareZone() {
  return (
    <div
      style={{
        backgroundColor: "thistle",
        width: "100%",
        textAlign: "center",
        minWidth: "80px",
      }}
    >
      <p>Share Zone</p>
    </div>
  );
}

export const TldrawCustomShareZone = () => {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw topZone={<div>Top Zone</div>} shareZone={<CustomShareZone />} />
    </div>
  );
};

export const StoreEventsExample = () => {
  const [editor, setEditor] = useState();

  const setAppToState = useCallback((editor) => {
    setEditor(editor);
  }, []);

  const [storeEvents, setStoreEvents] = useState([]);

  useEffect(() => {
    if (!editor) return;

    function logChangeEvent(eventName) {
      setStoreEvents((events) => [eventName, ...events]);
    }

    // This is the fire hose, it will be called at the end of every transaction
    const handleChangeEvent = (change) => {
      if (change.source === "user") {
        // Added
        for (const record of Object.values(change.changes.added)) {
          if (record.typeName === "shape") {
            logChangeEvent(`created shape (${record.type})`);
          }
        }

        // Updated
        for (const [from, to] of Object.values(change.changes.updated)) {
          if (
            from.typeName === "instance" &&
            to.typeName === "instance" &&
            from.currentPageId !== to.currentPageId
          ) {
            logChangeEvent(
              `changed page (${from.currentPageId}, ${to.currentPageId})`
            );
          }
        }

        // Removed
        for (const record of Object.values(change.changes.removed)) {
          if (record.typeName === "shape") {
            logChangeEvent(`deleted shape (${record.type})`);
          }
        }
      }
    };

    editor.on("change", handleChangeEvent);

    return () => {
      editor.off("change", handleChangeEvent);
    };
  }, [editor]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "60vw", height: "100vh" }}>
        <Tldraw onMount={setAppToState} />
      </div>
      <div>
        <div
          style={{
            width: "40vw",
            height: "100vh",
            padding: 8,
            background: "#eee",
            border: "none",
            fontFamily: "monospace",
            fontSize: 12,
            borderLeft: "solid 2px #333",
            display: "flex",
            flexDirection: "column-reverse",
            overflow: "auto",
          }}
        >
          {storeEvents.map((t, i) => (
            <div key={i}>{t}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SelectedShapeIdsCount = track(() => {
  const editor = useEditor();
  console.log("xxx", editor.store.getSnapshot());
  return <div>Editor</div>;
});

export function GetStoreSnapshot() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw>
        <Canvas />
        <SelectedShapeIdsCount />
      </Tldraw>
    </div>
  );
}
export function LoadSnapshot() {
  const [store] = useState(() =>
    createTLStore({ shapeUtils: defaultShapeUtils })
  );
  const savedSnapshot = {
    store: {
      "document:document": {
        gridSize: 10,
        name: "",
        meta: {},
        id: "document:document",
        typeName: "document",
      },
      "page:page": {
        meta: {},
        id: "page:page",
        name: "Page 1",
        index: "a1",
        typeName: "page",
      },
      "shape:lKE1-S2dJCZcRkuMKZudy": {
        x: 211,
        y: 255,
        rotation: 0,
        isLocked: false,
        opacity: 1,
        meta: {},
        id: "shape:lKE1-S2dJCZcRkuMKZudy",
        type: "geo",
        props: {
          w: 161,
          h: 89,
          geo: "rectangle",
          color: "light-green",
          labelColor: "black",
          fill: "none",
          dash: "draw",
          size: "m",
          font: "draw",
          text: "",
          align: "middle",
          verticalAlign: "middle",
          growY: 0,
          url: "",
        },
        parentId: "page:page",
        index: "a1",
        typeName: "shape",
      },
      "asset:394162389": {
        meta: {},
        id: "asset:394162389",
        type: "image",
        typeName: "asset",
        props: {
          name: "chrome_VhzwrxVsEv.png",
          src: "data:image/png;base64,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T6YKxdLbUo5N9NJkK/2+9flZ30vLkvsrEUvImpylNmLb6neh30mjUtZ7pE300gS05O8OAA6ClOMprZRVhHtbyk899VTd63otJFzerJRNItpePUUNadtrujas669avmLFisNujwpvAQrloP8JdJ+yZKIZ2RK9xK/beO69914vKMlJw9if+tSn6rZdunSpl9edd95ZNyu5J9L2I7bcro9rH3WLkfZJ+2b728h7pe2vJubp9zZ58mTfw9UtTBqNCGdVN/IZeg/dTma3RM2ePdsNHDjQT7pLbg8A9VJWrUbKh1I6KUtieUk5K0ciZaGir+0lmHC5BKLlMfR6TC7qHUt8ei60es9/+tOfvAQlKy2/+uqrvcRMWPpdajtJUQ/t0HrqHWpY2d6zO2L7EVsePjxE+6OZ49bbbeS90vZXIww6odGQvZbre+v76/fVjJT1+9OJjD1gRLd96X5xfW5yewBIl7JdTkLKLZjwQFVBytB6qA3qlqjwnmkAOAhSjqfUUtb9vb0h5WZAyuVE1/x1zXrx4sV1y8Nr4OFyADgkZdVopFwfpNwAuu4quTaDtk17z1bGJoj1hORkj/QsG7rG/+1vf9tff9dQv67l65GcugZujzpN2w6gyiDleJAyNI1+1/o994QmltntV2VE7U3X5gcNGuRPQiTom2++2T/XN219gKqDlONBygAAkCtIOR6kDAAAuYKU40HKAACQK0g5HqQMAAC5gpTjQcoAAJArSDkepAwAALmClONBygAAkCtIOR6kDAAAuYKU40HKAACQK0g5HqQMAAC5gpTjQcoAAJArSDkepAwAALmClONBygAAkCtIOR6kDAAAuYKU40HKAACQK0g5HqQMAAC5gpTjqYyUAQCgWCDlw4OUAQDgmICUD09lpLxv3z4AACgASDkepAwAALmClONBygAAkCtIOR6kDAAAuYKU40HKAACQK0g5HqQMAAC5gpTjQcoAAJArSDkepAwAALmClONBygAAkCtIOR6kDAAAuYKU40HKAACQK0g5HqQMAAC5gpTjQcoAAJArSDkepAwAALmClONBygAAkCtIOR6kDAAAuYKU40HKAACQK0g5HqQMAAC5gpTjQcoAAJArSDkepAwAALmClONBygAAkCtIOR6kDAAAuYKU40HKAACQK0g5HqQMAAC5gpTjQcoZ2blzp5swYYK7/vrrXUdHhxs2bJjr06ePGzx4sJszZ47/LFtXP99zzz1uxIgRrq2tza83ZMiQuvWS76fXtd6oUaPcihUr3LZt29x1113n+vXr57npppv8NvYZYt26dW78+PHulFNO8YwdO9atXLmybh0AgKKBlONByhkxiZ599tleoHfccYdbuHChGz16tBfv4sWL/Xp79+51t956q5ekCXf+/Pnu4osv9ustWLAg+n7z5s1zF1xwgRs6dKhrb2933/zmN92iRYvctdde67edNWtWbX86OzvdgAED/OdrP2xfJPClS5fW1gMAKBpIOR6knJFQoqtWraot37hxo+8RT5s2zf97y5Ytvsf6ve99r9YrFhs2bHDDhw+vrRd7P0lYPeYbbrihtr16zZdddpmbNGmS27Vrl9u+fbsbM2aMmzJlitu9e3dtW60/depU/5rWseUAAEUCKceDlDNiEh03bpzbsWPHYcuFfg63CbH1JFLtV+z91AOWlMPernrfGsq2z1i9erUbOHCgmz59uluyZEkdWk+iX7NmTW17AIAigZTjQcoZick3tlyfvX79ei/Km2++uTZ8bevFtjMp67+2TKiHbevaOjH0OcuWLavbHgCgKCDleJByRmISTS5Xr1bXkHW9V4LUfyVkDWePHDmytl7s/RqRcnIdAIBWACnHg5QzEpNocvnatWv9jGxd2926dWttPbsubOvF3i+LlLu6ulz//v3dzJkz69YBAGgFkHI8SDkjMYkml5tUkzOgly9f7s4666zaerH3yyJlm+h10UUX+Qlkto6+ryaIabmGzsPtAQCKAlKOBylnJCbR5HL1lM877zw3aNAgN3fuXH9LlISqYezTTz+9tl7s/bJIWf+W9HX7k32ObomaOHGi69u3r5s9e7YfRg+3BwAoCkg5HqSckZhE05br4R+6z1gTriROPeBDtz3NmDHD3xal3m3s/bJKWehBIbr9SvdE67N0a5bul0bIAFBkkHI8SBkAAHIFKceDlAEAIFeQcjxIGQAAcgUpx4OUAQAgV5ByPEgZAAByBSnHg5QBACBXkHI8SBkAAHIFKceDlAEAIFeQcjxIGQAAcgUpx4OUAQAgV5ByPEgZAAByBSnHg5QBACBXkHI8SBkAAHIFKceDlAEAIFeQcjxIGQAAcgUpx4OUAQAgV5ByPEgZAAByBSnHg5QBACBXkHI8SBkAAHIFKceDlAEAIFeQcjxI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",
          w: 242.5,
          h: 129.5,
          mimeType: "image/png",
          isAnimated: false,
        },
      },
      "shape:HWlbboOO3H490U4r69mkH": {
        x: 281.25,
        y: 434.75,
        rotation: 0,
        isLocked: false,
        opacity: 1,
        meta: {},
        id: "shape:HWlbboOO3H490U4r69mkH",
        type: "image",
        props: {
          w: 242.5,
          h: 129.5,
          assetId: "asset:394162389",
          playing: true,
          url: "",
          crop: null,
        },
        parentId: "page:page",
        index: "a2",
        typeName: "shape",
      },
    },
    schema: {
      schemaVersion: 1,
      storeVersion: 4,
      recordVersions: {
        asset: {
          version: 1,
          subTypeKey: "type",
          subTypeVersions: {
            image: 2,
            video: 2,
            bookmark: 0,
          },
        },
        camera: {
          version: 1,
        },
        document: {
          version: 2,
        },
        instance: {
          version: 22,
        },
        instance_page_state: {
          version: 5,
        },
        page: {
          version: 1,
        },
        shape: {
          version: 3,
          subTypeKey: "type",
          subTypeVersions: {
            group: 0,
            text: 1,
            bookmark: 1,
            draw: 1,
            geo: 7,
            note: 4,
            line: 1,
            frame: 0,
            arrow: 1,
            highlight: 0,
            embed: 4,
            image: 2,
            video: 1,
          },
        },
        instance_presence: {
          version: 5,
        },
        pointer: {
          version: 1,
        },
      },
    },
  };

  useEffect(() => {
    store.loadSnapshot(savedSnapshot);
  });

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw store={store} />
      {/* <Tldraw /> */}
    </div>
  );
}
export function LoadAdvanceSnapshot() {
  const [store] = useState(() =>
    createTLStore({ shapeUtils: defaultShapeUtils })
  );
  const savedSnapshot = {
    store: {
      "document:document": {
        gridSize: 10,
        name: "",
        meta: {},
        id: "document:document",
        typeName: "document",
      },
      "page:page": {
        meta: {},
        id: "page:page",
        name: "Page 1",
        index: "a1",
        typeName: "page",
      },
      "shape:4EHGBSCallErdFvIFQCLN": {
        x: 41,
        y: 215,
        rotation: 0,
        isLocked: false,
        opacity: 1,
        meta: {},
        id: "shape:4EHGBSCallErdFvIFQCLN",
        type: "geo",
        props: {
          w: 193,
          h: 123,
          geo: "rectangle",
          color: "light-blue",
          labelColor: "black",
          fill: "solid",
          dash: "dashed",
          size: "m",
          font: "draw",
          text: "",
          align: "middle",
          verticalAlign: "middle",
          growY: 0,
          url: "",
        },
        parentId: "page:page",
        index: "a1",
        typeName: "shape",
      },
    },
    schema: {
      schemaVersion: 1,
      storeVersion: 4,
      recordVersions: {
        asset: {
          version: 1,
          subTypeKey: "type",
          subTypeVersions: {
            image: 2,
            video: 2,
            bookmark: 0,
          },
        },
        camera: {
          version: 1,
        },
        document: {
          version: 2,
        },
        instance: {
          version: 22,
        },
        instance_page_state: {
          version: 5,
        },
        page: {
          version: 1,
        },
        shape: {
          version: 3,
          subTypeKey: "type",
          subTypeVersions: {
            group: 0,
            text: 1,
            bookmark: 1,
            draw: 1,
            geo: 7,
            note: 4,
            line: 1,
            frame: 0,
            arrow: 1,
            highlight: 0,
            embed: 4,
            image: 2,
            video: 1,
          },
        },
        instance_presence: {
          version: 5,
        },
        pointer: {
          version: 1,
        },
      },
    },
  };

  useEffect(() => {
    store.loadSnapshot(savedSnapshot);
  });

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw store={store} />
      {/* <Tldraw /> */}
    </div>
  );
}

// The "OnTheCanvas" component is rendered on top of the canvas, but behind the UI.
function MyComponent() {
  const [state, setState] = useState(0);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 50,
          left: 50,
          width: "fit-content",
          padding: 12,
          borderRadius: 8,
          backgroundColor: "goldenrod",
          zIndex: 0,
          pointerEvents: "all",
          userSelect: "unset",
        }}
        onPointerDown={stopEventPropagation}
        onPointerMove={stopEventPropagation}
      >
        The count is {state}!{" "}
        <button onClick={() => setState((s) => s - 1)}>+1</button>
      </div>
      <div
        style={{
          position: "absolute",
          top: 150,
          left: 150,
          width: 128,
          padding: 12,
          borderRadius: 8,
          backgroundColor: "pink",
          zIndex: 99999999,
          pointerEvents: "all",
          userSelect: "unset",
        }}
        onPointerDown={stopEventPropagation}
        onPointerMove={stopEventPropagation}
      >
        The count is {state}!{" "}
        <button onClick={() => setState((s) => s + 1)}>+1</button>
      </div>
    </>
  );
}

// The "InFrontOfTheCanvas" component is rendered on top of the canvas, but behind the UI.
const MyComponentInFront = track(() => {
  const editor = useEditor();
  const { selectionRotatedPageBounds } = editor;

  if (!selectionRotatedPageBounds) return null;

  const pageCoordinates = editor.pageToScreen(selectionRotatedPageBounds.point);

  return (
    <div
      style={{
        position: "absolute",
        top: Math.max(64, pageCoordinates.y - 64),
        left: Math.max(64, pageCoordinates.x),
        padding: 12,
        background: "#efefef",
      }}
    >
      This does not scale with the zoom
    </div>
  );
});

const components = {
  OnTheCanvas: MyComponent,
  InFrontOfTheCanvas: MyComponentInFront,
  SnapLine: null,
};

export function GetStoreSnapshotWithComponent() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      {/* <Tldraw
        persistenceKey="things-on-the-canvas-example"
        components={components}
      >
        <Canvas />
        <SelectedShapeIdsCount />
      </Tldraw> */}
      <Tldraw
        persistenceKey="things-on-the-canvas-example"
        components={components}
      >
        <Canvas />
        <SelectedShapeIdsCount />
      </Tldraw>
    </div>
  );
}
