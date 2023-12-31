import {
  Excalidraw,
  excalidrawAPI,
  MainMenu,
  Sidebar,
  Footer,
  useHandleLibrary,
  exportToCanvas,
  getCommonBounds,
} from "@excalidraw/excalidraw";
import { useEffect, useState } from "react";
import LightsIcons from "/traffic-light-svgrepo-com.svg";
import SinnbildFußganger from "/Sinnbild_Fußgänger.svg";
import WarningIcons from "/warning-svgrepo-com.svg";
// import SinnbildIcons from "/Sinnbild_Kfz.svg";
import {
  storedDataFromConsole,
  trafficLightIcon,
} from "../excalidraw/getstarted/dataFromExcalidraw";
import { partialImageElement, imageWithTestId } from "./elementsgenerator";
import { nanoid } from "nanoid";

export default {
  title: "Stories/ExcalidrawLearn",
};
export const PropsexcalidrawAPI = () => {
  return (
    <>
      <div style={{ height: "700px" }}>
        <Excalidraw />
      </div>
    </>
  );
};
export const PropsInitialDataWithCustomData = () => {
  const customData = {
    type: "rectangle",
    id: "oDVXy8D6rom3H1-LLH2-f",
    x: 523,
    y: 152,
    width: 360,
    height: 282,
    customData: { customId: "162" },
  };

  return (
    <>
      <div style={{ height: "700px" }}>
        <Excalidraw initialData={{ elements: [customData] }} />
      </div>
    </>
  );
};
export const ExcalidrawAPIResetScene = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const customData = {
    type: "rectangle",
    id: "oDVXy8D6rom3H1-LLH2-f",
    x: 523,
    y: 152,
    width: 360,
    height: 282,
    customData: { customId: "162" },
  };
  const resetScene = () => {
    excalidrawAPI.resetScene();
  };
  return (
    <>
      <div style={{ height: "700px" }}>
        <button onClick={resetScene}>Reset Scene</button>
        <Excalidraw
          initialData={{ elements: [customData] }}
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
        />
      </div>
    </>
  );
};

export const ExcalidrawAPISetActiveTool = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const customData = {
    type: "rectangle",
    id: "oDVXy8D6rom3H1-LLH2-f",
    x: 523,
    y: 152,
    width: 360,
    height: 282,
    customData: { customId: "162" },
  };
  const SetActiveToolHandler = () => {
    excalidrawAPI.setActiveTool({ type: "diamond" });
  };
  return (
    <>
      <div style={{ height: "700px" }}>
        <button onClick={SetActiveToolHandler}>Set Active Tool</button>
        <Excalidraw
          initialData={{ elements: [customData] }}
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
        />
      </div>
    </>
  );
};
export const ExcalidrawAPISetToast = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const customData = {
    type: "rectangle",
    id: "oDVXy8D6rom3H1-LLH2-f",
    x: 523,
    y: 152,
    width: 360,
    height: 282,
    customData: { customId: "162" },
  };
  const setToastHandler = () => {
    excalidrawAPI.setToast(
      "This API can be used to show the toast with custom message.",
      true,
      10
    );
  };
  return (
    <>
      <div style={{ height: "700px" }}>
        <button onClick={setToastHandler}>Show tost</button>
        <Excalidraw
          initialData={{ elements: [customData] }}
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
        />
      </div>
    </>
  );
};

