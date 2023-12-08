import { Excalidraw, MainMenu, Sidebar, Footer } from "@excalidraw/excalidraw";
import { useEffect, useState } from "react";
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
import { roadSignsJSON } from "./dataSigns";
import { libraryExtractor } from "./libraryExtractor";

export default {
  title: "Stories/DesignerInitData",
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
// const items = [
//   {
//     key: "1",
//     label: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//           color: colorTextBlack,
//         }}
//       >
//         <span style={titleGroupStyle}>Absatz 7</span>
//         <span style={{ fontSize: "12px", color: colorInactiv }}>64</span>
//       </div>
//     ),
//     children: (
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px",
//           color: colorTextBlack,
//         }}
//       >
//         <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
//           <div style={iconWrapperSize}>
//             <img src={SinnbildIcons} style={singleIconStyInternalStyle} />
//           </div>
//           <span style={{ fontSize: "13px", lineHeight: "1.3em" }}>
//             Kraftwagen und sonstige mehrspurige Kraftfahrzeuge
//           </span>
//         </div>

//         <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
//           <div style={iconWrapperSize}>
//             <img src={SinnbildLKWvg} style={singleIconStyInternalStyle} />
//           </div>
//           <span style={{ fontSize: "13px", lineHeight: "1.3em" }}>
//             Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5...
//           </span>
//         </div>

//         <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
//           <div style={iconWrapperSize}>
//             <img src={SinnbildFußganger} style={singleIconStyInternalStyle} />
//           </div>
//           <span style={{ fontSize: "13px", lineHeight: "1.3em" }}>
//             Kraftwagen und sonstige mehrspurige Kraftfahrzeuge
//           </span>
//         </div>
//       </div>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         <span style={titleGroupStyle}>Symbole der Richtlinien</span>
//         <span style={{ fontSize: "12px", color: colorInactiv }}>21</span>
//       </div>
//     ),
//     children: (
//       <span>
//         Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5 t,
//         einschließlich ihrer Anhänger, und Zugmaschinen, ausgenommen
//         Personenkraft­wa­gen und Kraftomni­bus­se
//       </span>
//     ),
//   },
//   {
//     key: "3",
//     label: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         <span style={titleGroupStyle}>Gefahrzeichen nach Anlage 1</span>
//         <span style={{ fontSize: "12px", color: colorInactiv }}>10</span>
//       </div>
//     ),
//     children: (
//       <span>
//         Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5 t,
//         einschließlich ihrer Anhänger, und Zugmaschinen, ausgenommen
//         Personenkraft­wa­gen und Kraftomni­bus­se
//       </span>
//     ),
//     children: <span>Fußgänger</span>,
//   },
//   {
//     key: "4",
//     label: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         <span style={titleGroupStyle}>Allgemeine Gefahrzeichen</span>
//         <span style={{ fontSize: "12px", color: colorInactiv }}>18</span>
//       </div>
//     ),
//     children: (
//       <span>
//         Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5 t,
//         einschließlich ihrer Anhänger, und Zugmaschinen, ausgenommen
//         Personenkraft­wa­gen und Kraftomni­bus­se
//       </span>
//     ),
//     children: <p>Fußgänger</p>,
//   },
//   {
//     key: "5",
//     label: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         <span style={titleGroupStyle}>
//           Besondere Gefahrzeichen vor Übergängen von Schienenbahnen mit Vorrang
//         </span>
//         <span style={{ fontSize: "12px", color: colorInactiv }}>34</span>
//       </div>
//     ),
//     children: (
//       <span>
//         Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5 t,
//         einschließlich ihrer Anhänger, und Zugmaschinen, ausgenommen
//         Personenkraft­wa­gen und Kraftomni­bus­se
//       </span>
//     ),
//     children: <p>Fußgänger</p>,
//   },
// ];

// const itemsOnlyIcon = [
//   {
//     key: "1",
//     label: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         <span style={titleGroupStyle}>Absatz 7</span>
//         <span style={{ fontSize: "12px", color: colorInactiv }}>64</span>
//       </div>
//     ),
//     children: (
//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//           flexWrap: "wrap",
//           marginRight: "-18px",
//         }}
//       >
//         <div style={onlyIconItemsStyle}>
//           <img src={SinnbildIcons} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={SinnbildLKWvg} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={SinnbildFußganger} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Radfahrer} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Reiter} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Viehtrieb} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Straßenbahn} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Gespannfuhrwerk} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Traktor} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Kraftrad} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img
//             src={Einsitzige_zweirädrige_Kleinkrafträder}
//             style={onlyImageInternalStyle}
//           />
//         </div>
//       </div>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         <span style={titleGroupStyle}>Symbole der Richtlinien</span>
//         <span style={{ fontSize: "12px", color: colorInactiv }}>21</span>
//       </div>
//     ),
//     children: (
//       <div
//         style={{
//           display: "flex",
//           gap: "9.9px",
//           flexWrap: "wrap",
//           marginRight: "-20px",
//         }}
//       >
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Radfahrer} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Reiter} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Viehtrieb} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Straßenbahn} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Gespannfuhrwerk} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Traktor} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img src={Sinnbild_Kraftrad} style={onlyImageInternalStyle} />
//         </div>
//         <div style={onlyIconItemsStyle}>
//           <img
//             src={Einsitzige_zweirädrige_Kleinkrafträder}
//             style={onlyImageInternalStyle}
//           />
//         </div>
//       </div>
//     ),
//   },
//   {
//     key: "3",
//     label: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         <span style={titleGroupStyle}>Gefahrzeichen nach Anlage 1</span>
//         <span style={{ fontSize: "12px", color: colorInactiv }}>10</span>
//       </div>
//     ),
//     children: <span></span>,
//     children: <span></span>,
//   },
//   {
//     key: "4",
//     label: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         <span>Allgemeine Gefahrzeichen</span>
//         <span style={{ fontSize: "12px", color: colorInactiv }}>18</span>
//       </div>
//     ),
//     children: <span></span>,
//     children: <p>Fußgänger</p>,
//   },
//   // {
//   //   key: "4",
//   //   label: (
//   //     <div
//   //       style={{
//   //         display: "flex",
//   //         justifyContent: "space-between",
//   //         width: "100%",
//   //       }}
//   //     >
//   //       <span>
//   //         Besondere Gefahrzeichen vor Übergängen von Schienenbahnen mit Vorrang
//   //       </span>
//   //       <span style={{ fontSize: "12px", color: colorInactiv }}>18</span>
//   //     </div>
//   //   ),
//   //   children: <span></span>,
//   //   children: <p>Fußgänger</p>,
//   // },
// ];

export const DesignerInitData = ({
  dataIn = roadSignsJSON,
  extractor = libraryExtractor,
  activeMode = false,
}) => {
  const data = extractor(dataIn);
  const [onlyIconMode, setOnlyIconMode] = useState(true);
  const itemsOnlyIcon = data.map((g) => {
    const groupItems = g.iconsArr.map((icon) => {
      return (
        <div key={icon.iconId} style={iconWrapperSize}>
          <img src={`/${icon.fileName}`} style={singleIconStyInternalStyle} />
        </div>
      );
    });

    return {
      key: g.id,
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: colorTextBlack,
          }}
        >
          <span style={titleGroupStyle}>{g.groupTitle}</span>
          <span style={{ fontSize: "12px", color: colorInactiv }}>
            {groupItems.length}
          </span>
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
          {groupItems.map((item) => item)}
        </div>
      ),
    };
  });

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
              {/* <div>
                {data.map((d) => {
                  return <img src={`/${d.fileName}`} />;
                })} 
              </div>*/}
              <Collapse
                items={itemsOnlyIcon}
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
