import React from 'react';
import ReactDOM from 'react-dom';
import { NewButton } from '../src';

function App() {
  return (
    <NewButton name="新按钮2" />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));