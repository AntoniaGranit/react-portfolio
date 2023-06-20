import React from 'react';
import { Nav, TopRight } from '../Styles/NavBar';

export const NavBar = () => {
  return (
    <Nav>
      <TopRight>
        <li>
           Tech
        </li>
        <li>
          Projects
        </li>
        <li>
          Skills
        </li>
        <li>
          Contact
        </li>
      </TopRight>
    </Nav>
  );
}
