import React from 'react'
import HomeLink from '../Components/HomeLink'
import { AboutContainer } from '../Styles/Sections'
import { AboutWrapper } from '../Styles/AboutSection'
import { AntoniaHeader, AntoniaHeaderInfo } from '../Styles/LandingSection'
import { ProfilePicture, ProfilePictureDiv } from '../Styles/ProfilePicture'
import { Paragraph } from '../Styles/Fonts'
import Portrait from '../Assets/portrait_antonia.jpg'

const AboutSection = () => {
	return (
		<AboutContainer>
			<HomeLink />
			<AboutWrapper>
				<AntoniaHeader>
					<ProfilePictureDiv>
						<ProfilePicture src={Portrait} alt="Portrait of Antonia Granit" />
					</ProfilePictureDiv>
				</AntoniaHeader>
				<AntoniaHeaderInfo>
					<Paragraph>
						Leveraging my background in academia, healthcare and youth work, I
						bring a deep understanding of human behavior to all of my projects.
						I take pride in designing products that excel in both aesthetics and
						usability. As a tenacious problem solver, I embrace challenges and
						enjoy collaborating with others to bring ideas to life.
					</Paragraph>
				</AntoniaHeaderInfo>
				{/* <LinksContainer>
					<Link
						href="https://www.linkedin.com/in/antoniagranit/"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn
					</Link>
					<span className="sr-only">LinkedIn</span>
					<Paragraph>|</Paragraph>
					<Link
						href="https://github.com/AntoniaGranit"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</Link>
					<span className="sr-only">GitHub</span>
					<Paragraph>|</Paragraph>
					<Link
						href="https://www.technigo.io/stories/antonia-from-healhtcare-to-development"
						target="_blank"
						rel="noreferrer"
					>
						Story
					</Link>
					<span className="sr-only">Story</span>
				</LinksContainer> */}
			</AboutWrapper>
		</AboutContainer>
	)
}

export default AboutSection
