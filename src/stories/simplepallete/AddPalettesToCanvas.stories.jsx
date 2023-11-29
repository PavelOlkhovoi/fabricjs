import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import {
  Button,
  Input,
  Flex,
  ColorPicker,
  Divider,
  Col,
  InputNumber,
  Row,
  Slider,
  Space,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default {
  title: "Stories/AddPalettesToCanvas",
};

const colorArr = [
  "#000000",
  "#000000E0",
  "#000000A6",
  "#00000073",
  "#00000040",
  "#00000026",
  "#0000001A",
  "#00000012",
  "#0000000A",
  "#00000005",
  "#F5222D",
  "#FA8C16",
  "#FADB14",
  "#8BBB11",
  "#52C41A",
  "#13A8A8",
  "#1677FF",
  "#2F54EB",
  "#722ED1",
  "#EB2F96",
  "#F5222D4D",
  "#FA8C164D",
  "#FADB144D",
  "#8BBB114D",
  "#52C41A4D",
  "#13A8A84D",
  "#1677FF4D",
  "#2F54EB4D",
  "#722ED14D",
  "#EB2F964D",
];

const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === "number" ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={20}
          style={{
            margin: "0 16px",
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

const DecimalStep = ({ defaultOpacity = 1, setOpacity }) => {
  const [inputValue, setInputValue] = useState(defaultOpacity);
  const onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
    setOpacity(value);
  };
  return (
    <Row>
      <Col span={6}>
        <InputNumber
          min={0}
          max={1}
          style={{
            margin: "0 16px",
          }}
          step={0.01}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
      <Col span={10}>
        <Slider
          min={0}
          max={1}
          onChange={onChange}
          value={typeof inputValue === "number" ? inputValue : 0}
          step={0.01}
        />
      </Col>
    </Row>
  );
};

export const SimplePalette = () => {
  const [canvas, setCanvas] = useState("");
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 600,
      width: 1000,
      backgroundColor: "lightgray",
    });
  const addRect = (canvi) => {
    const rect = new fabric.Rect({
      height: 100,
      width: 100,
      fill: "yellow",
    });
    canvi.add(rect);
    canvi.renderAll();
  };
  return (
    <div>
      <h1>Simple palette example</h1>
      <Button icon={<PlusOutlined />} onClick={() => addRect(canvas)}></Button>
      <canvas
        id="canvas"
        width={400}
        height={200}
        style={{ marginTop: "10px" }}
      ></canvas>
    </div>
  );
};

export const SimplifiedTestVersion = () => {
  const [canvas, setCanvas] = useState("");
  const [activeItems, setActiveItems] = useState();
  useEffect(() => {
    const cInstance = new fabric.Canvas("canvas", {
      height: 600,
      width: 1000,
    });
    setCanvas(cInstance);
    cInstance.on("mouse:down", handleActiveItem);
  }, []);

  const handleActiveItem = (obj) => {
    setActiveItems(obj.target);
  };
  const handleDeleteActiveItem = () => {
    canvas.remove(activeItems);
    canvas.renderAll();
  };

  const addRect = () => {
    const rect = new fabric.Rect({
      height: 100,
      width: 100,
      fill: "yellow",
    });
    canvas.add(rect);
    canvas.renderAll();
  };

  const enterBtnHandler = (value) => {
    const text = new fabric.Text(value.target.value, {
      fontFamily: "helvetica",
      fontSize: 30,
      left: 80,
      top: 100,
    });
    canvas.add(text);
    canvas.renderAll();
  };

  return (
    <div style={{ fontFamily: "Helvetica", border: "1px solid, black" }}>
      <h1>Simple palette example</h1>
      <div>
        <Button
          icon={<PlusOutlined />}
          onClick={() => addRect(canvas)}
        ></Button>
        <Input
          defaultValue="Some text"
          style={{ width: "150px", marginLeft: "10px" }}
          onPressEnter={(e) => enterBtnHandler(e)}
        />
        <Button onClick={handleDeleteActiveItem}>Delete</Button>
      </div>
      <canvas
        id="canvas"
        width={400}
        height={200}
        style={{
          marginTop: "20px",
          border: "1px solid #d9d9d9",
          borderRadius: "6px",
        }}
      ></canvas>
    </div>
  );
};

