import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	right: 5rem;
	bottom: 2rem;
	padding: 0.5rem 1rem;
	background: #fff;
	border-radius: 1rem;
	transition: all 0.3s;

	&:hover {
		background: #efefef;
	}

	span {
		padding: 0.5rem;
	}
`;

const BackToTop: FunctionComponent = () => {
	const [visible, isVisible] = React.useState(false);

	function onScroll() {
		isVisible(() => window.pageYOffset > 300);
	}

	React.useLayoutEffect(() => {
		document.addEventListener('scroll', onScroll);
		return () => document.removeEventListener('scroll', onScroll);
	}, []);

	if (!visible) {
		return null;
	}

	return (
		<Button onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}>
			<span aria-hidden={true}>↑</span>
			Back to top
		</Button>
	);
}

export default BackToTop;
