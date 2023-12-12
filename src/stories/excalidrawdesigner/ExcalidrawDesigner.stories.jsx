import { Excalidraw, MainMenu, Sidebar, Footer } from "@excalidraw/excalidraw";
import { useEffect, useState } from "react";
import SinnbildFußganger from "/Sinnbild_Fußgänger.svg";
import SinnbildIcons from "/Sinnbild_Kfz.svg";
import SinnbildLKWvg from "/Sinnbild_LKW.svg";
import Sinnbild_Radfahrer from "/Sinnbild_Radfahrer,_StVO_1992.svg";
import Sinnbild_Reiter from "/Sinnbild_Reiter,_StVO_1992.svg";
import Sinnbild_Viehtrieb from "/Sinnbild_Viehtrieb,_Tiere,_StVO_1992.svg";
import Sinnbild_Straßenbahn from "/Sinnbild_Straßenbahn.svg";
import Sinnbild_Gespannfuhrwerk from "/Sinnbild_Gespannfuhrwerk,_StVO_2004.svg";
import Sinnbild_Traktor from "/Sinnbild_Traktor.svg";
import Sinnbild_Kraftrad from "/Sinnbild_Kraftrad.svg";
import Einsitzige_zweirädrige_Kleinkrafträder from "/Einsitzige_zweirädrige_Kleinkrafträder_mit_elektrischem_Antrieb,_Sinnbild_nach_§_39,_StVO_2017.svg";
import { nanoid } from "nanoid";
import "./designer.css";
import { Input, Collapse, Divider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  CloseOutlined,
  PushpinOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
  CloseCircleOutlined,
  ClearOutlined,
} from "@ant-design/icons";

export default {
  title: "Stories/DesignerComponent",
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
  // fontWeight: "bold",
  lineHeight: "1.4em",
};

const onlyImageInternalStyle = { height: "calc(100% - 10px)" };
const items = [
  {
    key: "1",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          color: colorTextBlack,
        }}
      >
        <span style={titleGroupStyle}>Absatz 7</span>
        <span style={{ fontSize: "12px", color: colorInactiv }}>64</span>
      </div>
    ),
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          color: colorTextBlack,
        }}
      >
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div style={iconWrapperSize}>
            <img src={SinnbildIcons} style={singleIconStyInternalStyle} />
          </div>
          <span style={{ fontSize: "13px", lineHeight: "1.3em" }}>
            Kraftwagen und sonstige mehrspurige Kraftfahrzeuge
          </span>
        </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div style={iconWrapperSize}>
            <img src={SinnbildLKWvg} style={singleIconStyInternalStyle} />
          </div>
          <span style={{ fontSize: "13px", lineHeight: "1.3em" }}>
            Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5...
          </span>
        </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div style={iconWrapperSize}>
            <img src={SinnbildFußganger} style={singleIconStyInternalStyle} />
          </div>
          <span style={{ fontSize: "13px", lineHeight: "1.3em" }}>
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
        <span style={titleGroupStyle}>Symbole der Richtlinien</span>
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
        <span style={titleGroupStyle}>Gefahrzeichen nach Anlage 1</span>
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
        <span style={titleGroupStyle}>Allgemeine Gefahrzeichen</span>
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
        <span style={titleGroupStyle}>
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

const itemsOnlyIcon = [
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
        <span style={titleGroupStyle}>Absatz 7</span>
        <span style={{ fontSize: "12px", color: colorInactiv }}>64</span>
      </div>
    ),
    children: (
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginRight: "-18px",
        }}
      >
        <div style={onlyIconItemsStyle}>
          <img src={SinnbildIcons} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={SinnbildLKWvg} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={SinnbildFußganger} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Radfahrer} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Reiter} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Viehtrieb} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Straßenbahn} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Gespannfuhrwerk} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Traktor} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Kraftrad} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img
            src={Einsitzige_zweirädrige_Kleinkrafträder}
            style={onlyImageInternalStyle}
          />
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
        <span style={titleGroupStyle}>Symbole der Richtlinien</span>
        <span style={{ fontSize: "12px", color: colorInactiv }}>21</span>
      </div>
    ),
    children: (
      <div
        style={{
          display: "flex",
          gap: "9.9px",
          flexWrap: "wrap",
          marginRight: "-20px",
        }}
      >
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Radfahrer} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Reiter} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Viehtrieb} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Straßenbahn} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Gespannfuhrwerk} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Traktor} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img src={Sinnbild_Kraftrad} style={onlyImageInternalStyle} />
        </div>
        <div style={onlyIconItemsStyle}>
          <img
            src={Einsitzige_zweirädrige_Kleinkrafträder}
            style={onlyImageInternalStyle}
          />
        </div>
      </div>
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
        <span style={titleGroupStyle}>Gefahrzeichen nach Anlage 1</span>
        <span style={{ fontSize: "12px", color: colorInactiv }}>10</span>
      </div>
    ),
    children: <span></span>,
    children: <span></span>,
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
    children: <span></span>,
    children: <p>Fußgänger</p>,
  },
  // {
  //   key: "4",
  //   label: (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "space-between",
  //         width: "100%",
  //       }}
  //     >
  //       <span>
  //         Besondere Gefahrzeichen vor Übergängen von Schienenbahnen mit Vorrang
  //       </span>
  //       <span style={{ fontSize: "12px", color: colorInactiv }}>18</span>
  //     </div>
  //   ),
  //   children: <span></span>,
  //   children: <p>Fußgänger</p>,
  // },
];

