import React from 'react';
import ReactDom from 'react-dom';

const MyContext = React.createContext();

const App = () => {
  return (
    <MyContext.Provider value='Hello world'>
      <Child />
    </MyContext.Provider>
  );
};

const Child = () => {
  return (
    <MyContext.Consumer>
      {value => {
        return <p>{value}</p>;
      }}
    </MyContext.Consumer>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
