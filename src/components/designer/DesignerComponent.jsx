import {
  Excalidraw,
  MainMenu,
  Sidebar,
  Footer,
  defaultLang,
  languages,
} from "@excalidraw/excalidraw";
import { useEffect, useState } from "react";
import "./designer-style.css";
import { Input, Collapse, Divider, Mentions } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";

import {
  CloseOutlined,
  PushpinOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { roadSigns } from "./dataSigns";
import { libraryExtractor } from "./libraryExtractor";

const colorPrimary = "#6965db";
const colorInactiv = "#a5a5a5";
const colorTextBlack = "#1b1b1f";
const libraryItemsMargins = { margin: "20px 0" };
const iconWrapperSize = {
  flex: "0 0 28px",
  width: "28px",
  height: "28px",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #ECECF4",
};
const singleIconStyInternalStyle = {
  width: "100%",
  height: "100%",
};
const libraryTitle = {
  fontFamily: "Assistant, Helvetica, Roboto, Arial",
  fontSize: "20px",
  color: colorPrimary,
  fontWeight: "bold",
};
const borderColor = "#F4F3FF";
const onlyIconItemsStyle = {
  // flex: "0 0 28px",
  width: "28px",
  height: "28px",
  aspectRatio: "1 / 1",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const titleGroupStyle = {
  fontFamily: "Assistant, Helvetica, Roboto, Arial",
  color: "#525252",
  lineHeight: "1.4em",
};

const onlyImageInternalStyle = { height: "calc(100% - 10px)" };

const onChangeCollapseHandle = (key) => {
  console.log(key);
};
const onlyIconView = (iconsData) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginRight: "-18px",
      }}
    >
      {iconsData.map((icon) => (
        <div key={icon.iconId} style={iconWrapperSize}>
          <img src={`/${icon.fileName}`} style={singleIconStyInternalStyle} />
        </div>
      ))}
    </div>
  );
};
const iconWithDescriptionView = (iconsData) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        color: colorTextBlack,
      }}
    >
      {iconsData.map((icon) => (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div style={iconWrapperSize}>
            <img src={`/${icon.fileName}`} style={singleIconStyInternalStyle} />
          </div>
          <span style={{ fontSize: "13px", lineHeight: "1.3em" }}>
            {icon.iconsTitle}
          </span>
        </div>
      ))}
    </div>
  );
};

const labelView = (group) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      color: colorTextBlack,
    }}
  >
    <span style={titleGroupStyle}>{group.groupTitle}</span>
    <span style={{ fontSize: "12px", color: colorInactiv }}>
      {group.iconsArr.length}
    </span>
  </div>
);

