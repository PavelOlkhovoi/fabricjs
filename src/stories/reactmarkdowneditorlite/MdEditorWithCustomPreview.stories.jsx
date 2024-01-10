import React, { useState, useEffect, useRef } from "react";
import { Tabs } from "antd";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";
import "./splitstyle.css";
import md5 from "md5";
export default {
  title: "MKEditorPrev/MkdEditorWithCustomPrev",
};

const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

const pluginsListSplited = [
  "divider",
  "logger",
  "divider",
  "header",
  "font-bold",
  "font-italic",
  "font-underline",
  "font-strikethrough",
  "list-unordered",
  "list-ordered",
  "block-quote",
  "link",
  "divider",
  "image",
];

export const MkdEditorWithCustomPreview = ({
  fallback = () => console.log("fallback function"),
}) => {
  const [mdText, setMdText] = useState("");
  const [mdImages, setMdImages] = useState({});
  const [mdForRendering, setMdForRendering] = useState("");

  function onImageUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data) => {
        const dataUrl = `data:image/png;base64,md5:${md5(
          `${data.target.result}`
        )}`;

        const newImages = {};
        newImages[dataUrl] = data.target.result;
        console.log("xxx newImages", newImages);

        console.log("xxx newImages", JSON.stringify(newImages));

        setMdImages((prev) => ({ ...prev, ...newImages }));
        resolve(dataUrl);
      };
      reader.readAsDataURL(file);
    });
  }

  function handleEditorChange({ html, text }) {
    setMdText(text);
  }

  useEffect(() => {
    console.log("xxx images", mdText, mdImages);
    let mdWithImages = mdText;
    console.log("xxx renderHTML", Object.keys(mdImages));

    for (const dataUrl of Object.keys(mdImages)) {
      console.log("xxx replace ", dataUrl);
      mdWithImages = mdWithImages.replaceAll(dataUrl, mdImages[dataUrl]);
    }
    console.log("xxx mdWithImages", mdWithImages);
    setMdForRendering(mdWithImages);
  }, [mdImages, mdText]);

  const onChange = (key) => {
    console.log(key);
  };
  // const tabsItems = [
  //   {
  //     label: "Editor",
  //     key: "111",
  //     children: (
  //       <MdEditor
  //         key={"mdEditor"}
  //         style={{ width: "1000px", height: "900px" }}
  //         plugins={pluginsListSplited}
  //         renderHTML={(text) => {
  //           console.log("xxx renderHTML", Object.keys(mdImages));

  //           // for (const dataUrl of Object.keys(mdImages)) {

  //           return mdParser.render("");
  //         }}
  //         value={mdText}
  //         onChange={handleEditorChange}
  //         onImageUpload={(e) => onImageUpload(e)}
  //         view={{ menu: true, md: true, html: false }}
  //       />
  //     ),
  //   },
  //   {
  //     label: "Preview",
  //     key: "2222",
  //     children: (
  //       <div
  //         dangerouslySetInnerHTML={{ __html: mdParser.render(mdForRendering) }}
  //       ></div>
  //     ),
  //   },
  // ];

  return (
    <div>
      <Tabs
        onChange={onChange}
        type="card"
        // items={new Array(2).fill(null).map((_, i) => {
        //   const id = String(i + 1);
        //   return {
        //     label: i === 0 ? "Edit" : "Preview",
        //     key: id,
        //     children:
        //       i === 0 ? (
        //         <MdEditor
        //           key={"mdEditor"}
        //           style={{ width: "1000px", height: "900px" }}
        //           plugins={pluginsListSplited}
        //           renderHTML={(text) => {
        //             console.log("xxx renderHTML", Object.keys(mdImages));

        //             // for (const dataUrl of Object.keys(mdImages)) {

        //             return mdParser.render("");
        //           }}
        //           value={mdText}
        //           onChange={handleEditorChange}
        //           onImageUpload={(e) => onImageUpload(e)}
        //           view={{ menu: true, md: true, html: false }}
        //         />
        //       ) : (
        //         <div></div>
        //       ),
        //   };
        // })}
        items={[
          {
            key: "1",
            label: "Test",
            children: (
              <MdEditor
                key={"mdEditor"}
                style={{ width: "1000px", height: "900px" }}
                plugins={pluginsListSplited}
                renderHTML={(text) => {
                  console.log("xxx renderHTML", Object.keys(mdImages));

                  // for (const dataUrl of Object.keys(mdImages)) {

                  return mdParser.render("");
                }}
                value={mdText}
                onChange={handleEditorChange}
                onImageUpload={(e) => onImageUpload(e)}
                view={{ menu: true, md: true, html: false }}
              />
            ),
          },
        ]}
        // items={tabsItems}
      />

      <div
        dangerouslySetInnerHTML={{ __html: mdParser.render(mdForRendering) }}
      ></div>
    </div>
  );
};
export const MkdEditorWithCustomTabs = ({
  fallback = () => console.log("fallback function"),
}) => {
  const [mdText, setMdText] = useState("");
  const [mdImages, setMdImages] = useState({});
  const [mdForRendering, setMdForRendering] = useState("");
  const [ifEditorMode, setIfEditorMode] = useState(true);

  function onImageUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data) => {
        const dataUrl = `data:image/png;base64,md5:${md5(
          `${data.target.result}`
        )}`;
        // const dataUrl = "xxx";

        const newImages = {};
        newImages[dataUrl] = data.target.result;
        console.log("xxx newImages", newImages);

        console.log("xxx newImages", JSON.stringify(newImages));

        setMdImages((prev) => ({ ...prev, ...newImages }));
        resolve(dataUrl);
      };
      reader.readAsDataURL(file);
    });
  }

  function handleEditorChange({ html, text }) {
    setMdText(text);
  }

  useEffect(() => {
    console.log("xxx images", mdText, mdImages);
    let mdWithImages = mdText;
    console.log("xxx renderHTML", Object.keys(mdImages));

    for (const dataUrl of Object.keys(mdImages)) {
      console.log("xxx replace ", dataUrl);
      mdWithImages = mdWithImages.replaceAll(dataUrl, mdImages[dataUrl]);
    }
    console.log("xxx mdWithImages", mdWithImages);
    setMdForRendering(mdWithImages);
  }, [mdImages, mdText]);
  // console.log("yyy mdImages", JSON.stringify(mdImages));
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <span onClick={() => setIfEditorMode(true)}>Editor</span>
      <span onClick={() => setIfEditorMode(false)}> Preview</span>
      {ifEditorMode ? (
        <MdEditor
          key={"mdEditor"}
          style={{ width: "1000px", height: "900px" }}
          plugins={pluginsListSplited}
          renderHTML={(text) => {
            console.log("xxx renderHTML", Object.keys(mdImages));

            // for (const dataUrl of Object.keys(mdImages)) {

            return mdParser.render("");
          }}
          value={mdText}
          onChange={handleEditorChange}
          onImageUpload={(e) => onImageUpload(e)}
          view={{ menu: true, md: true, html: false }}
        />
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: mdParser.render(mdForRendering) }}
        ></div>
      )}
    </div>
  );
};