export const DesignerWrapperGridBorderless = ({
  initialData,
  activeMode = false,
}) => {
  const [onlyIconMode, setOnlyIconMode] = useState(true);
  const onChangeCollapseHandle = (key) => {
    console.log(key);
  };
  const displayOnlyIconMode = () => {
    setOnlyIconMode(true);
  };
  const displayIconModeWithText = () => {
    setOnlyIconMode(false);
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
                    onClick={displayIconModeWithText}
                  />
                  <UnorderedListOutlined
                    onClick={displayOnlyIconMode}
                    style={{ color: onlyIconMode && colorInactiv }}
                  />
                </div>
              </div>
              <Collapse
                items={!onlyIconMode ? items : itemsOnlyIcon}
                ghost
                defaultActiveKey={["1"]}
                onChange={onChangeCollapseHandle}
                // style={{ marginRight: "-8px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const DesignerWrapperGridBorderlessChangeMarings = ({
  initialData,
  activeMode = false,
}) => {
  const [onlyIconMode, setOnlyIconMode] = useState(true);
  const onChangeCollapseHandle = (key) => {
    console.log(key);
  };
  const displayOnlyIconMode = () => {
    setOnlyIconMode(true);
  };
  const displayIconModeWithText = () => {
    setOnlyIconMode(false);
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
            padding: "4px 28px 4px 28px",
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
            <Divider style={{ margin: "18px 0px" }} />
          </div>
          <div style={{ margin: "30px 0px" }}>
            <span style={libraryTitle}>Suche</span>
            <Input
              size="large"
              prefix={<SearchOutlined />}
              style={{
                height: "34px",
                marginTop: "8px",
              }}
            />
            <div style={{ margin: "30px 0px 0px 0px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                  // marginRight: "-20px",
                }}
              >
                <span style={libraryTitle}>Schilder</span>
                <div style={{ display: "flex", gap: "12px" }}>
                  <AppstoreOutlined
                    style={{ color: !onlyIconMode && colorInactiv }}
                    onClick={displayIconModeWithText}
                  />
                  <UnorderedListOutlined
                    onClick={displayOnlyIconMode}
                    style={{ color: onlyIconMode && colorInactiv }}
                  />
                </div>
              </div>
              <Collapse
                items={!onlyIconMode ? items : itemsOnlyIcon}
                ghost
                defaultActiveKey={["1"]}
                onChange={onChangeCollapseHandle}
                // style={{ marginRight: "-8px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const DesignerWrapperGridBorderWhithoutShadow = ({
  initialData,
  activeMode = false,
}) => {
  const [onlyIconMode, setOnlyIconMode] = useState(true);
  const onChangeCollapseHandle = (key) => {
    console.log(key);
  };
  const displayOnlyIconMode = () => {
    setOnlyIconMode(true);
  };
  const displayIconModeWithText = () => {
    setOnlyIconMode(false);
  };
  return (
    <>
      <div style={{ height: "700px", display: "flex" }}>
        <Excalidraw />
        <div
          style={{
            marginLeft: "20px",
            width: "340px",
            // border: "1px solid #F0F0F0",
            padding: "4px 28px 4px 28px",
            // boxShadow: "rgba(15, 14, 15, 0.07) 0px 5px 9px 1px",
            // borderRadius: "12px",
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
            <Divider style={{ margin: "18px 0px" }} />
          </div>
          <div style={{ margin: "30px 0px" }}>
            <span style={libraryTitle}>Suche</span>
            <Input
              size="large"
              prefix={<SearchOutlined />}
              style={{
                height: "34px",
                marginTop: "8px",
              }}
            />
            <div style={{ margin: "30px 0px 0px 0px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                  // marginRight: "-20px",
                }}
              >
                <span style={libraryTitle}>Schilder</span>
                <div style={{ display: "flex", gap: "12px" }}>
                  <AppstoreOutlined
                    style={{ color: !onlyIconMode && colorInactiv }}
                    onClick={displayIconModeWithText}
                  />
                  <UnorderedListOutlined
                    onClick={displayOnlyIconMode}
                    style={{ color: onlyIconMode && colorInactiv }}
                  />
                </div>
              </div>
              <Collapse
                items={!onlyIconMode ? items : itemsOnlyIcon}
                ghost
                defaultActiveKey={["1"]}
                onChange={onChangeCollapseHandle}
                // style={{ marginRight: "-8px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const DesignerWrapperGridBorderWhithoutShadowWthLine = ({
  initialData,
  activeMode = false,
}) => {
  const [onlyIconMode, setOnlyIconMode] = useState(true);
  const onChangeCollapseHandle = (key) => {
    console.log(key);
  };
  const displayOnlyIconMode = () => {
    setOnlyIconMode(true);
  };
  const displayIconModeWithText = () => {
    setOnlyIconMode(false);
  };
  return (
    <>
      <div style={{ height: "700px", display: "flex" }}>
        <Excalidraw />
        <div
          style={{
            marginLeft: "20px",
            width: "340px",
            borderLeft: "1px solid #F0F0F0",
            padding: "4px 28px 4px 28px",
            // boxShadow: "rgba(15, 14, 15, 0.07) 0px 5px 9px 1px",
            // borderRadius: "12px",
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
            <Divider style={{ margin: "18px 0px" }} />
          </div>
          <div style={{ margin: "30px 0px" }}>
            <span style={libraryTitle}>Suche</span>
            <Input
              size="large"
              prefix={<SearchOutlined />}
              style={{
                height: "34px",
                marginTop: "8px",
              }}
            />
            <div style={{ margin: "30px 0px 0px 0px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                  // marginRight: "-20px",
                }}
              >
                <span style={libraryTitle}>Schilder</span>
                <div style={{ display: "flex", gap: "12px" }}>
                  <AppstoreOutlined
                    style={{ color: !onlyIconMode && colorInactiv }}
                    onClick={displayIconModeWithText}
                  />
                  <UnorderedListOutlined
                    onClick={displayOnlyIconMode}
                    style={{ color: onlyIconMode && colorInactiv }}
                  />
                </div>
              </div>
              <Collapse
                items={!onlyIconMode ? items : itemsOnlyIcon}
                ghost
                defaultActiveKey={["1"]}
                onChange={onChangeCollapseHandle}
                // style={{ marginRight: "-8px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const DesignerWrapperGridBorderSearch = ({
  initialData,
  activeMode = false,
}) => {
  const [onlyIconMode, setOnlyIconMode] = useState(true);
  const [searchResult, setSearchResalt] = useState(true);
  const [onlyIconModeSearch, setOnlyIconModeSearch] = useState(true);
  const onChangeCollapseHandle = (key) => {
    console.log(key);
  };
  const displayOnlyIconMode = () => {
    setOnlyIconMode(true);
  };
  const displayIconModeWithText = () => {
    setOnlyIconMode(false);
  };
  const displayOnlyIconModeSearch = () => {
    setOnlyIconModeSearch(true);
  };
  const displayIconModeWithTextSearch = () => {
    setOnlyIconModeSearch(false);
  };
  return (
    <>
      <div style={{ height: "700px", display: "flex" }}>
        <Excalidraw />
        <div
          style={{
            marginLeft: "20px",
            width: "340px",
            borderLeft: "1px solid #F0F0F0",
            padding: "4px 28px 4px 28px",
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
            <Divider style={{ margin: "18px 0px" }} />
          </div>
          <div style={{ margin: "30px 0px" }}>
            <span style={libraryTitle}>Suche</span>
            <Input
              size="large"
              prefix={<SearchOutlined />}
              style={{
                height: "34px",
                marginTop: "8px",
              }}
            />
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ margin: "24px 0px" }}>
                  <span style={{ ...titleGroupStyle }}>Ergebnisse</span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: colorTextBlack,
                      marginLeft: "8px",
                    }}
                  >
                    24
                  </span>
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <ClearOutlined />
                  <div
                    style={{
                      width: "1px",
                      height: "14px",
                      background: borderColor,
                    }}
                  ></div>
                  <AppstoreOutlined
                    style={{ color: !onlyIconMode && colorInactiv }}
                    onClick={displayIconModeWithTextSearch}
                  />
                  <UnorderedListOutlined
                    onClick={displayOnlyIconModeSearch}
                    style={{ color: onlyIconMode && colorInactiv }}
                  />
                </div>
              </div>
              {/* <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span>clear</span> <CloseCircleOutlined />
              </div> */}
              {onlyIconModeSearch ? (
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginRight: "-18px",
                  }}
                >
                  <div style={onlyIconItemsStyle}>
                    <img src={SinnbildIcons} style={onlyImageInternalStyle} />
                  </div>
                  <div style={onlyIconItemsStyle}>
                    <img src={SinnbildLKWvg} style={onlyImageInternalStyle} />
                  </div>
                  <div style={onlyIconItemsStyle}>
                    <img
                      src={SinnbildFußganger}
                      style={onlyImageInternalStyle}
                    />
                  </div>
                  <div style={onlyIconItemsStyle}>
                    <img
                      src={Sinnbild_Radfahrer}
                      style={onlyImageInternalStyle}
                    />
                  </div>
                  <div style={onlyIconItemsStyle}>
                    <img src={Sinnbild_Reiter} style={onlyImageInternalStyle} />
                  </div>
                  <div style={onlyIconItemsStyle}>
                    <img
                      src={Sinnbild_Viehtrieb}
                      style={onlyImageInternalStyle}
                    />
                  </div>
                  <div style={onlyIconItemsStyle}>
                    <img
                      src={Sinnbild_Straßenbahn}
                      style={onlyImageInternalStyle}
                    />
                  </div>
                  <div style={onlyIconItemsStyle}>
                    <img
                      src={Sinnbild_Gespannfuhrwerk}
                      style={onlyImageInternalStyle}
                    />
                  </div>
                  <div style={onlyIconItemsStyle}>
                    <img
                      src={Sinnbild_Traktor}
                      style={onlyImageInternalStyle}
                    />
                  </div>
                  <div style={onlyIconItemsStyle}>
                    <img
                      src={Sinnbild_Kraftrad}
                      style={onlyImageInternalStyle}
                    />
                  </div>
                  <div style={onlyIconItemsStyle}>
                    <img
                      src={Einsitzige_zweirädrige_Kleinkrafträder}
                      style={onlyImageInternalStyle}
                    />
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    color: colorTextBlack,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <div style={iconWrapperSize}>
                      <img
                        src={SinnbildIcons}
                        style={singleIconStyInternalStyle}
                      />
                    </div>
                    <span style={{ fontSize: "13px", lineHeight: "1.3em" }}>
                      Kraftwagen und sonstige mehrspurige Kraftfahrzeuge
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <div style={iconWrapperSize}>
                      <img
                        src={SinnbildLKWvg}
                        style={singleIconStyInternalStyle}
                      />
                    </div>
                    <span style={{ fontSize: "13px", lineHeight: "1.3em" }}>
                      Kraftfahrzeuge mit einer zulässigen Gesamtmasse über
                      3,5...
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <div style={iconWrapperSize}>
                      <img
                        src={SinnbildFußganger}
                        style={singleIconStyInternalStyle}
                      />
                    </div>
                    <span style={{ fontSize: "13px", lineHeight: "1.3em" }}>
                      Kraftwagen und sonstige mehrspurige Kraftfahrzeuge
                    </span>
                  </div>
                </div>
              )}
            </div>

            {!searchResult && (
              <div style={{ margin: "30px 0px 0px 0px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "6px",
                    // marginRight: "-20px",
                  }}
                >
                  <span style={libraryTitle}>Schilder</span>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <AppstoreOutlined
                      style={{ color: !onlyIconMode && colorInactiv }}
                      onClick={displayIconModeWithText}
                    />
                    <UnorderedListOutlined
                      onClick={displayOnlyIconMode}
                      style={{ color: onlyIconMode && colorInactiv }}
                    />
                  </div>
                </div>
                <Collapse
                  items={!onlyIconMode ? items : itemsOnlyIcon}
                  ghost
                  defaultActiveKey={["1"]}
                  onChange={onChangeCollapseHandle}
                  // style={{ marginRight: "-8px" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// export const GridExampleForIcons = () => {
//   return (
//     <div style={{ height: "700px", display: "flex" }}>
//       <Excalidraw />
//       <div
//         style={{
//           marginLeft: "20px",
//           width: "340px",
//           borderLeft: "1px solid #F0F0F0",
//           padding: "4px 28px 4px 28px",

//           overflow: "auto",
//           height: "700px",
//           color: "#1b1b1f",
//         }}
//       >
//         <div style={{ margin: "26px 0" }}>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <span style={libraryTitle}>Bibliothek</span>
//             <div style={{ marginLeft: "auto" }}>
//               <PushpinOutlined
//                 style={{
//                   color: "#a5a5a5",
//                   fontSize: "16px",
//                   fontWeight: "bold",
//                   marginRight: "12px",
//                 }}
//               />
//               <CloseOutlined
//                 style={{
//                   // color: colorPrimary,
//                   fontSize: "16px",
//                   fontWeight: "medium",
//                   color: "#1b1b1f",
//                 }}
//               />
//             </div>
//           </div>
//           <Divider style={{ margin: "18px 0px" }} />
//         </div>
//         <div style={{ margin: "30px 0px" }}>
//           <span style={libraryTitle}>Suche</span>
//           <Input
//             size="large"
//             prefix={<SearchOutlined />}
//             style={{
//               height: "34px",
//               marginTop: "8px",
//             }}
//           />
//           <div style={{ margin: "30px 0px 0px 0px" }}>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginBottom: "6px",
//               }}
//             >
//               <span style={libraryTitle}>Schilder</span>
//               <div style={{ display: "flex", gap: "12px" }}>
//                 <AppstoreOutlined style={{ color: colorInactiv }} />
//                 <UnorderedListOutlined style={{ color: colorInactiv }} />
//               </div>
//             </div>
//             <div>
//               <div class="grid-container">
//                 <div style={{ width: "60px", height: "60px" }}>
//                   <img src={SinnbildIcons} style={{ width: "100%" }} />
//                 </div>
//                 <div style={{ width: "60px", height: "60px" }}>
//                   <img src={SinnbildLKWvg} style={{ width: "100%" }} />
//                 </div>
//                 <div
//                   style={{
//                     width: "60px",
//                     height: "60px",
//                     display: "flex",
//                     // alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <img
//                     src={SinnbildFußganger}
//                     style={{ flex: "0 0", width: "100%" }}
//                   />
//                 </div>
//                 <div style={{ width: "60px", height: "60px" }}>
//                   <img src={Sinnbild_Radfahrer} style={{ width: "100%" }} />
//                 </div>
//                 <div style={{ width: "60px", height: "60px" }}>
//                   <img src={Sinnbild_Reiter} style={{ width: "100%" }} />
//                 </div>
//                 <div style={{ width: "60px", height: "60px" }}>
//                   <img src={Sinnbild_Viehtrieb} style={{ width: "100%" }} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const SimpleFlexGrid = () => {
//   const iconStyle = {
//     boxSizing: "border-box",
//     width: "calc(100%/4 - 10px)",
//     // height: "30px",
//     background: "blue",
//     // margin: "10px",
//     aspectRatio: "1/1",
//   };
//   return (
//     <div
//       style={{
//         boxSizing: "border-box",
//         // marginLeft: "-10px",
//         // marginRight: "-10px",
//         // width: "400px",
//         // height: "300px",
//         // border: "1px solid red",
//       }}
//     >
//       <div
//         style={{
//           boxSizing: "border-box",
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "10px",
//           width: "400px",
//           height: "300px",
//         }}
//       >
//         <div style={iconStyle}></div>
//         <div style={iconStyle}></div>
//         <div style={iconStyle}></div>
//         <div style={iconStyle}></div>
//         <div style={iconStyle}></div>
//         <div style={iconStyle}></div>
//         <div style={iconStyle}></div>
//         <div style={iconStyle}></div>
//         <div style={iconStyle}></div>
//         <div style={iconStyle}></div>
//         <div style={iconStyle}></div>
//       </div>
//     </div>
//   );
// };

export const DesignerWrapperCategory = ({
  initialData,
  activeMode = false,
}) => {
  const [onlyIconMode, setOnlyIconMode] = useState(true);
  const onChangeCollapseHandle = (key) => {
    console.log(key);
  };
  const displayOnlyIconMode = () => {
    setOnlyIconMode(true);
  };
  const displayIconModeWithText = () => {
    setOnlyIconMode(false);
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
                    onClick={displayIconModeWithText}
                  />
                  <UnorderedListOutlined
                    onClick={displayOnlyIconMode}
                    style={{ color: onlyIconMode && colorInactiv }}
                  />
                </div>
              </div>
              <Collapse
                items={!onlyIconMode ? items : itemsOnlyIcon}
                ghost
                defaultActiveKey={["1"]}
                onChange={onChangeCollapseHandle}
                // style={{ marginRight: "-8px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
