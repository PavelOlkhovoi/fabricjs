import { DesignerWrapper } from "./components/DesignerWrapper";
function App() {
  return (
    <div
      style={{
        width: "1900px",
        height: "700px",
        // border: "4px solid red",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <DesignerWrapper />
    </div>
  );
}

export default App;
