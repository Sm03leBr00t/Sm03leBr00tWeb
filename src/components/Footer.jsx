import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Footer = ({title}) => {
	return (
		<footer className="mt-5">
			<Container fluid>
				<Row className="border-top justify-content-between p-3">
					<Col className="p-0" md={3} sm={12}>
            {title}
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3} sm={12}>
            This site was made with ❤️
          </Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