export const ExcalidrawAPIUpdateLibraryWithCustomData = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const customData = {
    type: "excalidrawlib",
    version: 2,
    source: "http://localhost:6006",
    libraryItems: [
      {
        status: "unpublished",
        elements: [
          {
            type: "rectangle",
            version: 19,
            versionNonce: 1294726922,
            isDeleted: false,
            id: "oDVXy8D6rom3H1-LLH2-f",
            fillStyle: "solid",
            strokeWidth: 2,
            strokeStyle: "solid",
            roughness: 1,
            opacity: 100,
            angle: 0,
            x: 360,
            y: 154,
            strokeColor: "#e03131",
            backgroundColor: "#ffc9c9",
            width: 360,
            height: 282,
            seed: 1,
            groupIds: [],
            frameId: null,
            roundness: null,
            boundElements: [],
            updated: 1701450009568,
            link: null,
            locked: false,
            customData: {
              customId: "162",
            },
          },
          {
            id: "Htg8_gd-Chgitb2WYNA6G",
            type: "diamond",
            x: 228,
            y: 150,
            width: 268,
            height: 268,
            angle: 0,
            strokeColor: "#1e1e1e",
            backgroundColor: "#ffec99",
            fillStyle: "solid",
            strokeWidth: 2,
            strokeStyle: "solid",
            roughness: 1,
            opacity: 100,
            groupIds: [],
            frameId: null,
            roundness: {
              type: 2,
            },
            seed: 563480214,
            version: 40,
            versionNonce: 1792330,
            isDeleted: false,
            boundElements: null,
            updated: 1701449992429,
            link: null,
            locked: false,
          },
        ],
        id: "KFXXZxFMg4f4Jx93Gg01L",
        created: 1701450018884,
      },
    ],
  };
  const updateLibraryHandle = () => {
    console.log("xxx", excalidrawAPI.updateLibrary(customData));
  };
  return (
    <>
      <div style={{ height: "700px" }}>
        <button onClick={updateLibraryHandle}>updateLibraryHandle</button>
        <Excalidraw
          initialData={{ elements: [customData] }}
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
        />
      </div>
    </>
  );
};

export const RenderTopRightUi = () => {
  return (
    <div style={{ height: "500px" }}>
      <Excalidraw
        renderTopRightUI={() => {
          return (
            <button
              style={{
                background: "#70b1ec",
                border: "none",
                color: "#fff",
                width: "max-content",
                fontWeight: "bold",
              }}
              onClick={() => window.alert("This is dummy top right UI")}
            >
              Click me
            </button>
          );
        }}
      />
    </div>
  );
};

export const SidebarChildren = () => {
  const [docked, setDocked] = useState(false);

  return (
    <div style={{ height: "580px" }}>
      <Excalidraw
        UIOptions={{
          // this effectively makes the sidebar dockable on any screen size,
          // ignoring if it fits or not
          dockedSidebarBreakpoint: 0,
        }}
      >
        <Sidebar name="custom" docked={docked} onDock={setDocked}>
          <Sidebar.Header />
          <Sidebar.Tabs style={{ padding: "0.5rem" }}>
            <Sidebar.Tab tab="one">Tab one!</Sidebar.Tab>
            <Sidebar.Tab tab="two">Tab two!</Sidebar.Tab>
            <Sidebar.TabTriggers>
              <Sidebar.TabTrigger tab="one">One</Sidebar.TabTrigger>
              <Sidebar.TabTrigger tab="two">Two</Sidebar.TabTrigger>
            </Sidebar.TabTriggers>
          </Sidebar.Tabs>
        </Sidebar>

        <Footer>
          <Sidebar.Trigger
            name="custom"
            tab="one"
            style={{
              marginLeft: "0.5rem",
              background: "#70b1ec",
              color: "white",
            }}
          >
            Toggle Custom Sidebar
          </Sidebar.Trigger>
        </Footer>
      </Excalidraw>
    </div>
  );
};

export const UIOptionsFirstLook = () => {
  return (
    <div style={{ height: "700px" }}>
      <Excalidraw />
    </div>
  );
};

export const UIOptionsExport = () => {
  const UIOptions = {
    canvasActions: {
      export: {
        saveFileToDisk: true,
      },
    },
  };
  return (
    <div style={{ height: "700px" }}>
      <Excalidraw UIOptions={UIOptions} />
    </div>
  );
};

