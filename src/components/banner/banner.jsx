import React, { PureComponent } from 'react';
import {
  Container, Button,
} from 'react-bootstrap';
import './banner.css';

class Banner extends PureComponent {
  render() {
    return (
      <>
        <Container fluid className="banner p-3 p-md-5 m-md-3">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Punny headline</h1>
            <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
            <Button
              className="banner-button"
              variant="outline-secondary"
              size="mg"
            >
              Confirm
            </Button>
          </div>
          <div className="product-device" />
          <div className="product-device product-device-2" />
        </Container>
      </>
    );
  }
}

export default Banner;
