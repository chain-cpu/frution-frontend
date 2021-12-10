import * as React from 'react'
import * as ReactDOM from 'react-dom'


const App = () => {
  return (
    <div>
      <h1>Hello Fruition Coin!</h1>
    </div>
  );
}

ReactDOM.render(
  <div className="App">
    <App/>
  </div>,
  document.getElementById('root')
);