export const UIOptionsToolsShowImage = () => {
  const UIOptions = {
    tools: {
      image: false,
    },
  };
  return (
    <div style={{ height: "700px" }}>
      <Excalidraw UIOptions={UIOptions} />
    </div>
  );
};

export const MenuChildrenShoweSelectedItemToAlert = () => {
  return (
    <div style={{ height: "700px" }}>
      <Excalidraw>
        <MainMenu>
          <MainMenu.Item onSelect={() => window.alert("Item1")}>
            Item1
          </MainMenu.Item>
          <MainMenu.Item onSelect={() => window.alert("Item2")}>
            Item 2
          </MainMenu.Item>
        </MainMenu>
      </Excalidraw>
    </div>
  );
};

export const useHandleLibraryFirstLook = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const loguseHandleLibrary = useHandleLibrary({ excalidrawAPI });
  console.log("xxx loguseHandleLibrary", loguseHandleLibrary);
  const customData = {
    type: "rectangle",
    id: "oDVXy8D6rom3H1-LLH2-f",
    x: 523,
    y: 152,
    width: 360,
    height: 282,
    customData: { customId: "162" },
  };
  const resetScene = () => {
    excalidrawAPI.resetScene();
  };
  return (
    <>
      <div style={{ height: "700px" }}>
        <button onClick={resetScene}>Reset Scene</button>
        <Excalidraw
          initialData={{ elements: [customData] }}
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
        />
      </div>
    </>
  );
};

export const ExportToCanvasFirstLook = () => {
  const [canvasUrl, setCanvasUrl] = useState("");
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const handleLog = () => {
    console.log("xxx", canvasUrl);
  };
  return (
    <>
      <button
        className="custom-button"
        onClick={async () => {
          if (!excalidrawAPI) {
            return;
          }
          const elements = excalidrawAPI.getSceneElements();
          console.log("xxx elements", elements);
          if (!elements || !elements.length) {
            return;
          }
          const canvas = await exportToCanvas({
            elements,
            appState: {
              // ...initialData.appState,
              // exportWithDarkMode: false,
            },
            files: excalidrawAPI.getFiles(),
            getDimensions: () => {
              return { width: 350, height: 350 };
            },
          });
          const ctx = canvas.getContext("2d");
          ctx.font = "30px Virgil";
          ctx.strokeText("My custom text", 50, 60);
          setCanvasUrl(canvas.toDataURL());
        }}
      >
        Export to Canvas
      </button>
      <div className="export export-canvas">
        <img src={canvasUrl} alt="" />
      </div>
      <button onClick={handleLog}>Log button</button>
      <div style={{ height: "400px" }}>
        <Excalidraw
          initialData={{}}
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
        />
      </div>
    </>
  );
};

export const AddIconManuly = () => {
  return (
    <div>
      <div style={{ width: "40px", height: "40px" }}>
        <img src={LightsIcons} style={{ width: "40px", height: "40px" }} />
      </div>
      <div style={{ height: "500px" }}>
        <Excalidraw
          renderTopRightUI={() => {
            return (
              <button
                style={{
                  background: "#70b1ec",
                  border: "none",
                  color: "#fff",
                  width: "max-content",
                  fontWeight: "bold",
                }}
                onClick={() => window.alert("This is dummy top right UI")}
              >
                Click me
              </button>
            );
          }}
        />
      </div>
    </div>
  );
};

export const ExcalidrawAPIUpdate = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const sceneData = {
    elements: storedDataFromConsole.elements,
    appState: storedDataFromConsole.appState,
  };
  const handleUpdateCanvas = () => {
    console.log("xxx handleUpdateCanvas", storedDataFromConsole.files);
    excalidrawAPI.updateScene(sceneData);
  };
  return (
    <div style={{ height: "500px" }}>
      <p style={{ fontSize: "16px" }}> Click to update the scene</p>
      <button className="custom-button" onClick={handleUpdateCanvas}>
        Update Scene
      </button>
      <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />
    </div>
  );
};

