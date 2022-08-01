import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
	padding: 20px;
	border-bottom: var(--border);
`;

export const NavLinkStyled = styled(NavLink)`
	font-size: 28px;
	font-weight: 600;
	&:first-of-type {
		margin-right: 30px;
	}
	&.active {
		color: var(--hover-link-color);
	}
`;

export const AppContainer = styled.div`
	/* height: 100vh; */
	min-height: 100vh;
	font-size: 40px;
	color: var(--font-color);
	padding: 50px;
	background-image: var(--background-gradient);
`;
