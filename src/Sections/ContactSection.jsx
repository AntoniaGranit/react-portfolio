import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { ContactContainer } from '../Styles/Sections'
import { LCTitle } from '../Styles/Fonts'
import { Button, ButtonContainer } from '../Styles/Buttons'
import { ContactDiv, ContactInfoWrapper } from '../Styles/ContactSection'

const ContactSection = () => {
	return (
		<ContactContainer id="contact">
			<ContactDiv>
				<Slide triggerOnce direction="up" delay={700} duration={2000}>
					<LCTitle>Let&apos;s chat!</LCTitle>
				</Slide>
				<ContactInfoWrapper>
					<ButtonContainer>
						<a
							href="https://www.linkedin.com/in/antoniagranit/"
							target="_blank"
							rel="noreferrer"
						>
							<Button>LinkedIn</Button>
						</a>
						<span className="sr-only">LinkedIn</span>
						<a
							href="https://github.com/AntoniaGranit"
							target="_blank"
							rel="noreferrer"
						>
							<Button>GitHub</Button>
						</a>
						<span className="sr-only">GitHub</span>
					</ButtonContainer>
				</ContactInfoWrapper>
			</ContactDiv>
		</ContactContainer>
	)
}

export default ContactSection
