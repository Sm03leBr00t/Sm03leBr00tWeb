import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Col } from 'react-bootstrap';

const Card = ({ title, imgSrc, subtitle, link }) => {
	const style = useSpring({
        opacity: 1,
        marginTop: 0,
		from: {
            opacity: 0,
            marginTop: 50
        },
        delay: 1100,
        duration: 1200
	});

	return (
		<Col className="d-inline-block text-center" md={4} sm={12}>
			<animated.div style={style}>
				<img src={imgSrc} alt={title} className="g-card-image" />
				<CardInfo
					title={title}
					subtitle={subtitle}
					link={link}
					className="g-card-info"
				/>
			</animated.div>
		</Col>
	);
};

const CardInfo = ({ title, subtitle, link }) => {
	const style = useSpring({
		opacity: 1,
		from: {
			opacity: 0
		}
	});

	return (
		<animated.div style={style} className="g-card-info">
			<p className="font-weight-bold g-card-title">{title}</p>
			<p className="g-card-sub-title">{subtitle}</p>
			<a target="_blank" rel="noopener noreferrer" href={link}>
				More...
			</a>
		</animated.div>
	);
};

export default Card;
