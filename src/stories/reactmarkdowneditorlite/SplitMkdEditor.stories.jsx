import React, { useState, useEffect } from "react";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";
import "./splitstyle.css";
import { image64, seconBase64, mdDoc, mockedMDData } from "./base64img";
import { nanoid } from "nanoid";
import {
  PictureFilled,
  SaveFilled,
  DeliveredProcedureOutlined,
} from "@ant-design/icons";

export default {
  title: "MKEditorSlpit/MkdEditorEditor",
};

const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

MdEditor.addLocale("de-DE", {
  btnHeader: "Überschrift",
  btnClear: "Löschen",
  btnBold: "Fett",
});
MdEditor.useLocale("de-DE");

const ViewMode = (props) => {
  const [isWriteActive, setIsWriteActive] = useState(true);
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  const handleClickPreview = () => {
    props.editor.setView({
      md: false,
      menu: true,
      html: true,
    });
    setIsWriteActive(false);
    setIsPreviewActive(true);
  };
  const handleClickWrite = () => {
    props.editor.setView({
      md: true,
      menu: true,
      html: false,
    });
    setIsWriteActive(true);
    setIsPreviewActive(false);
  };

  return (
    <div>
      <button
        className={isWriteActive ? "mode-btn-toogle-active" : "mode-btn-toogle"}
        onClick={handleClickWrite}
        title="Schreibmodus"
      >
        Write
      </button>
      <button
        className={
          isPreviewActive ? "mode-btn-toogle-active" : "mode-btn-toogle"
        }
        onClick={handleClickPreview}
        title="Vorschaumodus"
      >
        Preview
      </button>
    </div>
  );
};

ViewMode.defaultConfig = {};
ViewMode.align = "right";
ViewMode.pluginName = "viewmode";

MdEditor.use(ViewMode, {});

const CustomUploadImages = (props) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = async (e) => {
    try {
      const file = e.target.files[0];
      if (file) {
        const fileUrl = URL.createObjectURL(file);
        const base64 = await convertImageToBase64(file);
        props.editor.insertText(`![image](${fileUrl})`);
        setUploadedImages((prev) => [
          ...prev,
          { id: nanoid(), shortLink: fileUrl, base64Link: base64 },
        ]);
      }
    } catch (error) {
      console.error("Error when loading a file", error);
    }
  };

  const handleSaveDocument = () => {
    const mdDoc = props.editor.getMdValue();
    const images = uploadedImages;
    console.log("xxx mdDoc", { images, mdDoc });
    props.config.fallback();
  };

  useEffect(() => {
    if (props.config.imagesDefault) {
      setUploadedImages(props.config.imagesDefault);
    }

    // return () => {
    //   uploadedImages.forEach(({ shortLink }) => {
    //     URL.revokeObjectURL(shortLink);
    //   });
    // };
  }, []);

  return (
    <div>
      <span className="button" title="Upload">
        <div className="custom-file-input">
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={handleImageChange}
          />
          <label htmlFor="fileInput">
            <PictureFilled />
          </label>
        </div>
      </span>
      <span
        className="button"
        title="Save"
        onClick={handleSaveDocument}
        style={{ cursor: "pointer" }}
      >
        <DeliveredProcedureOutlined />
      </span>
    </div>
  );
};

CustomUploadImages.defaultConfig = {};
CustomUploadImages.align = "left";
CustomUploadImages.pluginName = "imguploader";

MdEditor.use(CustomUploadImages, {});

const pluginsListSplited = [
  "viewmode",
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
  "imguploader",
];
function handleEditorChange({ html, text }) {
  console.log("handleEditorChange", html, text);
}
export const MkdSplitedEditor = () => {
  const demoValue = `
  * text
  * text
  * text
  * 
  1. text
  2. text
  3. text

`;
  return (
    <div>
      <MdEditor
        style={{ width: "1000px", height: "700px" }}
        plugins={pluginsListSplited}
        renderHTML={(text) => mdParser.render(text)}
        value={demoValue}
        onChange={handleEditorChange}
        // onImageUpload={onImageUpload}
        shortcuts={true}
        view={{ menu: true, md: true, html: false }}
      />
    </div>
  );
};

