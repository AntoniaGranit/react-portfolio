import styled from 'styled-components'

export const HomeLinkContainer = styled.div`
	position: absolute;
	top: 20px;
	left: 20px;
`

export const LandingSectionContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	top: 0;
	z-index: 1;
	position: relative;
`

export const AboutContainer = styled.section`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	z-index: 2;
`

export const ProjectContainer = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;
	z-index: 3;
`

export const SkillsContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;
	height: fit-content;
`

export const ContactContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	height: 100vh;
	position: relative;
	z-index: 4;
`
