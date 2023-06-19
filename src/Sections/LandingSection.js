/* eslint-disable max-len */
import React from 'react';
import { LeftContainer, RightImage, AntoniaInfo, AntoniaHeader, AntoniaTitleText, AntoniaHeaderInfo, SocialMediaIcons } from '../Styles/LandingSection';
import { AntoniaGranit, BlackTitle, DigitalDesigner, Paragraph } from '../Styles/Fonts';
import { LandingSectionContainer } from '../Styles/Sections';
import { ProfilePicture } from '../Styles/ProfilePicture';
import Portrait from '../Assets/portrait_antonia.jpg'

export const LandingSection = () => {
  return (
    <LandingSectionContainer>
      <LeftContainer>
        <AntoniaInfo>
          <AntoniaHeader>
            <div className="portrait-photo-div">
              <ProfilePicture
                src={Portrait}
                alt="Portrait of Antonia Granit" />
            </div>
            <AntoniaTitleText>
              <AntoniaGranit>Antonia Granit</AntoniaGranit>
              <BlackTitle>Frontend Developer</BlackTitle>
              <DigitalDesigner>& digital designer</DigitalDesigner>
            </AntoniaTitleText>
          </AntoniaHeader>
          <AntoniaHeaderInfo>
            <Paragraph>
            Hi! I&apos;m Antonia, a dedicated frontend developer with a passion for creating impactful digital experiences.
            Leveraging my background in academia, healthcare and youth work, I bring a deep understanding of human behavior to all of my projects.
            I take pride in my work and strive to create products that not only look good but feel good to use.
            As a dedicated problem solver, I&apos;m always up for a challenge and love working with a team to bring ideas to life.
            If you&apos;re looking for someone who can bring a fresh perspective and a personal touch to your tech projects, look no further.
            Let&apos;s create something great together!
            </Paragraph>
          </AntoniaHeaderInfo>
          <SocialMediaIcons>
            {/* <a href="https://www.linkedin.com/in/antoniagranit/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin fa-lg" /></a>
            <span className="sr-only">LinkedIn</span>
            <a href="https://github.com/AntoniaGranit" target="_blank" rel="noreferrer"><i className="fa fa-github fa-lg" /></a>
            <span className="sr-only">GitHub</span> */}
          </SocialMediaIcons>
        </AntoniaInfo>
      </LeftContainer>
      <RightImage />
    </LandingSectionContainer>
  )
}