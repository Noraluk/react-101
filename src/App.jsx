import React, { PureComponent } from 'react';
import Header from '@componenets/header/header';
import Banner from '@componenets/banner/banner';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Banner />
      </div>
    );
  }
}

export default App;
