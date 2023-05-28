import React from "react";
import ReactDOM from "react-dom/client";
//jsx => React.createElement => Object => HTML(DOM)
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h1>HERE it is a functionl component</h1>
      <h2>This is H2 tag</h2>;<h2>Hello world</h2>;
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent />);