export const SimplePaletteWithText = () => {
  const [canvas, setCanvas] = useState("");
  const [activeItems, setActiveItems] = useState();
  useEffect(() => {
    const cInstance = new fabric.Canvas("canvas", {
      height: 600,
      width: 1000,
    });
    setCanvas(cInstance);
    cInstance.on("mouse:down", handleActiveItem);
  }, []);

  const handleActiveItem = (obj) => {
    setActiveItems(obj.target);
  };
  const handleDeleteActiveItem = (canvi) => {
    canvas.remove(activeItems);
    canvi.renderAll();
  };

  const addRect = (canvi) => {
    const rect = new fabric.Rect({
      height: 100,
      width: 100,
      fill: "yellow",
    });
    canvi.add(rect);
    canvi.renderAll();
  };

  const enterBtnHandler = (canvi, value) => {
    const text = new fabric.Text(value.target.value, {
      fontFamily: "helvetica",
      fontSize: 30,
      left: 80,
      top: 100,
    });
    canvi.add(text);
    canvi.renderAll();
  };

  return (
    <div style={{ fontFamily: "Helvetica", border: "1px solid, black" }}>
      <h1>Simple palette example</h1>
      <div>
        <Button
          icon={<PlusOutlined />}
          onClick={() => addRect(canvas)}
        ></Button>
        <Input
          defaultValue="Some text"
          style={{ width: "150px", marginLeft: "10px" }}
          onPressEnter={(e) => enterBtnHandler(canvas, e)}
        />
        <Button onClick={() => handleDeleteActiveItem(canvas)}>Delete</Button>
      </div>
      <canvas
        id="canvas"
        width={400}
        height={200}
        style={{
          marginTop: "20px",
          border: "1px solid #d9d9d9",
          borderRadius: "6px",
        }}
      ></canvas>
    </div>
  );
};

export const ChangePositionInStack = () => {
  const [canvas, setCanvas] = useState("");
  const [activeItems, setActiveItems] = useState();
  const [opacity, setOpacity] = useState();
  useEffect(() => {
    const cInstance = new fabric.Canvas("canvas", {
      height: 600,
      width: 1000,
    });
    setCanvas(cInstance);
    cInstance.on("mouse:down", handleActiveItem);
    return () => cInstance.off("mouse:down", handleActiveItem);
  }, []);

  const handleActiveItem = (obj) => {
    setActiveItems(obj.target);
    console.log("xxx opacity", obj.target);
    // const currentOpacity = obj.target.get("opacity");
    // setOpacity(currentOpacity);
  };
  const handleDeleteActiveItem = () => {
    canvas.remove(activeItems);
    canvas.renderAll();
  };
  const handleMoveUpActiveItem = () => {
    activeItems.bringToFront();
  };
  const handleMoveDownActiveItem = () => {
    activeItems.sendToBack();
  };
  const handleOpacityActiveItem = (testOpacity) => {
    activeItems.set("opacity", testOpacity);
  };
  const handleBGColorActiveItem = (value, hex) => {
    activeItems.set("fill", hex);
  };

  const addRect = () => {
    const rect = new fabric.Rect({
      height: 100,
      width: 100,
      fill: "yellow",
    });
    canvas.add(rect);
    canvas.renderAll();
  };

  const enterBtnHandler = (value) => {
    const text = new fabric.Text(value.target.value, {
      fontFamily: "helvetica",
      fontSize: 30,
      left: 80,
      top: 100,
    });
    canvas.add(text);
    canvas.renderAll();
  };

  return (
    <div
      style={{
        fontFamily: "Helvetica",
        border: "1px solid, black",
        width: "1000px",
      }}
    >
      <h1>Simple palette example</h1>
      <Flex gap="small" align="start" horiznital>
        <Button
          icon={<PlusOutlined />}
          onClick={() => addRect(canvas)}
        ></Button>
        <ColorPicker
          onChange={handleBGColorActiveItem}
          styles={{
            popupOverlayInner: {
              width: 468 + 24,
            },
          }}
          presets={[
            {
              label: "Recommended",
              colors: colorArr,
            },
            {
              label: "Recent",
              colors: [
                "#F5222D4D",
                "#FA8C164D",
                "#FADB144D",
                "#8BBB114D",
                "#52C41A4D",
                "#13A8A84D",
              ],
            },
          ]}
          panelRender={(_, { components: { Picker, Presets } }) => (
            <div
              className="custom-panel"
              style={{
                display: "flex",
                width: 468,
              }}
            >
              <div
                style={{
                  flex: 1,
                }}
              >
                <Presets />
              </div>
              <Divider
                type="vertical"
                style={{
                  height: "auto",
                }}
              />
              <div
                style={{
                  width: 234,
                }}
              >
                <Picker />
              </div>
            </div>
          )}
        />
        <Input
          defaultValue="Some text"
          style={{ width: "150px" }}
          onPressEnter={(e) => enterBtnHandler(e)}
        />
        <Button onClick={handleDeleteActiveItem}>Delete</Button>
        <Button onClick={handleMoveUpActiveItem}>Move Up</Button>
        <Button onClick={handleMoveDownActiveItem}>Move Down</Button>
        <Button onClick={handleOpacityActiveItem}>Opacity</Button>
        <Space
          style={{
            width: "100%",
          }}
          direction="vertical"
        >
          <DecimalStep
            setOpacity={handleOpacityActiveItem}
            defaultOpacity={opacity}
          />
        </Space>
      </Flex>
      <canvas
        id="canvas"
        width={400}
        height={200}
        style={{
          marginTop: "20px",
          border: "1px solid #d9d9d9",
          borderRadius: "6px",
        }}
      ></canvas>
    </div>
  );
};
