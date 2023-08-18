import React from 'react';
import { ContactContainer } from '../Styles/Sections';
import { LCTitle, Paragraph } from '../Styles/Fonts';
import { ContactHeader, ContactInfo, MailLink, SoMeIconContainer } from '../Styles/ContactSection';

export const ContactSection = () => {
  return (
    <ContactContainer id="contactme">
      <LCTitle>Let&apos;s chat!</LCTitle>
      <ContactHeader>
        <ContactInfo>
          <MailLink href="mailto: antonia.granit@gmail.com">antonia.granit@gmail.com
          </MailLink>
        </ContactInfo>
        <SoMeIconContainer>
          <a href="https://www.linkedin.com/in/antoniagranit/" target="_blank" rel="noreferrer">
            <Paragraph>LinkedIn</Paragraph>
          </a>
          <span className="sr-only">LinkedIn</span>
          <Paragraph>|</Paragraph>
          <a href="https://github.com/AntoniaGranit" target="_blank" rel="noreferrer">
            <Paragraph>GitHub</Paragraph>
          </a>
          <span className="sr-only">GitHub</span>
        </SoMeIconContainer>
      </ContactHeader>
    </ContactContainer>
  )
}