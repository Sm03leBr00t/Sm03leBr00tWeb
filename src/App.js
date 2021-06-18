import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Nav, Container, Navbar } from 'react-bootstrap';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'ArcticSpaceFox',
			pages: [
				{
					title: 'Home',
					path: '/',
					headtitle: 'Just foxin around!',
					subtitle: 'Wanna get social? Here are some links',
					component: HomePage
				},
				// {
				// 	title: 'About',
				// 	path: '/about',
				// 	headtitle: 'About me',
				// 	component: AboutPage
				// },
				{
					title: 'Contact',
					path: '/contact',
					headtitle: "Let's talk",
					component: ContactPage
				}
			]
		};
	}

	render() {
		return (
			<Router>
				<Container className="p-0" fluid>
					<Navbar className="border-bottom" bg="transparent" expand="lg">
						<Navbar.Brand><Link className="text-dark" to="/">{this.state.title}</Link></Navbar.Brand>

						<Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
						<Navbar.Collapse id="navbar-toggle">
							<Nav className="ml-auto">
								{this.state.pages.map((page, i) => (
									<Link className="nav-link" key={i} to={page.path}>
										{page.title}
									</Link>
								))}
							</Nav>
						</Navbar.Collapse>
					</Navbar>
					<Switch>
						{this.state.pages.map((page, i) => (
							<Route
								key={i}
								exact
								path={page.path}
								render={() => <page.component {...page} />}
							/>
						))}
						<Route path="*" component={NotFoundPage} />
					</Switch>
					<Footer {...this.state} />
				</Container>
			</Router>
		);
	}
}