export const ExcalidrawAPIUpdateAndAddFiles = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const sceneData = {
    elements: trafficLightIcon.elements,
    appState: trafficLightIcon.appState,
  };
  const handleUpdateCanvas = () => {
    excalidrawAPI.updateScene(sceneData);
    excalidrawAPI.addFiles([
      trafficLightIcon.files[trafficLightIcon.elements[0].fileId],
    ]);
    console.log("xxx handleUpdateCanvas", excalidrawAPI);
  };
  return (
    <div style={{ height: "500px" }}>
      <div
        style={{ width: "40px", height: "40px" }}
        onClick={handleUpdateCanvas}
      >
        <img src={LightsIcons} style={{ width: "40px", height: "40px" }} />
      </div>
      <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />
    </div>
  );
};

export const ReplaceLibrarySidebarDemo = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [docked, setDocked] = useState(false);
  const sceneData = {
    elements: trafficLightIcon.elements,
    appState: trafficLightIcon.appState,
  };
  const handleUpdateCanvas = () => {
    excalidrawAPI.updateScene(sceneData);
    excalidrawAPI.addFiles([
      trafficLightIcon.files[trafficLightIcon.elements[0].fileId],
    ]);
    console.log("xxx handleUpdateCanvas", excalidrawAPI);
  };
  return (
    <div style={{ height: "800px" }}>
      <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)}>
        <Sidebar name="custom" docked={docked} onDock={setDocked}>
          <Sidebar.Header />
          <Sidebar.Tabs style={{ padding: "0.5rem" }}>
            <Sidebar.Tab tab="one">
              <div
                style={{ width: "40px", height: "40px" }}
                onClick={handleUpdateCanvas}
              >
                <img
                  src={LightsIcons}
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </Sidebar.Tab>
            <Sidebar.Tab tab="two">Tab two!</Sidebar.Tab>
            <Sidebar.TabTriggers>
              <Sidebar.TabTrigger tab="one">One</Sidebar.TabTrigger>
              <Sidebar.TabTrigger tab="two">Two</Sidebar.TabTrigger>
            </Sidebar.TabTriggers>
          </Sidebar.Tabs>
        </Sidebar>

        <Footer>
          <Sidebar.Trigger
            name="custom"
            tab="one"
            style={{
              marginLeft: "0.5rem",
              background: "#70b1ec",
              color: "white",
            }}
          >
            Toggle Custom Sidebar
          </Sidebar.Trigger>
        </Footer>
      </Excalidraw>
    </div>
  );
};

export const FetchSimpleImage = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const sceneData = {
    elements: trafficLightIcon.elements,
    appState: trafficLightIcon.appState,
  };
  const handleUpdateCanvas = () => {
    excalidrawAPI.updateScene(sceneData);
    console.log("xxx handleUpdateCanvas", excalidrawAPI);
  };

  useEffect(() => {
    if (!excalidrawAPI) {
      return;
    }
    const fetchData = async () => {
      const res = await fetch("/traffic-light-svgrepo-com.svg");
      const imageData = await res.blob();
      const reader = new FileReader();
      reader.readAsDataURL(imageData);

      reader.onload = function () {
        const imagesArray = [
          {
            id: "de216d66685012a88ba2015412900e784bdba4b9",
            dataURL: reader.result,
            mimeType: "image/svg+xml",
            created: 1644915140367,
          },
        ];
        // initialStatePromiseRef.current.promise.resolve(initialData);

        console.log("xxx imageData", imagesArray);
        excalidrawAPI.addFiles(imagesArray);
      };
    };
    fetchData();
  }, [excalidrawAPI]);

  return (
    <div style={{ height: "500px" }}>
      <div
        style={{ width: "40px", height: "40px" }}
        onClick={handleUpdateCanvas}
      >
        <img src={LightsIcons} style={{ width: "40px", height: "40px" }} />
      </div>
      <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />
    </div>
  );
};

