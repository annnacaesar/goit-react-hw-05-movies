import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
	margin-bottom: 30px;
	margin-top: 30px;
	font-size: 36px;
	text-align: center;
`;

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 0;
	padding: 0;
	gap: 15px 15px;
`;

export const Item = styled(Link)`
	width: 100%;
	flex-basis: calc(100% / 5 - 15px);
	padding: 5px;
	color: var(--font-colo);
	background: #fbf9fa3f;
	font-size: 18px;
	border-radius: 5px;
	& img {
		width: 100%;
	}
`;