export const MkdSplitedEditorWithImg = () => {
  const demoValue = `
  * text
  * text
  * text
  * 
  1. text
  2. text
  3. text

`;
  function onImageUpload(file) {
    const blobUrl = URL.createObjectURL(file);
    console.log("xxx blobUrl", blobUrl);
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data) => {
        const res = data.target.result;
        console.log("xxx base 64", res);
        resolve(data.target.result);
      };
      reader.readAsDataURL(file);
    });
    return blobUrl;
  }
  return (
    <div>
      <MdEditor
        style={{ width: "1000px", height: "700px" }}
        plugins={pluginsListSplited}
        renderHTML={(text) => mdParser.render(text)}
        // value={demoValue}
        onChange={handleEditorChange}
        onImageUpload={onImageUpload}
        shortcuts={true}
        view={{ menu: true, md: true, html: false }}
      />
    </div>
  );
};

export const MkdSplitedEditorWithMockedBase64Image = () => {
  const demoValue = `![image](${base64toBlobUrl(image64)})`;
  function base64toBlobUrl(base64) {
    const binaryString = window.atob(base64.split(",")[1]);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: "image/png" });
    return URL.createObjectURL(blob);
  }
  function onImageUpload(file) {
    const blobUrl = URL.createObjectURL(file);
    console.log("xxx blobUrl", blobUrl);
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data) => {
        const res = data.target.result;
        console.log("xxx base 64", res);
        resolve(data.target.result);
      };
      reader.readAsDataURL(file);
    });
    return blobUrl;
  }

  return (
    <div>
      <MdEditor
        style={{ width: "1000px", height: "700px" }}
        plugins={pluginsListSplited}
        renderHTML={(text) => mdParser.render(text)}
        value={demoValue}
        onChange={handleEditorChange}
        onImageUpload={onImageUpload}
        shortcuts={true}
        view={{ menu: true, md: true, html: false }}
      />
    </div>
  );
};

export const MkdSplitedEditorWithImageUploadPlugin = () => {
  const demoValue = `
  * text
  * text
  * text
  * 
  1. text
  2. text
  3. text
  `;

  const [value, setValue] = useState(demoValue);

  function handleEditorChange({ html, text }) {
    console.log("handleEditorChange", text);
    setValue(text);
  }

  return (
    <div>
      <MdEditor
        style={{ width: "1000px", height: "700px" }}
        plugins={pluginsListSplited}
        renderHTML={(text) => mdParser.render(text)}
        value={value}
        onChange={handleEditorChange}
        // onImageUpload={onImageUpload}
        shortcuts={true}
        view={{ menu: true, md: true, html: false }}
      />
    </div>
  );
};