const DesignerComponent = ({
  dataIn = roadSigns,
  extractor = libraryExtractor,
  activeMode = false,
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(extractor(dataIn));
  }, [dataIn]);

  const [excalidrawAPI, setExcalidrawAPI] = useState(null);

  const UIOptions = {
    canvasActions: {
      saveAsImage: false,
    },
  };
  const [showLibrary, setShowLibrary] = useState(false);
  const [onlyIconMode, setOnlyIconMode] = useState(true);
  const [itemsOnlyIcon, setItemsOnlyIcon] = useState();
  const [itemsWithTextDescription, setItemsWithTextDescription] = useState();
  const [ifPinnedLibrary, setIfPinnedLibrary] = useState(true);

  const [searchText, setSearchText] = useState("");

  const [filtredDataOnlyIcon, setFiltredDataOnlyIcon] = useState([]);
  const [filtredDataIconDescription, setFiltredDataIconDescription] = useState(
    []
  );

  useEffect(() => {
    const compsWithTextDescription = [];
    const compsOnlyIcons = [];

    data.forEach((g) => {
      const id = g.id;
      const label = labelView(g);
      const onlyIconObj = {
        id,
        label,
        children: onlyIconView(g.iconsArr),
      };
      compsOnlyIcons.push(onlyIconObj);
      const iconWithDescriptionObj = {
        id,
        label,
        children: iconWithDescriptionView(g.iconsArr),
      };

      compsWithTextDescription.push(iconWithDescriptionObj);
    });

    setItemsOnlyIcon(compsOnlyIcons);
    setItemsWithTextDescription(compsWithTextDescription);
  }, [data]);

  useEffect(() => {
    console.log("iii", MainMenu.DefaultItems.ClearCanvas);

    if (searchText !== "") {
      const compsWithTextDescription = [];
      const compsOnlyIcons = [];

      data.forEach((g) => {
        const searchTermIcons = g.iconsArr.filter((icon) =>
          icon.iconsTitle.toLowerCase().includes(searchText.toLowerCase())
        );

        if (searchTermIcons.length !== 0) {
          const id = g.id;
          const label = labelView(g);
          const onlyIconObj = {
            id,
            label,
            children: onlyIconView(searchTermIcons),
          };
          compsOnlyIcons.push(onlyIconObj);
          const iconWithDescriptionObj = {
            id,
            label,
            children: iconWithDescriptionView(searchTermIcons),
          };

          compsWithTextDescription.push(iconWithDescriptionObj);
        }
      });

      setFiltredDataOnlyIcon(compsOnlyIcons);
      setFiltredDataIconDescription(compsWithTextDescription);
    }
  }, [searchText]);
  const resetScene = () => {
    excalidrawAPI.resetScene();
  };
  return (
    <>
      <div
        className="excalidraw-custom-wrapper"
        style={{
          height: "700px",
          // width: "1000px",
          display: "flex",
        }}
      >
        <Excalidraw
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
          UIOptions={UIOptions}
          langCode="de-DE"
          renderTopRightUI={() => {
            return (
              <div
                style={{
                  background: "#ECECF4",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10.5px",
                  borderRadius: "9px",
                  width: "80px",
                  color: "#5B5B60",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
                onClick={() => setShowLibrary(!showLibrary)}
              >
                <BookOutlined />
                <span style={{ marginLeft: "10px" }}>Bibliothek</span>
              </div>
            );
          }}
        >
          <MainMenu style={{ width: "500px" }}>
            {/* <MainMenu.DefaultItems.Socials /> */}
            <MainMenu.DefaultItems.Export />
            <MainMenu.DefaultItems.Help />
            <MainMenu.DefaultItems.SaveToActiveFile />
            {/* <MainMenu.DefaultItems.ToggleTheme /> */}
            <MainMenu.DefaultItems.LoadScene />
            {/* <MainMenu.DefaultItems.ClearCanvas /> */}
            <MainMenu.Item
              onSelect={resetScene}
              icon={
                <DeleteOutlined style={{ fontSize: "8px", color: "#5B5B60" }} />
              }
            >
              <span>Zeichenfläche löschen</span>
            </MainMenu.Item>
            <Divider />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu>
        </Excalidraw>

        <div style={{ display: ifPinnedLibrary ? "block" : "none" }}>
          {showLibrary ? (
            <div
              style={{
                margin: "14px 0 12px 20px",
                width: "338px",
                border: "1px solid #F0F0F0",
                padding: "10px 20px",
                boxShadow: "rgba(15, 14, 15, 0.07) 0px 5px 9px 1px",
                borderRadius: "12px",
                overflow: "auto",
                height: "650px",
                color: "#1b1b1f",
              }}
            >
              <div style={{ margin: "26px 0" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={libraryTitle}>Bibliothek</span>
                  <div style={{ marginLeft: "auto" }}>
                    {/* <PushpinOutlined
                      style={{
                        color: "#a5a5a5",
                        fontSize: "16px",
                        fontWeight: "bold",
                        marginRight: "12px",
                      }}
                      onClick={() => setIfPinnedLibrary(false)}
                    /> */}
                    {/* <a href="http://localhost:5173/" target="_blank">
                        <PushpinOutlined
                          style={{
                            color: "#a5a5a5",
                            fontSize: "16px",
                            fontWeight: "bold",
                            marginRight: "12px",
                          }}
                        />
                      </a> */}

                    <CloseOutlined
                      onClick={() => setShowLibrary(!showLibrary)}
                      style={{
                        // color: colorPrimary,
                        fontSize: "16px",
                        fontWeight: "medium",
                        color: "#1b1b1f",
                      }}
                    />
                  </div>
                </div>
                <Divider style={{ margin: "22px 0px" }} />
              </div>
              <div style={{ margin: "30px 0px" }}>
                <span style={libraryTitle}>Suche</span>
                <Input
                  size="large"
                  prefix={<SearchOutlined />}
                  allowClear
                  onPressEnter={(e) => {
                    console.log("yyy on Press enter");
                    setSearchText(e.target.value);
                  }}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  style={{
                    height: "40px",
                    marginTop: "8px",
                  }}
                />
                <div style={{ margin: "30px 0px 0px 0px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                    }}
                  >
                    <span style={libraryTitle}>Schilder</span>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <AppstoreOutlined
                        style={{ color: !onlyIconMode && colorInactiv }}
                        onClick={() => {
                          setOnlyIconMode(true);
                        }}
                      />
                      <UnorderedListOutlined
                        onClick={() => {
                          setOnlyIconMode(false);
                        }}
                        style={{ color: onlyIconMode && colorInactiv }}
                      />
                    </div>
                  </div>
                  {searchText === "" ? (
                    <Collapse
                      items={
                        onlyIconMode ? itemsOnlyIcon : itemsWithTextDescription
                      }
                      ghost
                      defaultActiveKey={["1"]}
                      _onChange={onChangeCollapseHandle}
                    />
                  ) : (
                    <Collapse
                      items={
                        onlyIconMode
                          ? filtredDataOnlyIcon
                          : filtredDataIconDescription
                      }
                      ghost
                      defaultActiveKey={["1"]}
                      _onChange={onChangeCollapseHandle}
                    />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ margin: "16px 0 0px 0px" }}>
              {/* <Button
                  icon={<BookOutlined />}
                  size="large"
                  style={{
                    background: "#ECECF4",
                    color: "5B5B60",
                    fontSize: "12px",
                    // padding: "8px 0",
                  }}
                  onClick={() => setShowLibrary(!showLibrary)}
                >
                  Bibliothek
                </Button> */}
              {/* <div
                  style={{
                    background: "#ECECF4",
                    displlay: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10.5px",
                    borderRadius: "9px",
                    width: "80px",
                    color: "#5B5B60",
                    fontSize: "12px",
                    cursor: "pointer",
                    fontFamily: "Assistant",
                  }}
                  onClick={() => setShowLibrary(!showLibrary)}
                >
                  <BookOutlined />
                  <span style={{ marginLeft: "10px" }}>Bibliothek</span>
                </div> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DesignerComponent;