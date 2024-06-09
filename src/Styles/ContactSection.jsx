import styled from 'styled-components'

export const ContactHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`

export const MailLink = styled.a`
	font-family: 'Outfit';
	font-size: 1.4rem;
	color: #030324;
	text-decoration: none;
	padding: 1rem 1rem;
	border-radius: 25px;
	transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

	:hover {
		box-shadow: inset 300px 0px 0px 0px #030324;
		color: white;
	}
`
