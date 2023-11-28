import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default {
  title: "Stories/AddPalettesToCanvas",
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

export const SimplePaletteWithText = () => {
  const [canvas, setCanvas] = useState("");
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 600,
      width: 1000,
    });
  const addText = (canvi) => {
    const rect = new fabric.Rect({
      height: 100,
      width: 100,
      fill: "yellow",
    });
    canvi.add(rect);
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
