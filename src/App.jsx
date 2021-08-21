import React, { PureComponent } from 'react';
import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import {
  Container,
} from 'react-bootstrap';
import Routes from './routes';

import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Container fluid style={{ height: '100px', backgroundColor: 'black' }} />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
