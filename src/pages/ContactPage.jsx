import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Hero from '../components/Hero';
import Content from '../components/Content';

const ContactPage = ({ headtitle }) => {
	const [loading, setLoading] = React.useState(false);
	const { handleSubmit, register, reset, formState, errors } = useForm({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		submitFocusError: true
	});

	const style = useSpring({
		opacity: 1,
		transform: 'translate(0px, 0px)',
		from: {
			opacity: 0,
			transform: 'translate(0px,50px)'
		},
		delay: 1000
	});

	const onSubmit = data => {
		setLoading(true);
		Axios.post('https://formspree.io/xzbapwyk', data)
			.then(() => {
				setLoading(false);
				reset();
				toast.success('🦄 Ok I will get in Contact with you', {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true
				});
			})
			.catch(() => {
				toast.error('Hmm, something went wrong', {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true
				});
			});
	};

	return (
		<div>
			<Hero title={headtitle} />

			<Content>
				<animated.div style={style}>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Form.Group>
							<Form.Label htmlFor="fullname">Full name</Form.Label>
							<Form.Control
								name="fullname"
								ref={register({
									required: {
										value: true,
										message: 'Your name is required!'
									},
									maxLength: {
										value: 30,
										message: 'Your name is too long'
									}
								})}
								type="text"
								placeholder="Your name..."
								disabled={loading}
								isInvalid={
									errors.fullname &&
									formState.touched.fullname &&
									!formState.isSubmitted
								}
								isValid={
									!errors.fullname &&
									formState.touched.fullname &&
									!formState.isSubmitted
								}
							></Form.Control>
							<Form.Text className="text-danger">
								{errors.fullname &&
									formState.touched.fullname &&
									errors.fullname.message}
							</Form.Text>
							<Form.Text className="text-success">
								{!errors.fullname &&
									formState.touched.fullname &&
									'Looks perfect'}
							</Form.Text>
						</Form.Group>

						<Form.Group>
							<Form.Label htmlFor="email">Email</Form.Label>
							<Form.Control
								name="email"
								ref={register({
									required: {
										value: true,
										message: 'Your email is required!'
									},
									pattern: {
										value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
										message: 'This is not a valid email'
									}
								})}
								type="email"
								placeholder="bob@example.com"
								disabled={loading}
								isInvalid={
									errors.email &&
									formState.touched.email &&
									!formState.isSubmitted
								}
								isValid={
									!errors.email &&
									formState.touched.email &&
									!formState.isSubmitted
								}
							></Form.Control>
							<Form.Text className="text-muted">
								{!errors.email &&
									!formState.touched.email &&
									'We never share your email with anyone'}
							</Form.Text>
							<Form.Text className="text-danger">
								{errors.email &&
									formState.touched.email &&
									errors.email.message}
							</Form.Text>
							<Form.Text className="text-success">
								{!errors.email && formState.touched.email && 'Looks perfect'}
							</Form.Text>
						</Form.Group>

						<Form.Group>
							<Form.Label htmlFor="message">Message</Form.Label>
							<Form.Control
								name="message"
								type="text"
								ref={register({
									minLength: { value: 10, message: 'Your message is to short' },
									maxLenght: {
										value: 255,
										message:
											'Your message is sadly to long, just try to shorten it, we can talk more later'
									},
									required: {
										value: true,
										message: 'You need to type a message!'
									}
								})}
								as="textarea"
								rows="3"
								placeholder="Your message..."
								disabled={loading}
								isInvalid={
									errors.message &&
									formState.touched.message &&
									!formState.isSubmitted
								}
								isValid={
									!errors.message &&
									formState.touched.message &&
									!formState.isSubmitted
								}
							></Form.Control>
							<Form.Text className="text-danger">
								{errors.message &&
									formState.touched.message &&
									errors.message.message}
							</Form.Text>
							<Form.Text className="text-success">
								{!errors.message && formState.touched.message && 'Ok got it'}
							</Form.Text>
						</Form.Group>

						<Button
							className="d-inline-block"
							variant="primary"
							type="submit"
							disabled={loading}
						>
							{!loading ? 'Send' : 'Sending...'}
						</Button>
					</Form>
				</animated.div>
			</Content>
			<div style={{ paddingBottom: '5vh' }}></div>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnVisibilityChange
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default ContactPage;
