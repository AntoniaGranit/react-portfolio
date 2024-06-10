import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingSection from './Sections/LandingSection'
import AboutSection from './Sections/AboutSection'
import ProjectsSection from './Sections/ProjectsSection'
import SkillSection from './Sections/SkillSection'
import ContactSection from './Sections/ContactSection'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingSection />} />
				<Route path="/about" element={<AboutSection />} />
				<Route path="/skills" element={<SkillSection />} />
				<Route path="/projects" element={<ProjectsSection />} />
				<Route path="/contact" element={<ContactSection />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
