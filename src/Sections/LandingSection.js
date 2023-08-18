/* eslint-disable max-len */
import React from 'react';
import { LeftContainer, AntoniaInfo, AntoniaHeader, AntoniaTitleText, AntoniaHeaderInfo, SocialMediaIcons } from '../Styles/LandingSection';
import { AntoniaGranit, FrontEndDev, Paragraph } from '../Styles/Fonts';
import { LandingSectionContainer } from '../Styles/Sections';
import { ProfilePicture, ProfilePictureDiv } from '../Styles/ProfilePicture';
import Portrait from '../Assets/portrait_antonia.jpg';

export const LandingSection = () => {
  return (
    <LandingSectionContainer id="landing">
      <LeftContainer>
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
          <SocialMediaIcons>
            <a href="https://www.linkedin.com/in/antoniagranit/" target="_blank" rel="noreferrer">
              <Paragraph>LinkedIn</Paragraph>
            </a>
            <span className="sr-only">LinkedIn</span>
            <Paragraph>|</Paragraph>
            <a href="https://github.com/AntoniaGranit" target="_blank" rel="noreferrer">
              <Paragraph>GitHub</Paragraph>
            </a>
            <span className="sr-only">GitHub</span>
            <Paragraph>|</Paragraph>
            <a href="https://www.technigo.io/stories/antonia-from-healhtcare-to-development" target="_blank" rel="noreferrer">
              <Paragraph>In media</Paragraph>
            </a>
            <span className="sr-only">In media</span>
          </SocialMediaIcons>
        </AntoniaInfo>
      </LeftContainer>
      {/* <RightImage /> */}
    </LandingSectionContainer>
  )
}