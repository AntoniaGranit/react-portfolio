import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { ContactContainer } from '../Styles/Sections';
import { LCTitle, Link, Paragraph } from '../Styles/Fonts';
import { ContactHeader, ContactInfo, MailLink, SoMeIconContainer } from '../Styles/ContactSection';

export const ContactSection = () => {
  return (
    <ContactContainer id="contactme">
      <Slide triggerOnce direction="up" duration={2000}><LCTitle>Let&apos;s chat!</LCTitle></Slide>
      <ContactHeader>
        <ContactInfo>
          <MailLink href="mailto: antonia.granit@gmail.com">antonia.granit@gmail.com
          </MailLink>
        </ContactInfo>
        <SoMeIconContainer>
          <Link href="https://www.linkedin.com/in/antoniagranit/" target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <span className="sr-only">LinkedIn</span>
          <Paragraph>|</Paragraph>
          <Link href="https://github.com/AntoniaGranit" target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <span className="sr-only">GitHub</span>
        </SoMeIconContainer>
      </ContactHeader>
    </ContactContainer>
  )
}