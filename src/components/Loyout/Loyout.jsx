// import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { NavContainer, AppContainer, NavLinkStyled } from './Loyout.styled';

export const Loyout = () => {
	return (
		<AppContainer>
			<NavContainer>
				<NavLinkStyled to="/">Home</NavLinkStyled>
				<NavLinkStyled to="/movies">Movies</NavLinkStyled>
			</NavContainer>
			<Suspense fallback={<InfinitySpin width="300" color="#d16ba5" />}>
				<Outlet />
			</Suspense>
		</AppContainer>
	);
};

export default Loyout;
