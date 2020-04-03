import React from 'react';
import { Col, Image } from 'react-bootstrap';

const Card = ({ title, imgSrc, subtitle, link }) => {
	return (
		<div>
			<Image
				src={imgSrc}
				alt={title}
				fluid
				style={{ borderRadius: '12px' }}
			></Image>
			<CardInfo
				title={title}
				subtitle={subtitle}
				link={link}
				className="g-card-info"
			/>
		</div>
	);
};

const CardInfo = ({ title, subtitle, link }) => {
	return (
		<div className="g-card-info">
			<p className="font-weight-bold g-card-title">{title}</p>
			<p className="g-card-sub-title">{subtitle}</p>
			<a target="_blank" rel="noopener noreferrer" href={link}>
				More...
			</a>
		</div>
	);
};

export default Card;
