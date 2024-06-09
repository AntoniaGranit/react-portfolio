import styled from 'styled-components'

export const Button = styled.button`
	background-color: #030324;
	color: white;
	font-size: 12px;
	border-radius: 25px;
	height: 35px;
	width: 100px;
	border: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-family: 'Space Mono';
	transition: border-radius 0.3s ease-in-out;

	&:hover {
		border-radius: 3px;
	}
`

export const ButtonContainer = styled.div`
	display: flex;
	width: fit-content;
	gap: 15px;
`
