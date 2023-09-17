import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { ContactContainer } from '../Styles/Sections';
import { LCTitle } from '../Styles/Fonts';
import { Button, ButtonContainer } from '../Styles/Buttons';
import { ContactHeader, ContactInfo, MailLink } from '../Styles/ContactSection';

export const ContactSection = () => {
  return (
    <ContactContainer id="contactme">
      <Slide triggerOnce direction="up" duration={2000}><LCTitle>Let&apos;s chat!</LCTitle></Slide>
      <ContactHeader>
        <ContactInfo>
          <MailLink href="mailto: antonia.granit@gmail.com">antonia.granit@gmail.com
          </MailLink>
        </ContactInfo>
        <ButtonContainer>
          <a href="https://www.linkedin.com/in/antoniagranit/" target="_blank" rel="noreferrer">
            <Button>
            LinkedIn
            </Button>
          </a>
          <span className="sr-only">LinkedIn</span>
          <a href="https://github.com/AntoniaGranit" target="_blank" rel="noreferrer">
            <Button>
            GitHub
            </Button>
          </a>
          <span className="sr-only">GitHub</span>
        </ButtonContainer>
      </ContactHeader>
    </ContactContainer>
  )
}