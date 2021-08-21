import React, { PureComponent } from 'react';
import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import Routes from './routes';

import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
