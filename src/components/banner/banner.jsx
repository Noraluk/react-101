import React, { PureComponent } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import './banner.css';

class Banner extends PureComponent {
  render() {
    return (
      <div>
        <Container fluid className="Banner">
          <Row style={{ textAlign: 'center' }}>
            <p className="my-1" style={{ fontSize: '60px' }}>Punny headline</p>
            <p className="my-0">And an even wittier subheading to boot. Jumpstart</p>
            <p className="my-0">your marketing efforts with this example based on</p>
            <p className="my-0">Apple’s marketing pages.</p>
            <div>
              <br />
              <Button className="Banner-button" variant="outline-secondary" size="mg">Confirm</Button>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Banner;
