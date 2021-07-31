import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Section, Timeline } from '../components'
import history from '../data/history.json'

const career = history.career

export class Experience extends React.Component {
  render () {

    return (
      <Section id="experience" title="TODO">
        <Row>
          <Col md={12}>
            <div className="className">



            </div>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default Experience
