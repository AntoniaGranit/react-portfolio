import React from 'react';
import { ContactContainer } from '../Styles/Sections';
import { BigTitle, MediumBlackTitle, BlackTitle, DigitalDesigner } from '../Styles/Fonts';
import { ContactHeader, ContactTitleText, ContactInfo, MailLink, SoMeIconContainer } from '../Styles/ContactSection';
import { ProfilePicture } from '../Styles/ProfilePicture';
import Portrait from '../Assets/portrait_antonia.jpg'

export const ContactSection = () => {
  return (
    <ContactContainer>
      <BigTitle>Let&apos;s chat!</BigTitle>
      <ContactHeader>
        <ProfilePicture
          src={Portrait}
          alt="Portrait of Antonia Granit" />
        <ContactTitleText>
          <MediumBlackTitle>Antonia Granit</MediumBlackTitle>
          <BlackTitle>Frontend Developer</BlackTitle>
          <DigitalDesigner>& digital designer</DigitalDesigner>
        </ContactTitleText>
      </ContactHeader>
      <ContactInfo>
        <MailLink href="mailto: antonia.granit@gmail.com">antonia.granit@gmail.com
        </MailLink>
      </ContactInfo>
      <SoMeIconContainer>
        <a href="https://www.linkedin.com/in/antoniagranit/" target="_blank" rel="noreferrer">
          <i className="fa fa-linkedin fa-lg" />
        </a>
        <span className="sr-only">LinkedIn</span>
        <a href="https://github.com/AntoniaGranit" target="_blank" rel="noreferrer">
          <i className="fa fa-github fa-lg" />
        </a>
        <span className="sr-only">GitHub</span>
      </SoMeIconContainer>
    </ContactContainer>
  )
}