export const TabsWithSimpleText = () => {
  const [mdText, setMdText] = useState("");
  const [mdImages, setMdImages] = useState({});
  const [mdForRendering, setMdForRendering] = useState("");
  const onChange = (key) => {
    console.log(key);
  };
  function onImageUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data) => {
        const dataUrl = `data:image/png;base64,md5:${md5(
          `${data.target.result}`
        )}`;
        // const dataUrl = "xxx";

        const newImages = {};
        newImages[dataUrl] = data.target.result;
        console.log("xxx newImages", newImages);

        console.log("xxx newImages", JSON.stringify(newImages));

        setMdImages((prev) => ({ ...prev, ...newImages }));
        resolve(dataUrl);
      };
      reader.readAsDataURL(file);
    });
  }
  function handleEditorChange({ html, text }) {
    setMdText(text);
  }

  useEffect(() => {
    console.log("xxx images", mdText, mdImages);
    let mdWithImages = mdText;
    console.log("xxx renderHTML", Object.keys(mdImages));

    for (const dataUrl of Object.keys(mdImages)) {
      console.log("xxx replace ", dataUrl);
      mdWithImages = mdWithImages.replaceAll(dataUrl, mdImages[dataUrl]);
    }
    console.log("xxx mdWithImages", mdWithImages);
    setMdForRendering(mdWithImages);
  }, [mdImages, mdText]);

  return (
    <div>
      <Tabs
        onChange={onChange}
        type="card"
        items={new Array(2).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: i === 0 ? "Edit" : "Preview",
            key: id,
            children:
              i === 0 ? (
                <div>
                  <MdEditor
                    key={"mdEditor"}
                    style={{ width: "1000px", height: "900px" }}
                    plugins={pluginsListSplited}
                    renderHTML={(text) => {
                      console.log("xxx renderHTML", Object.keys(mdImages));

                      // for (const dataUrl of Object.keys(mdImages)) {

                      return mdParser.render("");
                    }}
                    value={mdText}
                    onChange={handleEditorChange}
                    onImageUpload={(e) => onImageUpload(e)}
                    view={{ menu: true, md: true, html: false }}
                  />
                </div>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: mdParser.render(mdForRendering),
                  }}
                ></div>
              ),
          };
        })}
      />

      <div></div>
    </div>
  );
};
