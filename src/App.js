import React, { useState } from "react";

function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="all_star.mp4" />
          <File name="express_file.mp4" />
        </Folder>
        <File name="dogs.jpeg" />
        <File name="cats.png" />
      </Folder>

      <Folder name="Applications" />
    </div>
  );
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, children } = props;
  const direction = isOpen ? "down" : "right";

  return (
    <div>
      <span onClick={() => setIsOpen(!isOpen)}>
        <i className="blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: "15px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  const { name } = props;
  const ext = name.split(".")[1];
  const fileIcons = {
    mp4: "headphones",
    jpeg: "file image",
    png: "file image outline",
  };
  return (
    <div>
      <i class={`${fileIcons[ext]} icon`}></i>
      {name}
    </div>
  );
};

export default App;
