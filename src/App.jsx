import React from 'react'
import styled from 'styled-components'
import { Fade, Slide } from 'react-awesome-reveal'
import LandingSection from './Sections/LandingSection'
import ProjectsSection from './Sections/ProjectsSection'
import SkillSection from './Sections/SkillSection'
import ContactSection from './Sections/ContactSection'
import MenuComponent from './Components/Menu'

const Blob = styled.div`
	background-color: #e1ff74;
	box-shadow: 0px 0px 60px 40px #e1ff74; /* outer cyan */
	border-radius: 50%;
	opacity: 90%;
	width: 300px;
	height: 270px;
	position: absolute;
	left: 58%;
	top: 33%;
	z-index: -10;
`

const App = () => {
	return (
		<div>
			<MenuComponent />
			<Fade triggerOnce delay={1200} duration={1000}>
				<Blob />
			</Fade>
			<LandingSection />
			<SkillSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	)
}

export default App
