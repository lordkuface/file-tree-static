import React, { useState } from 'react';

function App() {
  return <div>
    <Folder name="Desktop">
      <Folder name="Music">
        <File name="Goodbye.mp4" />
        <File name="Hello.mp4" />
      </Folder>
      <File name="dogs.jpeg" /> 
      <File name="cats.png" />
    </Folder>
    <Folder name="Applications"/>

  </div>
}

const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const { name, children } = props;
  const borderStyle = { border: '2px solid pink' };

  const handleClick = () => setIsOpen(!isOpen);
  const direction = isOpen ? 'down' : 'right';

  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
    <div style={{ marginLeft: '17px' }}>
      {isOpen ? children : null}
    </div>
  </div>
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image icon',
    png: 'file image',
  }
  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {name}
  </div>
}

export default App;