export const MkdSplitedEditorLoadSavedDocumentWithBase64 = () => {
  const [value, setValue] = useState("");

  function handleEditorChange({ html, text }) {
    console.log("handleEditorChange", text);
    setValue(text);
  }

  useEffect(() => {
    let mrkdownText = mdDoc.mdDoc;
    let images = mdDoc.images;

    images.forEach(({ shortLink, base64Link }) => {
      const regex = new RegExp(shortLink, "g");
      mrkdownText = mrkdownText.replace(
        regex,
        `data:image/png;base64,${base64Link}`
      );
      console.log("xxx 1111111111111", mrkdownText);
    });

    setValue(mrkdownText);
  }, []);

  return (
    <div>
      <MdEditor
        style={{ width: "1000px", height: "700px" }}
        plugins={pluginsListSplited}
        renderHTML={(text) => mdParser.render(text)}
        value={value}
        onChange={handleEditorChange}
        // onImageUpload={onImageUpload}
        shortcuts={true}
        view={{ menu: true, md: true, html: false }}
      />
    </div>
  );
};
export const MkdSplitedEditorLoadSavedDocumentWithNewBloab = ({
  fallback = () => console.log("fallback function"),
}) => {
  const [mdText, setMdText] = useState("");
  CustomUploadImages.defaultConfig = {
    imagesDefault: mdDoc.images,
    fallback,
  };

  function handleEditorChange({ html, text }) {
    console.log("handleEditorChange", text);
    setMdText(text);
  }

  function base64toBlobUrl(base64) {
    const binaryString = window.atob(base64);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: "image/png" });
    return URL.createObjectURL(blob);
  }

  useEffect(() => {
    let mrkdownText = mdDoc.mdDoc;
    let images = mdDoc.images;
    const imagesWithNewLink = [];

    images.forEach((image) => {
      const imageWithNewShortLink = base64toBlobUrl(image.base64Link);
      imagesWithNewLink.push({
        imageWithNewShortLink,
        shortLink: image.shortLink,
        base64Link: image.base64Link,
      });
    });

    imagesWithNewLink.forEach(
      ({ shortLink, base64Link, imageWithNewShortLink }) => {
        const regex = new RegExp(shortLink, "g");
        mrkdownText = mrkdownText.replace(regex, imageWithNewShortLink);
      }
    );

    setMdText(mrkdownText);

    // return () => {
    //   imagesWithNewLink.forEach(({ imageWithNewShortLink }) => {
    //     URL.revokeObjectURL(imageWithNewShortLink);
    //   });
    // };
  }, []);

  return (
    <div>
      <MdEditor
        style={{ width: "1000px", height: "900px" }}
        plugins={pluginsListSplited}
        renderHTML={(text) => mdParser.render(text)}
        value={mdText}
        onChange={handleEditorChange}
        // onImageUpload={onImageUpload}
        shortcuts={true}
        view={{ menu: true, md: true, html: false }}
      />
    </div>
  );
};
export const MkdSplitedEditorWithLoadedContent = ({
  fallback = () => console.log("fallback function"),
}) => {
  const [mdText, setMdText] = useState("");
  CustomUploadImages.defaultConfig = {
    imagesDefault: mockedMDData.images,
    fallback,
  };

  function handleEditorChange({ html, text }) {
    console.log("handleEditorChange", text);
    setMdText(text);
  }

  function base64toBlobUrl(base64) {
    console.log("xxx base64toBlobUrl", base64);
    const binaryString = window.atob(base64);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: "image/png" });
    return URL.createObjectURL(blob);
  }

  useEffect(() => {
    let mrkdownText = mockedMDData.mdDoc;
    let images = mockedMDData.images;
    const imagesWithNewLink = [];

    images.forEach((image) => {
      const imageWithNewShortLink = base64toBlobUrl(image.base64Link);
      imagesWithNewLink.push({
        imageWithNewShortLink,
        shortLink: image.shortLink,
        base64Link: image.base64Link,
      });
    });

    imagesWithNewLink.forEach(
      ({ shortLink, base64Link, imageWithNewShortLink }) => {
        const regex = new RegExp(shortLink, "g");
        mrkdownText = mrkdownText.replace(regex, imageWithNewShortLink);
      }
    );

    setMdText(mrkdownText);

    // return () => {
    //   imagesWithNewLink.forEach(({ imageWithNewShortLink }) => {
    //     URL.revokeObjectURL(imageWithNewShortLink);
    //   });
    // };
  }, []);

  return (
    <div>
      <MdEditor
        style={{ width: "1000px", height: "900px" }}
        plugins={pluginsListSplited}
        renderHTML={(text) => mdParser.render(text)}
        value={mdText}
        onChange={handleEditorChange}
        // onImageUpload={onImageUpload}
        shortcuts={true}
        view={{ menu: true, md: true, html: false }}
      />
    </div>
  );
};
