import React, { useState } from 'react';
import ReactDom from 'react-dom';

//const MyContext = React.createContext();

const App = () => {
  return (
    <div>
      <Hook />
    </div>
    // <MyContext.Provider value='Hello world'>
    //   <Child />
    // </MyContext.Provider>
  );
};

const Hook = () => {
  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState(20);
  return (
    <div
      style={{
        backgroundColor: color,
        padding: '10px',
        fontSize: `${fontSize}px`
      }}
    >
      Hello World
      <button
        style={{ padding: '10px', margin: '5px' }}
        onClick={() => setColor('white')}
      >
        white
      </button>
      <button
        style={{ padding: '10px', margin: '5px' }}
        onClick={() => setColor('#999')}
      >
        Gray
      </button>
      <button
        style={{ padding: '10px', margin: '5px' }}
        onClick={fontSize => setFontSize(s => s + 2)}
      >
        +
      </button>
      <button
        style={{ padding: '10px', margin: '5px' }}
        onClick={fontSize => setFontSize(s => s - 2)}
      >
        -
      </button>
    </div>
  );
};

// const Child = () => {
//   const value = useContext(MyContext);
//   return <p>{value}</p>;
// };

// const Child = () => {
//   return (
//     <MyContext.Consumer>
//       {value => {
//         return <p>{value}</p>;
//       }}
//     </MyContext.Consumer>
//   );
// };

ReactDom.render(<App />, document.getElementById('root'));
