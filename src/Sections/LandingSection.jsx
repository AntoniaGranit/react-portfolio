import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { LeftContainer, NavContainer } from '../Styles/LandingSection'
import { LandingLink } from '../Styles/Fonts'
import { LandingSectionContainer } from '../Styles/Sections'

const scrollToSection = (id) => {
	const element = document.getElementById(id)
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
}

const LandingSection = () => {
	return (
		<LandingSectionContainer id="landing">
			<LeftContainer>
				<Fade triggerOnce delay={200} duration={2500}>
					<Slide triggerOnce direction="down">
						<NavContainer>
							<LandingLink onClick={() => scrollToSection('about')}>
								ABOUT
							</LandingLink>

							<LandingLink onClick={() => scrollToSection('skills')}>
								SKILLS
							</LandingLink>

							<LandingLink onClick={() => scrollToSection('projects')}>
								PROJECTS
							</LandingLink>

							<LandingLink onClick={() => scrollToSection('contact')}>
								CONTACT ME
							</LandingLink>
						</NavContainer>
					</Slide>
				</Fade>
			</LeftContainer>
		</LandingSectionContainer>
	)
}

export default LandingSection
