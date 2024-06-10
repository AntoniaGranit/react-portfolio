import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Fade, Slide } from 'react-awesome-reveal'
import { LeftContainer, NavContainer } from '../Styles/LandingSection'
import { LandingLink } from '../Styles/Fonts'
import { LandingSectionContainer } from '../Styles/Sections'

const Blob = styled.div`
	background-color: #e1ff74;
	box-shadow: 0px 0px 70px 60px #e1ff74;
	border-radius: 50%;
	opacity: 90%;
	width: 300px;
	height: 270px;
	position: absolute;
	left: 58%;
	top: 33%;
	z-index: -100;
`

const LandingSection = () => {
	return (
		<LandingSectionContainer id="landing">
			<LeftContainer>
				<Fade triggerOnce delay={200} duration={2500}>
					<Slide triggerOnce direction="down">
						<NavContainer>
							<Link to="/about">
								<LandingLink>ABOUT</LandingLink>
							</Link>
							<Link to="/skills">
								<LandingLink>SKILLS</LandingLink>
							</Link>
							<Link to="/projects">
								<LandingLink>PROJECTS</LandingLink>
							</Link>
							<Link to="/contact">
								<LandingLink>CONTACT ME</LandingLink>
							</Link>
						</NavContainer>
					</Slide>
				</Fade>
			</LeftContainer>
			<Fade triggerOnce delay={1200} duration={1000}>
				<Blob />
			</Fade>
		</LandingSectionContainer>
	)
}

export default LandingSection
