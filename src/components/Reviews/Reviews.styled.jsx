import styled from 'styled-components';


export const Container = styled.div`
	padding: 20px;
	/* display: flex;
align-items: center; */

	/* margin-bottom: 20px; */
`;

export const ReviewsList = styled.ul`
font-size: 18px;
`

export const ReviewsItem = styled.li`
&:not(:last-of-type) {
	margin-bottom: 20px;
}
`

export const Data = styled.p`
&:not(:last-of-type) {
	margin-bottom: 10px;
}

&:first-of-type{
	font-weight: 600;
}

&:nth-of-type(2){
	font-size: 14px;
}
`