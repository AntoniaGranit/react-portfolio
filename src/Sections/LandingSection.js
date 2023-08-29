/* eslint-disable max-len */
import React from 'react';
import { Slide, Fade } from 'react-awesome-reveal';
import { LeftContainer, AntoniaInfo, AntoniaHeader, AntoniaTitleText, AntoniaHeaderInfo, LinksContainer } from '../Styles/LandingSection';
import { AntoniaGranit, FrontEndDev, Paragraph, Link } from '../Styles/Fonts';
import { LandingSectionContainer } from '../Styles/Sections';
import { ProfilePicture, ProfilePictureDiv } from '../Styles/ProfilePicture';
import Portrait from '../Assets/portrait_antonia.jpg';
import Resume from '../Assets/AntoniaGranit_CV2023.pdf'

export const LandingSection = () => {
  return (
    <LandingSectionContainer id="landing">
      <LeftContainer>
        <Fade triggerOnce duration={2500}>
          <Slide triggerOnce direction="up">
            <AntoniaInfo>
              <AntoniaHeader>
                <ProfilePictureDiv>
                  <ProfilePicture
                    src={Portrait}
                    alt="Portrait of Antonia Granit" />
                </ProfilePictureDiv>
                <AntoniaTitleText>
                  <AntoniaGranit>Antonia Granit</AntoniaGranit>
                  <FrontEndDev>Frontend Developer</FrontEndDev>
                </AntoniaTitleText>
              </AntoniaHeader>
              <AntoniaHeaderInfo>
                <Paragraph>
            Hi! I&apos;m Antonia, a Frontend Developer with a passion for creating impactful digital experiences.
            Leveraging my background in academia, healthcare and youth work, I bring a deep understanding of human behavior to my projects.
            I take pride in designing products that excel in both aesthetics and usability. As a tenacious problem solver,
            I embrace challenges and enjoy collaborating with others to bring ideas to life.
            If you&apos;re seeking a fresh perspective and a tailored approach, look no further.
            Let&apos;s connect!
                </Paragraph>
              </AntoniaHeaderInfo>
              <LinksContainer>
                <Link href="https://www.linkedin.com/in/antoniagranit/" target="_blank" rel="noreferrer">
                  LinkedIn
                </Link>
                <span className="sr-only">LinkedIn</span>
                <Paragraph>|</Paragraph>
                <Link href="https://github.com/AntoniaGranit" target="_blank" rel="noreferrer">
                  GitHub
                </Link>
                <span className="sr-only">GitHub</span>
                <Paragraph>|</Paragraph>
                <Link href={Resume} target="_blank" rel="noreferrer">
                  CV
                </Link>
                <span className="sr-only">CV</span>
                <Paragraph>|</Paragraph>
                <Link href="https://www.technigo.io/stories/antonia-from-healhtcare-to-development" target="_blank" rel="noreferrer">
                  Story
                </Link>
                <span className="sr-only">Story</span>
              </LinksContainer>
            </AntoniaInfo>
          </Slide>
        </Fade>
      </LeftContainer>
    </LandingSectionContainer>
  )
}