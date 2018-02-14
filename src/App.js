import './App.css';
import React from 'react';
import TopBar from './TopBar';
import Tiles from './Tiles';

class App extends React.Component {
  render() {
    return (
    <div><TopBar/>
    <Tiles/>
    </div>
    );
  }
}

App.defaultProps = {
};

export default App;
