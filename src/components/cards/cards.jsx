import React, { PureComponent } from 'react';
import {
  Container, Row, Card, Col,
} from 'react-bootstrap';

class Cards extends PureComponent {
  render() {
    return (
      <div>
        <Container fluid className="px-5">
          <Row lg={2} md={1} className="g-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i.toString()}>
                <Col>
                  <Card style={{ textAlign: 'center' }}>
                    <Card.Body className="mx-5 mt-5 p-0">
                      <br />
                      <Card.Title style={{ fontSize: '45px', fontWeight: 'normal' }}>Another headline</Card.Title>
                      <Card.Text style={{ fontSize: '20px' }}>
                        And an even wittier subheading.
                      </Card.Text>
                      <br />
                      <Container className="px-5">
                        <Card style={{
                          backgroundColor: 'black', height: 400, borderRadius: '30px 30px 0px 0px',
                        }}
                        />
                      </Container>
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
