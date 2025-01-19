import styled from 'styled-components'

export const LandingSectionContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	top: 0;
	z-index: 1;
	position: relative;
	background-color: #e7ecb3;
	color: #461c17;
`

export const AboutContainer = styled.section`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	z-index: 2;
	background-color: #b4734e;
	color: #3a090a;
`

export const ProjectContainer = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;
	z-index: 3;
	background-color: #3a1417;
	color: #ef684a;
`

export const SkillsContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	padding: 100px;
	height: fit-content;
	background-color: #ead9f0;
	color: #000159;
`

export const ContactContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	height: 100vh;
	position: relative;
	z-index: 4;
	background-color: #ffe0d0;
	color: #ba3614;
`
