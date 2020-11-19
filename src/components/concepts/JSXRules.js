import React from "react";

const JSXRules = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1 className="selection-title">JSX</h1>
        <dl>
          <dt>Resembles HTML</dt>
          <dd>Its not. Its actually closer to Javascript.</dd>
          <dt>React Elements</dt>
          <dd>
            These are used to construct and update the DOM, or what you see on
            the screen.
          </dd>
          <dt>Not Required</dt>
          <dd>You can write in vanilla JS, but most sane people use JSX.</dd>
        </dl>
        <hr />
        <NormalComponent />
        <CreateElementComponent />
      </div>
    </div>
  );
};

const NormalComponent = () => {
  return (
    <div style={{ border: "2px solid black" }}>
      <h1>Normal Functional Component</h1>
      <p>This was constructed with JSX in the return.</p>
      <img src="https://ih1.redbubble.net/image.119786931.7283/st,small,507x507-pad,600x600,f8f8f8.u1.jpg" />
    </div>
  );
};

const CreateElementComponent = () => {
  return React.createElement(
    "div",
    { style: { border: "2px solid black" } },
    React.createElement("h1", null, "CreateElement Component"),
    React.createElement(
      "p",
      null,
      "This was constructed with CreateElement calls in the return."
    ),
    React.createElement(
      "img",
      {
        src: "https://miro.medium.com/max/640/1*dqDSqhqtUmJD9ZsqDeMyWg.png",
      },
      null
    )
  );
};

export default JSXRules;
