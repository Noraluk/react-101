import React, { PureComponent } from 'react';
import Banner from '@components/banner/banner';
import Cards from '@components/cards/cards';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <Banner />
        <br />
        <Cards />
      </div>
    );
  }
}

export default Home;
