import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import githubImg from '../assets/images/githubImg.png';
import youtubeChannelImg from '../assets/images/youtubeImg.jpg';
import devtoImg from '../assets/images/devtoImg.jpg';
import Card from './Card';

export class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					title: 'Youtube Channel',
					subtitle: 'Comming soon',
					link: '#',
					imgSrc: youtubeChannelImg
				},
				{
					title: 'Dev.to',
					subtitle: 'Articles and more',
					link: 'https://dev.to/sm03lebr00t',
					imgSrc: devtoImg
				},
				{
					title: 'Github',
					subtitle: 'My code and projects',
					link: 'https://github.com/sm03lebr00t',
					imgSrc: githubImg
				}
			]
		};
	}

	makeItems = items => {
		return items.map((item, i) => <Card key={i} {...item} />);
	};

	render() {
		return (
			<Container fluid>
				{/* <Row className="justify-content-between py-5"> */}
				{this.makeItems(this.state.items)}
				{/* </Row> */}
			</Container>
		);
	}
}

export default Carousel;
