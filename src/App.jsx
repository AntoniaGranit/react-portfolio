import React from 'react'
import styled from 'styled-components'
import LandingSection from './Sections/LandingSection'
import ProjectsSection from './Sections/ProjectsSection'
import SkillSection from './Sections/SkillSection'
import ContactSection from './Sections/ContactSection'
import MenuComponent from './Components/Menu'

const Blob = styled.div`
	background-color: #e1ff74;
	box-shadow: 0px 0px 60px 50px #e1ff74; /* outer cyan */
	border-radius: 50%;
	opacity: 90%;
	width: 300px;
	height: 270px;
	position: absolute;
	left: 62%;
	top: 26%;
	z-index: -10;
`

const App = () => {
	return (
		<div>
			<MenuComponent />
			<Blob />
			<LandingSection />
			<SkillSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	)
}

export default App
