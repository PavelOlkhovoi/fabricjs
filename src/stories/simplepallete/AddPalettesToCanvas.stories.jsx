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
  const handleMoveUpActiveItem = () => {
    activeItems.bringToFront();
  };
  const handleMoveDownActiveItem = () => {
    activeItems.sendToBack();
  };
  const handleOpacityActiveItem = () => {
    activeItems.set("opacity", 0.4);
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
        <Button onClick={handleMoveUpActiveItem}>Move Up</Button>
        <Button onClick={handleMoveDownActiveItem}>Move Down</Button>
        <Button onClick={handleOpacityActiveItem}>Opacity</Button>
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
