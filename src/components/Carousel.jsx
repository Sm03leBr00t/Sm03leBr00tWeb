import React, { Component } from 'react';
import { Container, Col } from 'react-bootstrap';
import { Trail } from 'react-spring/renderprops';

import githubImg from '../assets/images/githubImg.png';
import youtubeChannelImg from '../assets/images/youtubeImg.png';
import devtoImg from '../assets/images/devtoImg.png';
import Card from './Card';

export class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					title: 'Youtube',
					subtitle: 'I will post videos about solving cyber security issues',
					link: '#',
					imgSrc: youtubeChannelImg
				},
				{
					title: 'Dev.to',
					subtitle: 'Articles and more',
					link: 'https://dev.to/arcticspacefox',
					imgSrc: devtoImg
				},
				{
					title: 'Github',
					subtitle: 'All my code',
					link: 'https://github.com/arcticspacefox',
					imgSrc: githubImg
				}
			]
		};
	}

	makeItems = items => {
		return (
			<Trail
				items={items}
				keys={item => item.key}
				from={{ opacity: 0, marginTop: 50 }}
				to={{ opacity: 1, marginTop: 0 }}
				config={{delay: 1100}}
			>
					{(item, i) => props => (
						<Col key={i} className="d-inline-block text-center" md={4} sm={12} style={props}>
							<Card {...item} />
						</Col>
					)}
			</Trail>
		);
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
