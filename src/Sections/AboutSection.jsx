import React from 'react'
import { AboutContainer } from '../Styles/Sections'
import { AboutWrapper } from '../Styles/AboutSection'
import { AntoniaHeaderInfo } from '../Styles/LandingSection'
import { Paragraph } from '../Styles/Fonts'

const AboutSection = () => {
	return (
		<AboutContainer>
			<AboutWrapper>
				<AntoniaHeaderInfo>
					<Paragraph>
						Leveraging my background in academia, healthcare and youth work, I
						bring a deep understanding of human behavior to all of my projects.
						I take pride in designing products that excel in both aesthetics and
						usability. As a tenacious problem solver, I embrace challenges and
						enjoy collaborating with others to bring ideas to life.
					</Paragraph>
				</AntoniaHeaderInfo>
			</AboutWrapper>
		</AboutContainer>
	)
}

export default AboutSection
