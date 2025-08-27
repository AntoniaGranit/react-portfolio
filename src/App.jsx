import React from 'react'
import LandingSection from './Sections/LandingSection'
import AboutSection from './Sections/AboutSection'
import ProjectsSection from './Sections/ProjectsSection'
import SkillSection from './Sections/SkillSection'
import ContactSection from './Sections/ContactSection'
import { AppContainer, SectionContainer } from './Styles/Sections'

const App = () => {
	return (
		<AppContainer>
			<LandingSection />
			<SectionContainer>
				<AboutSection />
				<SkillSection />
				<ProjectsSection />
				<ContactSection />
			</SectionContainer>
		</AppContainer>
	)
}

export default App
