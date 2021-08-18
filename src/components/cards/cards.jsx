import React, { PureComponent } from 'react';
import {
  Container, Row, Card, Col, Button,
} from 'react-bootstrap';

import Foo from '@images/foo.jpg';

const numbers = [1, 2, 3, 4, 5];

class Cards extends PureComponent {
  render() {
    return (
      <div>
        <Container>
          <Row xs={3}>
            {numbers.map((i) => (
              <div key={i}>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Foo} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card&apos;s content.
                        {' '}
                        {i}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Cards;
