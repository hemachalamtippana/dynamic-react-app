import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

//
function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(switchButton) {
    setSelectedTopic(switchButton);
    // return console.log(switchButton);
  }

  let tabContent = <p>Please select a button!!!</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <>
      <Section title="Example" id="examples">
        <Tabs
          ButtonContainer="menu"
          button={
            <>
              {/* Component Composition */}
              <TabButton
                isSelected={selectedTopic === "components"}
                onSelect={() => handleClick("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onSelect={() => handleClick("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onSelect={() => handleClick("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onSelect={() => handleClick("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}
export default Examples;
