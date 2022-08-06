import styled from 'styled-components';

export const SearchContainer = styled.form`
	padding-top: 30px;
	padding-bottom: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.input`
	margin: 0;
	padding: 10px;
	min-width: 300px;
	height: 40px;
	background-color: #fbf9fa3f;
	color: var(--font-color);
	font-size: 20px;
	border-radius: 5px 0 0 5px;
	&:active,
	&:focus {
		outline: 1px solid var(--font-color);
	}

	&::placeholder {
		color: var(--font-color);
	}
`;

export const Button = styled.button`
	height: 40px;
	width: 40px;
	background-color: #fbf9fa3f;
	border-radius: 0 5px 5px 0;
`;
