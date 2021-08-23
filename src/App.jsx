import React, { PureComponent } from 'react';
import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import Routes from './routes';

import './App.css';

class App extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Routes />
        <Footer />
      </>
    );
  }
}

export default App;
