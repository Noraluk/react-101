import React, { PureComponent } from 'react';
import Banner from '@components/banner/banner';
import Cards from '@components/cards/cards';

class Home extends PureComponent {
  render() {
    return (
      <>
        <Banner />
        <br />
        <Cards />
      </>
    );
  }
}

export default Home;
