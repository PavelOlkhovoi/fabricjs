import { useState, useEffect } from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";

export default {
  title: "Uiw/Uiw React",
};

export const UiwReact = () => {
  return (
    <div>
      <h1>Uiw React</h1>
    </div>
  );
};

export const UiwReactFirst = () => {
  const [value, setValue] = useState("**Hello world!!!**");
  useEffect(() => {
    console.log("xxx value", value);
  }, [value]);
  return (
    <div>
      <div className="container">
        <MDEditor value={value} onChange={setValue} />
        <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
      </div>
    </div>
  );
};

const title3 = {
  name: "title3",
  keyCommand: "title3",
  buttonProps: { "aria-label": "Insert title3" },
  icon: (
    <svg width="12" height="12" viewBox="0 0 520 520">
      <path
        fill="currentColor"
        d="M15.7083333,468 C7.03242448,468 0,462.030833 0,454.666667 L0,421.333333 C0,413.969167 7.03242448,408 15.7083333,408 L361.291667,408 C369.967576,408 377,413.969167 377,421.333333 L377,454.666667 C377,462.030833 369.967576,468 361.291667,468 L15.7083333,468 Z M21.6666667,366 C9.69989583,366 0,359.831861 0,352.222222 L0,317.777778 C0,310.168139 9.69989583,304 21.6666667,304 L498.333333,304 C510.300104,304 520,310.168139 520,317.777778 L520,352.222222 C520,359.831861 510.300104,366 498.333333,366 L21.6666667,366 Z M136.835938,64 L136.835937,126 L107.25,126 L107.25,251 L40.75,251 L40.75,126 L-5.68434189e-14,126 L-5.68434189e-14,64 L136.835938,64 Z M212,64 L212,251 L161.648438,251 L161.648438,64 L212,64 Z M378,64 L378,126 L343.25,126 L343.25,251 L281.75,251 L281.75,126 L238,126 L238,64 L378,64 Z M449.047619,189.550781 L520,189.550781 L520,251 L405,251 L405,64 L449.047619,64 L449.047619,189.550781 Z"
      />
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `### ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `### `;
    }
    api.replaceSelection(modifyText);
  },
};

const title2 = {
  name: "todo",
  keyCommand: "todo",
  render: (command, disabled, executeCommand) => {
    return (
      <button
        aria-label="Insert title2"
        disabled={disabled}
        onClick={(evn) => {
          // evn.stopPropagation();
          executeCommand(command, command.groupName);
        }}
      >
        <svg width="12" height="12" viewBox="0 0 520 520">
          <path
            fill="currentColor"
            d="M15.7083333,468 C7.03242448,468 0,462.030833 0,454.666667 L0,421.333333 C0,413.969167 7.03242448,408 15.7083333,408 L361.291667,408 C369.967576,408 377,413.969167 377,421.333333 L377,454.666667 C377,462.030833 369.967576,468 361.291667,468 L15.7083333,468 Z M21.6666667,366 C9.69989583,366 0,359.831861 0,352.222222 L0,317.777778 C0,310.168139 9.69989583,304 21.6666667,304 L498.333333,304 C510.300104,304 520,310.168139 520,317.777778 L520,352.222222 C520,359.831861 510.300104,366 498.333333,366 L21.6666667,366 Z M136.835938,64 L136.835937,126 L107.25,126 L107.25,251 L40.75,251 L40.75,126 L-5.68434189e-14,126 L-5.68434189e-14,64 L136.835938,64 Z M212,64 L212,251 L161.648438,251 L161.648438,64 L212,64 Z M378,64 L378,126 L343.25,126 L343.25,251 L281.75,251 L281.75,126 L238,126 L238,64 L378,64 Z M449.047619,189.550781 L520,189.550781 L520,251 L405,251 L405,64 L449.047619,64 L449.047619,189.550781 Z"
          />
        </svg>
      </button>
    );
  },
  execute: (state, api) => {
    console.log("xxx api", api);
    // let modifyText = `[ ]`;
    // if (!state.selectedText) {
    //   modifyText = `[ ] `;
    // }
    api.replaceSelection("- [ ] Task");
  },
};

function SubChildren({ close, execute, getState, textApi, dispatch }) {
  const [value, setValue] = useState("");
  const insert = () => {
    console.log("value:::", value);
    textApi.replaceSelection(value);
  };
  return (
    <div style={{ width: 120, padding: 10 }}>
      <div>My Custom Toolbar</div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button
        type="button"
        onClick={() => {
          dispatch({ $value: "~~~~~~" });
          console.log("> execute: >>>>>", getState());
        }}
      >
        State
      </button>
      <button type="button" onClick={insert}>
        Insert
      </button>
      <button type="button" onClick={() => close()}>
        Close
      </button>
      <button type="button" onClick={() => execute()}>
        Execute
      </button>
    </div>
  );
}

const subChild = {
  name: "update",
  groupName: "update",
  icon: (
    <svg viewBox="0 0 1024 1024" width="12" height="12">
      <path
        fill="currentColor"
        d="M716.8 921.6a51.2 51.2 0 1 1 0 102.4H307.2a51.2 51.2 0 1 1 0-102.4h409.6zM475.8016 382.1568a51.2 51.2 0 0 1 72.3968 0l144.8448 144.8448a51.2 51.2 0 0 1-72.448 72.3968L563.2 541.952V768a51.2 51.2 0 0 1-45.2096 50.8416L512 819.2a51.2 51.2 0 0 1-51.2-51.2v-226.048l-57.3952 57.4464a51.2 51.2 0 0 1-67.584 4.2496l-4.864-4.2496a51.2 51.2 0 0 1 0-72.3968zM512 0c138.6496 0 253.4912 102.144 277.1456 236.288l10.752 0.3072C924.928 242.688 1024 348.0576 1024 476.5696 1024 608.9728 918.8352 716.8 788.48 716.8a51.2 51.2 0 1 1 0-102.4l8.3968-0.256C866.2016 609.6384 921.6 550.0416 921.6 476.5696c0-76.4416-59.904-137.8816-133.12-137.8816h-97.28v-51.2C691.2 184.9856 610.6624 102.4 512 102.4S332.8 184.9856 332.8 287.488v51.2H235.52c-73.216 0-133.12 61.44-133.12 137.8816C102.4 552.96 162.304 614.4 235.52 614.4l5.9904 0.3584A51.2 51.2 0 0 1 235.52 716.8C105.1648 716.8 0 608.9728 0 476.5696c0-132.1984 104.8064-239.872 234.8544-240.2816C258.5088 102.144 373.3504 0 512 0z"
      />
    </svg>
  ),
  children: (props) => <SubChildren {...props} />,
  execute: (state, api) => {
    console.log(">>>>>>update>>>>>", state);
  },
  buttonProps: { "aria-label": "Insert title" },
};

export const UiwReactCustom = () => {
  const [value, setValue] = useState(
    "Hello Markdown! `Tab` key uses default behavior"
  );
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
        commands={[
          // Custom Toolbars
          title3,
          title2,
          commands.group(
            [
              commands.title1,
              commands.title2,
              commands.title3,
              commands.title4,
              commands.title5,
              commands.title6,
            ],
            {
              name: "title",
              groupName: "title",
              buttonProps: { "aria-label": "Insert title" },
            }
          ),
          commands.divider,
          commands.group([], subChild),
        ]}
      />
    </div>
  );
};
