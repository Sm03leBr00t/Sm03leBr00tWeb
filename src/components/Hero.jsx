import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Hero = ({ title, subtitle }) => {
	return (
		<Jumbotron className="bg-transparent jumbotron-fluid">
			<Container fluid>
				<Row className="justify-content-center py-5 text-center">
					<Col md={8} sm={12}>
						{title && (<h1 className="display-1 font-weight-bold">{title}</h1>)}
						{subtitle && (<h3 className="display-4 font-weight-light">{subtitle}</h3>)}
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	);
};

export default Hero;
