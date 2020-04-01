import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const Hero = ({ title, subtitle }) => {
	const style1 = useSpring({
		opacity: 1,
		from: {
			opacity: 0
        },
        delay: 600,
		duration: 400
    });
    const style2 = useSpring({
		opacity: 1,
		from: {
			opacity: 0
        },
        delay: 760,
		duration: 200
	});

	return (
		<Jumbotron className="bg-transparent jumbotron-fluid">
			<Container fluid>
				<Row className="justify-content-center py-5 text-center">
					<Col md={8} sm={12}>
						{title && <animated.div style={style1}><h1 className="display-1 font-weight-bold">{title}</h1></animated.div>}
						{subtitle && (
							<animated.div style={style2}><h3 className="display-4 font-weight-light">{subtitle}</h3></animated.div>
						)}
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	);
};

export default Hero;
