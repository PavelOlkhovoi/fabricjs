import { useEffect, useState, excalidrawAPI, useRef } from "react";
import {
  Excalidraw,
  MainMenu,
  Footer,
  LiveCollaborationTrigger,
} from "@excalidraw/excalidraw";
import { fileWithImage, storedDataFromConsole } from "./dataFromExcalidraw";

export default {
  title: "Stories/ExcalidrawStart",
};

export const FirstLook = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
      <div style={{ height: "500px" }}>
        <Excalidraw />
      </div>
    </>
  );
};
export const FirstLookCollaborating = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
      <div style={{ height: "500px" }}>
        <Excalidraw isCollaborating={true} />
      </div>
    </>
  );
};
export const FirstLookAddIconTopMenu = () => {
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
export const FirstLookSetLeftMenu = () => {
  const UIOptions = {
    canvasActions: {
      changeViewBackgroundColor: false,
      clearCanvas: false,
      loadScene: false,
      saveToActiveFile: false,
      toggleTheme: false,
    },
  };
  return (
    <div style={{ height: "500px" }}>
      <Excalidraw UIOptions={UIOptions} />
    </div>
  );
};
export const FirstLookBuildLeftMenu = () => {
  const UIOptions = {
    canvasActions: {
      changeViewBackgroundColor: false,
      clearCanvas: false,
      loadScene: false,
      saveToActiveFile: false,
      toggleTheme: false,
    },
  };
  return (
    <div style={{ height: "300px" }}>
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
export const FirstLookLiveButton = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [isCollaborating, setIsCollaborating] = useState(false);
  return (
    <div style={{ height: "500px" }}>
      <p style={{ fontSize: "16px" }}>
        Selecting the checkbox to see the collaborator count
      </p>
      <label style={{ fontSize: "16px", fontWeight: "bold" }}>
        <input
          type="checkbox"
          checked={isCollaborating}
          onChange={() => {
            if (!isCollaborating) {
              const collaborators = new Map();
              collaborators.set("id1", {
                username: "Doremon",
                avatarUrl: "../../../../img/doremon.png",
              });
              collaborators.set("id3", {
                username: "Pika",
                avatarUrl: "../../../../img/pika.jpeg",
              });
              excalidrawAPI.updateScene({ collaborators });
            } else {
              excalidrawAPI.updateScene({
                collaborators: new Map(),
              });
            }
            setIsCollaborating(!isCollaborating);
          }}
        />
        Show Collaborators
      </label>
      <Excalidraw
        ref={(api) => setExcalidrawAPI(api)}
        renderTopRightUI={() => (
          <LiveCollaborationTrigger
            isCollaborating={isCollaborating}
            onSelect={() => {
              window.alert("You clicked on collab button");
              setIsCollaborating(true);
            }}
          />
        )}
      ></Excalidraw>
    </div>
  );
};

export const LoadFileFromVariabale = () => {
  const excalidrawRef = useRef(null);
  const handleButtonClick = () => {
    // const excalidrawInstance = excalidrawRef.current;
    // const currentElements = excalidrawInstance.getSceneElements();
    // console.log("xxx", currentElements);
  };
  return (
    <div style={{ height: "500px" }}>
      <button
        style={{
          background: "#70b1ec",
          border: "none",
          color: "#fff",
          width: "max-content",
          fontWeight: "bold",
        }}
        onClick={handleButtonClick}
      >
        Get Elements
      </button>
      <Excalidraw
        ref={excalidrawRef}
        onChange={(elements, state) =>
          console.log("Elements :", elements, "state :", state)
        }
      />
    </div>
  );
};
export const LoadFileFromVariabaleTwo = () => {
  const loadingData = [
    {
      id: "0MLsGD8xnuyw3fP7TeaAm",
      type: "rectangle",
      x: 534.1751690994204,
      y: 74.33939986286086,
      width: 334.16498238337346,
      height: 207.61729674706635,
      angle: 0,
      strokeColor: "#1e1e1e",
      backgroundColor: "#a5d8ff",
      fillStyle: "solid",
      strokeWidth: 2,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      groupIds: [],
      frameId: null,
      roundness: {
        type: 3,
      },
      seed: 1027753815,
      version: 49,
      versionNonce: 1519270359,
      isDeleted: false,
      boundElements: null,
      updated: 1701363564068,
      link: null,
      locked: false,
    },
    {
      id: "IKNkx3pXf7gKVUqJWgzd4",
      type: "image",
      x: 207.88888888888889,
      y: 116,
      width: 472.22222222222223,
      height: 250,
      angle: 0,
      strokeColor: "transparent",
      backgroundColor: "transparent",
      fillStyle: "solid",
      strokeWidth: 2,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      groupIds: [],
      frameId: null,
      roundness: null,
      seed: 1456306329,
      version: 21,
      versionNonce: 1401888729,
      isDeleted: false,
      boundElements: null,
      updated: 1701363510099,
      link: null,
      locked: false,
      status: "pending",
      fileId: "99cab3d85e2eca613bb0440487d27e328cf48ef4",
      scale: [1, 1],
    },
    {
      id: "5SoAmeDCedxAZFkh7CYSy",
      type: "rectangle",
      x: 168.37326530697015,
      y: 291.8432345502637,
      width: 334.16498238337346,
      height: 207.61729674706635,
      angle: 0,
      strokeColor: "#1e1e1e",
      backgroundColor: "#b2f2bb",
      fillStyle: "solid",
      strokeWidth: 2,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      groupIds: [],
      frameId: null,
      roundness: {
        type: 3,
      },
      seed: 1330749881,
      version: 23,
      versionNonce: 1096626775,
      isDeleted: false,
      boundElements: null,
      updated: 1701363548193,
      link: null,
      locked: false,
    },
  ];
  return (
    <div style={{ height: "500px" }}>
      <Excalidraw
        initialData={{
          elements: loadingData,
          appState: {},
          scrollToContent: true,
        }}
      />
    </div>
  );
};

export const LoadFileFromVariabaleIncludingImage = () => {
  const initialState = {
    elements: fileWithImage.elements,
    appState: fileWithImage.appState,
    files: fileWithImage.files,
    scrollToContent: true,
  };

  return (
    <div style={{ height: "500px" }}>
      <Excalidraw initialData={initialState} />
    </div>
  );
};

export const SaveFileFromVariabale = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  return (
    <div style={{ height: "500px" }}>
      <button
        style={{
          background: "#70b1ec",
          border: "none",
          color: "#fff",
          width: "max-content",
          fontWeight: "bold",
        }}
        onClick={() => {
          const appState = excalidrawAPI.getAppState();
          const currentContent = {
            elements: excalidrawAPI.getSceneElements(),
            appState: {
              gridSize: appState.gridSize,
              changeViewBackgroundColor: appState.viewBackgroundColor,
            },
            files: excalidrawAPI.getFiles(),
            scrollToContent: true,
          };

          console.log("xxx here", JSON.stringify(currentContent));
        }}
      >
        Get Elements
      </button>
      <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />
    </div>
  );
};

export const LoadFileFromConsoleString = () => {
  const initialState = {
    elements: storedDataFromConsole.elements,
    appState: storedDataFromConsole.appState,
    files: storedDataFromConsole.files,
    scrollToContent: storedDataFromConsole.scrollToContent,
  };

  return (
    <div style={{ height: "500px" }}>
      <Excalidraw initialData={initialState} />
    </div>
  );
};
