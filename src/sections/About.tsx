import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { Skill, Counter, Section } from '../components'
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'
import about from '../data/about.json'

const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
`
export class About extends React.Component {
  render () {
    return (
      <Section id="about" title="About Me">
        <iframe src="http://127.0.0.1/" style={{width: '100%', height: '593px'}}></iframe>
        <Row>
          <Col md={2}>
            <Row>
              <Col md={12}>
                <div className="text-center mb-3">
                  <img src={about.avatar} alt="kiendang" style={{ width: '150px' }} />
                </div>
              </Col>
              <Col md={12}>
                <Name className="text-center mb-3">
                  {about.username1}
                </Name>
              </Col>
            </Row>
          </Col>
          <Col md={10} className="triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <Row>
                <Col md={8}>
                  <div dangerouslySetInnerHTML={ { __html: about.objective } } />
                  <div className="mt-3 mb-3">
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Row>
              <Col md={12}>
                <div className="text-center mb-3">
                  <img src={about.avatar} alt="kiendang" style={{ width: '150px' }} />
                </div>
              </Col>
              <Col md={12}>
                <Name className="text-center mb-3">
                  {about.username2}
                </Name>
              </Col>
            </Row>
          </Col>
          <Col md={10} className="triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <Row>
                <Col md={8}>
                  <div dangerouslySetInnerHTML={ { __html: about.objective } } />
                  <div className="mt-3 mb-3">
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default About
