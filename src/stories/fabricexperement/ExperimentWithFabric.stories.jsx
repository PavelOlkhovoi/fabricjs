import React, { useEffect } from "react";
import { fabric } from "fabric";
import customImage from "../../assets/loginLeft.png";

export default {
  title: "Stories/Experiments",
};

export const FirstSimpleAdHocStory = (args) => <div style={{}}>111</div>;

export const SimpleRedRectangle = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");

    const rect = new fabric.Rect({
      left: 10,
      top: 10,
      width: 100,
      height: 50,
      fill: "red",
    });

    canvas.add(rect);
  }, []);

  return (
    <div>
      <h1>Simple red rectangle</h1>
      <canvas id="canvas" width={400} height={200}></canvas>
    </div>
  );
};

export const RectangleWithStrikeAndOpacity = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");

    const rect = new fabric.Rect({
      left: 100,
      top: 10,
      width: 100,
      height: 50,
      fill: "red",
      angle: 45,
    });

    canvas.add(rect);
  }, []);

  return (
    <div>
      <h1>Simple red rectangle</h1>
      <canvas id="canvas" width={400} height={200}></canvas>
    </div>
  );
};
export const SimpleMoveRectangle = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");

    const rect = new fabric.Rect({
      left: 100,
      top: 10,
      width: 100,
      height: 50,
      fill: "red",
      angle: 45,
    });

    canvas.add(rect);

    rect.set({ left: 120, top: 50 });
    canvas.renderAll();
  }, []);

  return (
    <div>
      <h1>Simple red rectangle</h1>
      <canvas id="canvas" width={400} height={200}></canvas>
    </div>
  );
};

export const SimpleManyObjects = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");

    const rect = new fabric.Rect({
      left: 100,
      top: 10,
      width: 100,
      height: 50,
      fill: "red",
      angle: 45,
    });

    const triangle = new fabric.Triangle({
      width: 20,
      height: 30,
      fill: "blue",
      left: 50,
      top: 50,
    });

    const circle = new fabric.Circle({
      radius: 20,
      fill: "green",
      left: 200,
      top: 100,
    });

    canvas.add(rect, triangle, circle);
  }, []);

  return (
    <div>
      <h1>Simple many objects</h1>
      <canvas id="canvas" width={400} height={200}></canvas>
    </div>
  );
};

export const SimpleWithRectangle = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");

    const rect = new fabric.Rect({
      left: 80,
      top: 10,
      width: 100,
      height: 50,
      fill: "red",
    });

    canvas.add(rect);

    rect.set("fill", "red");
    rect.set({ strokeWidth: 5, stroke: "rgba(100,200,200,0.5)" });
    rect.set("angle", 15).set("flipY", true);
    rect.set("opacity", 0.2);
  }, []);

  return (
    <div>
      <canvas id="canvas" width={400} height={200}></canvas>
    </div>
  );
};

fabric.Object.prototype.getAngleInRadians = function () {
  return (this.get("angle") / 180) * Math.PI;
};

export const RectangleWithPrototype = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");

    const rect = new fabric.Rect({
      left: 100,
      top: 10,
      width: 100,
      height: 50,
      fill: "green",
      angle: 45,
    });

    rect.getAngleInRadians();
    canvas.add(rect);
  }, []);

  return (
    <div>
      <canvas id="canvas" width={400} height={200}></canvas>
    </div>
  );
};

export const SimpleManySelectionObjects = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      backgroundColor: "rgb(100,100,200)",
      selectionColor: "blue",
      selectionLineWidth: 2,
    });

    const rect = new fabric.Rect({
      left: 100,
      top: 10,
      width: 100,
      height: 50,
      fill: "red",
      angle: 45,
    });

    const triangle = new fabric.Triangle({
      width: 20,
      height: 30,
      fill: "blue",
      left: 50,
      top: 50,
    });

    const circle = new fabric.Circle({
      radius: 20,
      fill: "green",
      left: 200,
      top: 100,
    });

    canvas.add(rect, triangle, circle);
  }, []);

  return (
    <div>
      <canvas id="canvas" width={400} height={200}></canvas>
    </div>
  );
};

export const UnselectableObjects = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      backgroundColor: "rgb(100,100,200)",
      selectionColor: "blue",
      selectionLineWidth: 2,
    });

    const rect = new fabric.Rect({
      left: 100,
      top: 10,
      width: 100,
      height: 50,
      fill: "red",
      angle: 45,
    });

    const triangle = new fabric.Triangle({
      width: 20,
      height: 30,
      fill: "blue",
      left: 50,
      top: 50,
    });

    const circle = new fabric.Circle({
      radius: 20,
      fill: "green",
      left: 200,
      top: 100,
    });

    canvas.selection = false;
    triangle.set("selectable", false);

    canvas.add(rect, triangle, circle);
  }, []);

  return (
    <div>
      <canvas id="canvas" width={400} height={200}></canvas>
    </div>
  );
};

export const SimplePath = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");

    const path = new fabric.Path("M 0 0 L 200 100 L 170 200 z");
    path.set({ left: 120, top: 120 });
    path.set({ fill: "red", stroke: "green", opacity: 0.5 });
    canvas.add(path);
  }, []);

  return (
    <div>
      <canvas id="canvas" width={400} height={200}></canvas>
    </div>
  );
};
export const SimpleText = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");
    const helveticaText = new fabric.Text("I'm in Helvetica", {
      fontFamily: "helvetica",
    });
    const text20 = new fabric.Text("I'm at fontSize 20", {
      fontSize: 20,
    });
    text20.set({ left: 120, top: 120 });
    canvas.add(text20, helveticaText);
  }, []);

  return (
    <div>
      <canvas id="canvas" width={400} height={200}></canvas>
    </div>
  );
};
export const MouseDownEvent = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");
    const rect = new fabric.Rect({
      left: 80,
      top: 10,
      width: 100,
      height: 50,
      fill: "red",
    });
    canvas.add(rect);
    canvas.on("mouse:down", function (options) {
      // console.log(options.e.clientX, options.e.clientY);
      console.log("an object was clicked! ", options.target.type);
    });
  }, []);

  return (
    <div>
      <canvas id="canvas" width={400} height={200}></canvas>
    </div>
  );
};

export const SingleGroup = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");
    const circle = new fabric.Circle({
      radius: 100,
      fill: "#eef",
      scaleY: 0.5,
      originX: "center",
      originY: "center",
    });

    const text = new fabric.Text("hello world", {
      fontSize: 30,
      originX: "center",
      originY: "center",
    });

    const group = new fabric.Group([circle, text], {
      left: 150,
      top: 100,
    });

    canvas.add(group);
    group.item(0).set("fill", "red");
    group.item(1).set({
      text: "fabric",
      fill: "white",
    });
  }, []);

  return (
    <div>
      <canvas id="canvas" width={400} height={200}></canvas>
    </div>
  );
};

export const SimpleImage = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");
    fabric.Image.fromURL(customImage, function (oImg) {
      oImg.scale(0.5).set("flipX", true);
      canvas.add(oImg);
    });
  }, []);

  return (
    <div>
      <canvas id="canvas" width={400} height={200}></canvas>
    </div>
  );
};
