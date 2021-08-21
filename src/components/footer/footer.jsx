import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillAliwangwang } from 'react-icons/ai';

import './footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <div>
        <br />
        <br />
        <Container className="px-5">
          <Row>
            <Col xl={2}>
              <AiFillAliwangwang className="icon" />
              <Row>
                <p>© 2017-2021</p>
              </Row>
            </Col>
            <Col>
              <h4> Features </h4>
              <ui className="list-unstyled text-small">
                <li>
                  <a className="link-secondary" href="/">Cool stuff</a>
                </li>
                <li>
                  <a className="link-secondary" href="/">Random feature</a>
                </li>
                <li>
                  <a className="link-secondary" href="/">Stuff for developers</a>
                </li>
                <li>
                  <a className="link-secondary" href="/">Another one</a>
                </li>
                <li>
                  <a className="link-secondary" href="/">Last time</a>
                </li>
              </ui>
            </Col>
            <Col>
              <h4> Resources </h4>
              <ui className="list-unstyled text-small">
                <li>
                  <a className="link-secondary" href="/">Resource name</a>
                </li>
                <li>
                  <a className="link-secondary" href="/">Resource</a>
                </li>
                <li>
                  <a className="link-secondary" href="/">Another resource</a>
                </li>
                <li>
                  <a className="link-secondary" href="/">Final resource</a>
                </li>
              </ui>
            </Col>
            <Col>
              <h4> Resources </h4>
              <ui className="list-unstyled text-small">
                <li>
                  <a className="link-secondary" href="/">Business</a>
                </li>
                <li>
                  <a className="link-secondary" href="/">Education</a>
                </li>
                <li>
                  <a className="link-secondary" href="/">Government</a>
                </li>
                <li>
                  <a className="link-secondary" href="/">Gaming</a>
                </li>
              </ui>
            </Col>
            <Col>
              <h4> About </h4>
              <ui className="list-unstyled text-small">
                <li>
                  <a className="link-secondary" href="/">Team</a>
                </li>
                <li>
                  <a className="link-secondary" href="/">Locations</a>
                </li>
                <li>
                  <a className="link-secondary" href="/">Privacy</a>
                </li>
                <li>
                  <a className="link-secondary" href="/">Terms</a>
                </li>
              </ui>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}

export default Footer;
