// import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router";
import {  NavContainer,  AppContainer, NavLinkStyled} from "./Loyout.styled";

export const Loyout = () => {
	return (
		<AppContainer>
			<NavContainer>
				<NavLinkStyled to='/' >Home</NavLinkStyled>
			<NavLinkStyled to='/movies' >Movies</NavLinkStyled>
			</NavContainer>
			
			<Outlet/>
		</AppContainer>
	);
};

export default Loyout;