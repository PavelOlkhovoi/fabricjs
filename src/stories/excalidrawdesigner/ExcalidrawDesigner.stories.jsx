import { Excalidraw, MainMenu, Sidebar, Footer } from "@excalidraw/excalidraw";
import { useEffect, useState } from "react";
import SinnbildFußganger from "/Sinnbild_Fußgänger.svg";
import SinnbildIcons from "/Sinnbild_Kfz.svg";
import SinnbildLKWvg from "/Sinnbild_LKW.svg";
import { nanoid } from "nanoid";
import "./designer.css";
import { Input, Collapse, Divider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  CloseOutlined,
  PushpinOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

export default {
  title: "Stories/DesignerComponent",
};

const colorPrimary = "#6965db";
const colorInactiv = "#a5a5a5";
const libraryItemsMargins = { margin: "20px 0" };
const iconWrapperSize = {
  width: "24px",
  height: "24px",
  // border: "1px solid red",
};
const libraryTitle = {
  fontFamily: "Assistant, Helvetica, Roboto, Arial",
  fontSize: "20px",
  color: colorPrimary,
  fontWeight: "bold",
};
const borderColor = "#F4F3FF";
const items = [
  {
    key: "1",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>Absatz 7</span>
        <span style={{ fontSize: "12px", color: colorInactiv }}>64</span>
      </div>
    ),
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
          <div style={iconWrapperSize}>
            <img src={SinnbildIcons} style={{ width: "100%" }} />
          </div>
          <span style={{ lineHeight: "1.2em" }}>
            Kraftwagen und sonstige mehrspurige Kraftfahrzeuge
          </span>
        </div>

        <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
          <div style={iconWrapperSize}>
            <img src={SinnbildLKWvg} style={{ width: "100%" }} />
          </div>
          <span style={{ lineHeight: "1.2em" }}>
            Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5...
          </span>
        </div>

        <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
          <div style={iconWrapperSize}>
            <img
              src={SinnbildFußganger}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <span style={{ lineHeight: "1.2em" }}>
            Kraftwagen und sonstige mehrspurige Kraftfahrzeuge
          </span>
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>Symbole der Richtlinien</span>
        <span style={{ fontSize: "12px", color: colorInactiv }}>21</span>
      </div>
    ),
    children: (
      <span>
        Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5 t,
        einschließlich ihrer Anhänger, und Zugmaschinen, ausgenommen
        Personenkraft­wa­gen und Kraftomni­bus­se
      </span>
    ),
  },
  {
    key: "3",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>Gefahrzeichen nach Anlage 1</span>
        <span style={{ fontSize: "12px", color: colorInactiv }}>10</span>
      </div>
    ),
    children: (
      <span>
        Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5 t,
        einschließlich ihrer Anhänger, und Zugmaschinen, ausgenommen
        Personenkraft­wa­gen und Kraftomni­bus­se
      </span>
    ),
    children: <span>Fußgänger</span>,
  },
  {
    key: "4",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>Allgemeine Gefahrzeichen</span>
        <span style={{ fontSize: "12px", color: colorInactiv }}>18</span>
      </div>
    ),
    children: (
      <span>
        Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5 t,
        einschließlich ihrer Anhänger, und Zugmaschinen, ausgenommen
        Personenkraft­wa­gen und Kraftomni­bus­se
      </span>
    ),
    children: <p>Fußgänger</p>,
  },
  {
    key: "5",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span style={{ lineHeight: "1.4em" }}>
          Besondere Gefahrzeichen vor Übergängen von Schienenbahnen mit Vorrang
        </span>
        <span style={{ fontSize: "12px", color: colorInactiv }}>34</span>
      </div>
    ),
    children: (
      <span>
        Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5 t,
        einschließlich ihrer Anhänger, und Zugmaschinen, ausgenommen
        Personenkraft­wa­gen und Kraftomni­bus­se
      </span>
    ),
    children: <p>Fußgänger</p>,
  },
];

export const DesignerWrapperGridBorderless = ({
  initialData,
  activeMode = false,
}) => {
  const onChangeCollapseHandle = (key) => {
    console.log(key);
  };
  return (
    <>
      <div style={{ height: "700px", display: "flex" }}>
        <Excalidraw />
        <div
          style={{
            marginLeft: "20px",
            width: "340px",
            border: "1px solid #F0F0F0",
            padding: "2px 20px 20px",
            boxShadow: "rgba(15, 14, 15, 0.07) 0px 5px 9px 1px",
            borderRadius: "12px",
            overflow: "auto",
            height: "700px",
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
              // value={searchValue}
              prefix={<SearchOutlined />}
              // onChange={(e) => {
              //   setSearchValue(e.target.value);
              // }}
              style={{
                height: "40px",
                marginTop: "12px",
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
                  <AppstoreOutlined style={{ color: colorInactiv }} />
                  <UnorderedListOutlined />
                </div>
              </div>
              <div style={{ overflow: "auto", height: "height: 700px" }}>
                <Collapse
                  items={items}
                  ghost
                  defaultActiveKey={["1"]}
                  onChange={onChangeCollapseHandle}
                  // style={{ paddingLeft: "0px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const DesignerWrapperGridWithBorder = ({
  initialData,
  activeMode = false,
}) => {
  const onChangeCollapseHandle = (key) => {
    console.log(key);
  };
  return (
    <>
      <div style={{ height: "700px", display: "flex" }}>
        <Excalidraw />
        <div
          style={{
            width: "340px",
            border: "1px solid",
            borderColor,
            padding: "2px 20px",
            borderRadius: "6px",
          }}
        >
          <div style={{ ...libraryItemsMargins }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={libraryTitle}>Bibliothek</span>
              <div style={{ marginLeft: "auto" }}>
                <PushpinOutlined
                  style={{
                    color: colorPrimary,
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginRight: "0.6rem",
                  }}
                />
                <CloseOutlined
                  style={{
                    color: colorPrimary,
                    fontSize: "16px",
                    fontWeight: "medium",
                  }}
                />
              </div>
            </div>
          </div>
          <div style={{ ...libraryItemsMargins }}>
            <span style={libraryTitle}>Suche</span>
            <Input
              size="large"
              // value={searchValue}
              prefix={<SearchOutlined />}
              // onChange={(e) => {
              //   setSearchValue(e.target.value);
              // }}
              style={{
                height: "40px",
                marginTop: "8px",
              }}
            />
            <div style={{ ...libraryItemsMargins }}>
              <span style={libraryTitle}>Schilder</span>
              <Collapse
                items={items}
                defaultActiveKey={["1"]}
                onChange={onChangeCollapseHandle}
                style={{ margin: "10px 0" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
