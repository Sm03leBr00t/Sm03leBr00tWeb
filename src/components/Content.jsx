import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Content = (props) => {
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={8}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Content
