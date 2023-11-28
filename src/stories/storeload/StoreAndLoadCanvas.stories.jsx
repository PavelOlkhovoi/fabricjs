import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { savedCanvasJSON } from "./data";
export default {
  title: "Stories/StoreAndLoadCanvas",
};

const flexCotainer = {
  display: "flex",
};

export const SimplePaletteSave = () => {
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
  const saveCanvasHandler = () => {
    console.log("xxx saveCanvasHandler", JSON.stringify(canvas));
  };
  return (
    <div style={{ fontFamily: "Helvetica", border: "1px solid, black" }}>
      <h1>Simple palette example</h1>
      <div style={{ ...flexCotainer, width: "1000px" }}>
        <Button
          icon={<PlusOutlined />}
          onClick={() => addRect(canvas)}
        ></Button>
        <Input
          defaultValue="Some text"
          style={{ width: "150px", marginLeft: "10px" }}
          onPressEnter={(e) => enterBtnHandler(canvas, e)}
        />
        <Button style={{ marginLeft: "auto" }} onClick={saveCanvasHandler}>
          Save canvas
        </Button>
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
export const SimplePaletteLoad = () => {
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
  const loadCanvasHandler = () => {
    console.log("xxx loadCanvasHandler", canvas.loadFromJSON(savedCanvasJSON));
  };
  return (
    <div style={{ fontFamily: "Helvetica", border: "1px solid, black" }}>
      <h1>Simple palette example</h1>
      <div style={{ ...flexCotainer, width: "1000px" }}>
        <Button
          icon={<PlusOutlined />}
          onClick={() => addRect(canvas)}
        ></Button>
        <Input
          defaultValue="Some text"
          style={{ width: "150px", marginLeft: "10px" }}
          onPressEnter={(e) => enterBtnHandler(canvas, e)}
        />
        <Button style={{ marginLeft: "auto" }} onClick={loadCanvasHandler}>
          Load canvas
        </Button>
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