export const CreateImageElementManually = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const sceneData = {
    elements: partialImageElement,
    appState: {
      viewBackgroundColor: "white",
    },
  };
  const handleUpdateCanvas = () => {
    excalidrawAPI.updateScene(sceneData);
    excalidrawAPI.addFiles([imageWithTestId]);
  };
  return (
    <div style={{ height: "500px" }}>
      <button onClick={handleUpdateCanvas}>Add simple icon</button>
      <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />
    </div>
  );
};

export const GenerateIconElement = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const fetchIcon = async (pathName, fileId) => {
    const res = await fetch(`/${pathName}`);
    const imageData = await res.blob();
    const reader = new FileReader();
    reader.readAsDataURL(imageData);

    reader.onload = function () {
      const imagesArray = [
        {
          id: fileId,
          dataURL: reader.result,
          mimeType: "image/svg+xml",
        },
      ];
      console.log("xxx imageData", imagesArray);
      excalidrawAPI.addFiles(imagesArray);
    };
  };

  const handleUpdateCanvas = async (event) => {
    const iconPathArr = event.target.getAttribute("src").split("/");
    const pathName = iconPathArr[iconPathArr.length - 1];
    const newFileId = nanoid();
    console.log("xxx newFileId", newFileId);
    const newElement = {
      type: "image",
      isDeleted: false,
      id: nanoid(),
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      angle: 0,
      x: 100.50390625,
      y: 93.67578125,
      strokeColor: "#c92a2a",
      backgroundColor: "transparent",
      width: 60,
      height: 60,
      groupIds: [],
      boundElements: null,
      locked: false,
      link: null,
      fileId: newFileId, // test id
    };

    excalidrawAPI.updateScene({
      elements: [newElement],
      appState: {
        viewBackgroundColor: "white",
      },
    });

    await fetchIcon(pathName, newFileId);
  };

  return (
    <div style={{ height: "500px" }}>
      <div style={{ width: "40px", height: "40px" }}>
        <img
          src={LightsIcons}
          style={{ width: "40px", height: "40px" }}
          onClick={handleUpdateCanvas}
        />
      </div>
      <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />
    </div>
  );
};
export const GenerateImageElementWithInstance = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [iconElements, setIconElements] = useState([]);
  const fetchIcon = async (pathName, fileId) => {
    const res = await fetch(`/${pathName}`);
    const imageData = await res.blob();
    const reader = new FileReader();
    reader.readAsDataURL(imageData);

    reader.onload = function () {
      const imagesArray = [
        {
          id: fileId,
          dataURL: reader.result,
          mimeType: "image/svg+xml",
        },
      ];
      console.log("xxx imageData", imagesArray);
      excalidrawAPI.addFiles(imagesArray);
    };
  };

  const handleUpdateCanvas = async (event) => {
    const iconPathArr = event.target.getAttribute("src").split("/");
    const pathName = iconPathArr[iconPathArr.length - 1];
    const newFileId = nanoid();
    console.log("xxx newFileId", newFileId);
    const newElement = {
      type: "image",
      isDeleted: false,
      id: nanoid(),
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      angle: 0,
      x: 100.50390625,
      y: 93.67578125,
      strokeColor: "#c92a2a",
      backgroundColor: "transparent",
      width: 60,
      height: 60,
      groupIds: [],
      boundElements: null,
      locked: false,
      link: null,
      fileId: newFileId, // test id
    };

    setIconElements((prev) => [...prev, newElement]);

    excalidrawAPI.updateScene({
      elements: [...iconElements, newElement],
      appState: {
        viewBackgroundColor: "white",
      },
    });

    await fetchIcon(pathName, newFileId);
  };

  //   if (!excalidrawAPI) {
  //     return;
  //   }
  //   const fetchIcon = async () => {
  //     const res = await fetch("/traffic-light-svgrepo-com.svg");
  //     const imageData = await res.blob();
  //     const reader = new FileReader();
  //     reader.readAsDataURL(imageData);

  //     reader.onload = function () {
  //       const imagesArray = [
  //         {
  //           id: "traffic-light-svgrepo-com.svg111",
  //           dataURL: reader.result,
  //           mimeType: "image/svg+xml",
  //         },
  //       ];
  //       console.log("xxx imageData", imagesArray);
  //       excalidrawAPI.addFiles(imagesArray);
  //     };
  //   };
  //   fetchIcon();
  // }, [excalidrawAPI]);
  return (
    <div style={{ height: "500px" }}>
      <div style={{ width: "40px", height: "40px" }}>
        <img
          src={LightsIcons}
          style={{ width: "40px", height: "40px" }}
          onClick={handleUpdateCanvas}
        />
      </div>
      <div style={{ width: "40px", height: "40px" }}>
        <img
          src={WarningIcons}
          style={{ width: "40px", height: "40px" }}
          onClick={handleUpdateCanvas}
        />
      </div>
      <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />
    </div>
  );
};
export const GenerateImageElementWithOneFolder = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [iconElements, setIconElements] = useState([]);
  const fetchIcon = async (pathName, fileId) => {
    const res = await fetch(`/${pathName}`);
    const imageData = await res.blob();
    const reader = new FileReader();
    reader.readAsDataURL(imageData);

    reader.onload = function () {
      const imagesArray = [
        {
          id: fileId,
          dataURL: reader.result,
          mimeType: "image/svg+xml",
        },
      ];
      console.log("xxx imageData", imagesArray);
      excalidrawAPI.addFiles(imagesArray);
    };
  };
  useEffect(() => {
    console.log("xxx excalidrawAPI", excalidrawAPI);
  }, [excalidrawAPI]);

  const handleUpdateCanvas = async (event) => {
    const iconPathArr = event.target.getAttribute("src").split("/");
    const pathName = iconPathArr[iconPathArr.length - 1];
    const newFileId = nanoid();
    console.log("xxx newFileId", newFileId);
    const newElement = {
      type: "image",
      isDeleted: false,
      id: nanoid(),
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      angle: 0,
      x: 100.50390625,
      y: 93.67578125,
      strokeColor: "#c92a2a",
      backgroundColor: "transparent",
      width: 60,
      height: 60,
      groupIds: [],
      boundElements: null,
      locked: false,
      link: null,
      fileId: newFileId, // test id
    };

    setIconElements((prev) => [...prev, newElement]);

    excalidrawAPI.updateScene({
      elements: [...iconElements, newElement],
      appState: {
        viewBackgroundColor: "white",
      },
    });

    await fetchIcon(pathName, newFileId);
  };

  const obgArr = [
    {
      id: 1,
      path: LightsIcons,
    },
    {
      id: 2,
      path: WarningIcons,
    },
  ];
  const createIcon = () => {
    return (
      <div>
        {obgArr.map((icon) => {
          return (
            <div style={{ width: "40px", height: "40px" }}>
              <img
                src={icon.path}
                style={{ width: "40px", height: "40px" }}
                onClick={handleUpdateCanvas}
              />
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div style={{ height: "500px" }}>
      {/* <div style={{ width: "40px", height: "40px" }}>
        <img
          src={LightsIcons}
          style={{ width: "40px", height: "40px" }}
          onClick={handleUpdateCanvas}
        />
      </div>
      <div style={{ width: "40px", height: "40px" }}>
        <img
          src={WarningIcons}
          style={{ width: "40px", height: "40px" }}
          onClick={handleUpdateCanvas}
        />
      </div> */}
      {createIcon()}
      <div>
        {/* {obgArr.map((icon) => {
          return (
            <div style={{ width: "40px", height: "40px" }}>
              <img
                src={icon.path}
                style={{ width: "40px", height: "40px" }}
                onClick={handleUpdateCanvas}
              />
            </div>
          );
        })} */}
      </div>
      <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />
    </div>
  );
};

export const IdentifyInsertedElement = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [currentElememnts, setcurrentElements] = useState([]);
  const [lastelement, setLastelement] = useState();
  const handleDragStart = (event) => {
    console.log("xxx Drag start", event.target);
  };

  const pastHandle = (data, event) => {
    console.log("xxx on paste", data);
  };

  const onChangeHandle = (elements) => {
    const lastelement = elements[elements.length - 1];
    console.log("xxx on change last element", lastelement?.fileId);
    if (elements.length !== currentElememnts.length) {
      if (lastelement.type === "image") {
        const elementsArrayWithoutLast = elements.slice(0, -1);
        const changeElements = { ...lastelement, width: 40, height: 40 };
        console.log("xxx change lastElements", lastelement);
        console.log("xxx change changeElements", changeElements);
        excalidrawAPI.updateScene({
          // elements: [...elementsArrayWithoutLast, changeElements],
          elements: [...elementsArrayWithoutLast, lastelement],
          appState: {
            viewBackgroundColor: "white",
          },
        });
      }
    }
    setcurrentElements(elements);
  };

  return (
    <div style={{ height: "500px" }}>
      <div
        style={{ width: "40px", height: "40px" }}
        onDragStart={handleDragStart}
      >
        {/* <img
          src={SinnbildIcons}
          style={{ width: "40px", height: "40px" }}
          onDragStart={handleDragStart}
          draggable
        /> */}
      </div>
      <Excalidraw
        excalidrawAPI={(api) => setExcalidrawAPI(api)}
        onPaste={pastHandle}
        onChange={onChangeHandle}
      />
    </div>
  );
};

export const IdentifyInsertedElementByGetSceneElements = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [updatedFileId, setUpdatedFileId] = useState([]);

  const habdleOnChange = () => {
    const elements = excalidrawAPI.getSceneElements();
    const lastElements = elements[elements.length - 1];
    if (lastElements?.fileId) {
      const iconWidth = lastElements.width;
      const iconHeight = lastElements.height;
      // const iconX = lastElements.x;
      // const iconY = lastElements.y;

      // console.log("xxx getSceneElements", iconY);

      // lastElements.width = 60;
      // lastElements.height = (iconHeight * 60) / iconWidth;

      lastElements.width = (iconWidth * 60) / iconHeight;
      lastElements.height = 60;
    }
    // if (lastElements?.fileId && !updatedFileId.includes(lastElements?.fileId)) {
    //   const iconWidth = lastElements.width;
    //   const iconHeight = lastElements.height;
    //   const iconX = lastElements.x;
    //   const iconY = lastElements.y;

    //   console.log("xxx getSceneElements", iconY);

    //   // lastElements.width = 60;
    //   // lastElements.height = (iconHeight * 60) / iconWidth;

    //   lastElements.width = (iconWidth * 60) / iconHeight;
    //   lastElements.height = 60;
    //   setUpdatedFileId((prev) => [...prev, lastElements.fileId]);
    // }
  };

  return (
    <div style={{ height: "500px" }}>
      <div>
        {/* <img src={SinnbildIcons} style={{ height: "30px", margin: "8px" }} /> */}
        <img
          src={SinnbildFußganger}
          style={{ height: "30px", margin: "10px" }}
        />
      </div>
      <Excalidraw
        excalidrawAPI={(api) => setExcalidrawAPI(api)}
        onChange={habdleOnChange}
      />
    </div>
  );
};
// export const IdentifyInsertedElementWithCustomIcon = () => {
//   const [excalidrawAPI, setExcalidrawAPI] = useState(null);

//   return (
//     <div style={{ height: "500px" }}>
//       <div>
//         <img
//           src={SinnbildIcons}
//           style={{ width: "40px", height: "40px" }}
//           draggable
//         />
//       </div>
//       <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />
//     </div>
//   );
// };
