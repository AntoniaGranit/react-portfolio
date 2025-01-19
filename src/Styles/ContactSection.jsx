import styled from 'styled-components'

export const ContactDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
`

export const ContactInfoWrapper = styled.div`
	width: 100%;
	background-color: #ffe0d0;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	gap: 20px;
	z-index: 1;
`

export const MailLink = styled.a`
	font-family: 'Outfit';
	font-size: 1.4rem;
	color: #ba3614;
	text-decoration: none;
	padding: 1rem 1rem;
	border-radius: 25px;
	transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

	:hover {
		box-shadow: inset 300px 0px 0px 0px #ba3614;
		color: white;
	}
`
