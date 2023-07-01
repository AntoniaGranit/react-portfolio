import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Paragraph } from '../Styles/Fonts';
import './Menu.css';

const MenuComponent = () => {
  return (
    <div>
      <Menu right>
        <a id="projects" href=""
        <a id="about" className="menu-item" href="/about"><Paragraph>About</Paragraph></a>
        <a id="contact" className="menu-item" href="/contact"><Paragraph>Contact</Paragraph></a>
      </Menu>
    </div>
  );
}

export default MenuComponent;
