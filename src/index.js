import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <h1>
    <Hook />
  </h1>
);

const Hook = () => {
  const [fSize, setFSize] = useState(2);
  const [bgColor, setBgColor] = useState('gray');
  const buttonStyle = {
    fontSize: '2rem',
    padding: '0.1rem 2rem 0.4rem 2rem',
    margin: '0 0.5rem'
  };
  return (
    <div
      style={{
        height: '10rem',
        width: '80%vw',
        border: '1px black solid',
        padding: '2rem',
        backgroundColor: bgColor
      }}
    >
      <button onClick={() => setFSize(s => s + 1)} style={buttonStyle}>
        +
      </button>
      <button onClick={() => setFSize(s => s - 1)} style={buttonStyle}>
        -
      </button>
      <button onClick={() => setBgColor('yellow')} style={buttonStyle}>
        yellow
      </button>
      <h1 style={{ fontSize: `${fSize}rem` }}>Hello World</h1>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
