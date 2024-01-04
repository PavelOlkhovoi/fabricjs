import PDFExampleLight from "/pdf/_ 335_Rauental gg_. Nr. 25.docx.pdf";
import PDFExampleHeavy from "/pdf/362-367,369_HЃnefeldstraбe.pdf";
export default {
  title: "PDFViewer/PDFReact",
};

export const PDFReact = () => {
  return (
    <div>
      <iframe src={PDFExampleLight} width="100%" height="700px" />
    </div>
  );
};
export const PDFReactheavy = () => {
  return (
    <div>
      <iframe src={PDFExampleHeavy} width="100%" height="700px" />
    </div>
  );
};
