import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

const HomePage = ({ headtitle, subtitle }) => {
	return (
		<div>
			<Hero title={headtitle} subtitle={subtitle} />
			<Carousel />
		</div>
	);
};

export default HomePage;
