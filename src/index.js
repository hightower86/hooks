import React, { useContext } from 'react';
import ReactDom from 'react-dom';

//const MyContext = React.createContext();

const App = () => {
  return (
    <div>
      <h1>Hi</h1>
    </div>
    // <MyContext.Provider value='Hello world'>
    //   <Child />
    // </MyContext.Provider>
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
