import React, { PureComponent } from 'react';
import Header from '@components/header/header';
import Banner from '@components/banner/banner';
import Cards from '@components/cards/cards';
import Footer from '@components/footer/footer';

import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <br />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
