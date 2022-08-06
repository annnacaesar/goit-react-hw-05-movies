import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	padding: 10px 20px 20px;

	border-bottom: var(--border);
`;
export const ImageContainer = styled.div`
	margin-right: 35px;
	flex-direction: column;
`;
export const Button = styled(NavLink)`
	background: #fbf9fa3f;
	padding: 10px 20px;
	border-radius: 5px;
	font-size: 18px;

	color: var(--font-color);
`;
export const Image = styled.img`
	margin-top: 15px;
	max-width: 300px;
	display: block;
	border-radius: 5px;
`;
export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 53px;
`;
export const DataTitle = styled.h2`
font-size: 30px;
margin-bottom: 10px;
}
`;
export const Description = styled.p`
font-size:18px;
&:not(:last-of-type){
margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
	padding: 10px 20px 20px;
	border-bottom: var(--border);
`;

export const InfoLink = styled(NavLink)`
	font-size: 18px;
	&:not(:last-of-type) {
		margin-right: 15px;
	}
	&.active {
		color: var(--hover-link-color);
	}
`;
