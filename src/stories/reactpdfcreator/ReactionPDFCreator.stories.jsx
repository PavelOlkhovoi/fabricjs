import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  BlobProvider,
  usePDF,
} from "@react-pdf/renderer";
import PDFExampleLight from "/pdf/_ 335_Rauental gg_. Nr. 25.docx.pdf";

export default {
  title: "PDFCreator/ReactPDFCreator",
};

export const ReactPDFCreator = () => {
  return (
    <Document>
      <Page>
        <Text>Hello There</Text>
      </Page>
    </Document>
  );
};
export const ReactShowPDF = () => {
  return (
    <PDFViewer showToolbar={true} width="100%" height={700}>
      <ReactPDFCreator />
    </PDFViewer>
  );
};
export const ReactSavePDFSrc = () => {
  return (
    <PDFViewer
      showToolbar={true}
      width={"100%"}
      height={700}
      src={PDFExampleLight}
    />
  );
};
export const ReactDownloadPDF = () => {
  return (
    <>
      <PDFViewer
        showToolbar={true}
        width={"100%"}
        height={700}
        src={PDFExampleLight}
      />
      <div>
        <PDFDownloadLink document={<PDFExampleLight />} fileName="somename.pdf">
          {({ blob, url, loading, error }) => {
            return loading ? "Herunterladen..." : "Jetzt herunterladen!";
          }}
        </PDFDownloadLink>
      </div>
    </>
  );
};
export const ReactDownloadFromBlobPDF = () => {
  const getDataFromBlob = async (pdfBlob) => {
    const blobUrl = URL.createObjectURL(pdfBlob);
    console.log("xxx getDataFromBlob", blobUrl);
    // let blobPDF = await pdfBlob.arrayBuffer();
  };
  return (
    <>
      <PDFViewer showToolbar={true} width={"100%"} height={700}>
        <ReactPDFCreator />
      </PDFViewer>
      <div>
        <BlobProvider document={<ReactPDFCreator />}>
          {({ blob, url, loading, error }) => {
            if (blob) {
              getDataFromBlob(blob);
            }
            return <div>There's something going on on the fly</div>;
          }}
        </BlobProvider>
      </div>
    </>
  );
};
