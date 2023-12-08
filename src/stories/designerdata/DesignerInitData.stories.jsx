import { Excalidraw, MainMenu, Sidebar, Footer } from "@excalidraw/excalidraw";
import { useEffect, useState } from "react";
import "./designer-style.css";
import { Input, Collapse, Divider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  CloseOutlined,
  PushpinOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { roadSigns } from "./dataSigns";
import { libraryExtractor } from "./libraryExtractor";

export default {
  title: "Library Custom/DesignerInitData",
};

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
  border: "1px solid #ECECF4",
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

export const DesignerInitData = ({
  dataIn = roadSigns,
  extractor = libraryExtractor,
  activeMode = false,
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(extractor(dataIn));
  }, [dataIn]);

  const [onlyIconMode, setOnlyIconMode] = useState(true);
  const [itemsOnlyIcon, setItemsOnlyIcon] = useState();
  const [itemsWithTextDescription, setItemsWithTextDescription] = useState();

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
    console.log("xxx search", searchText);
  }, [searchText]);

  return (
    <>
      <div
        className="excalidraw-custom-wrapper"
        style={{ height: "700px", display: "flex" }}
      >
        <Excalidraw />
        <div
          style={{
            marginLeft: "20px",
            width: "340px",
            border: "1px solid #F0F0F0",
            padding: "10px 20px",
            boxShadow: "rgba(15, 14, 15, 0.07) 0px 5px 9px 1px",
            borderRadius: "12px",
            overflow: "auto",
            height: "700px",
            color: "#1b1b1f",
          }}
        >
          <div style={{ margin: "26px 0" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={libraryTitle}>Bibliothek</span>
              <div style={{ marginLeft: "auto" }}>
                <PushpinOutlined
                  style={{
                    color: "#a5a5a5",
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginRight: "12px",
                  }}
                />
                <CloseOutlined
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
              onPressEnter={(e) => setSearchText(e.target.value)}
              onClear={(e) => setSearchText("")}
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
      </div>
    </>
  );
};
