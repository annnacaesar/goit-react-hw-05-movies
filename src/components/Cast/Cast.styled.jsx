import styled from 'styled-components';

export const Container = styled.div`
	padding: 20px;
`;

export const ListCost = styled.ul`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 30px 15px;
`;
export const ItemCost = styled.li`
	width: 100%;
	height: 400px;
	flex-basis: calc(100% / 4 - 15px);
	padding: 5px;
	color: var(--font-color);
	background: #fbf9fa3f;
	/* font-size: 16px; */
	border-radius: 5px;

	& img {
		width: 100%;
		max-height: 300px;
		object-fit: cover;
	}
`;

export const Data = styled.p`
	margin-top: 10px;
	font-size: 14px;
	font-weight: 600;
`;
