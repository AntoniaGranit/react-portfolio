import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import { MenuLink } from '../Styles/Fonts';
import './Menu.css';

const MenuComponent = () => {
  return (
    <div>
      <Menu right width={260}>
        <Link
          activeClass="active"
          to="tech"
          smooth
          duration={1000}>
          <MenuLink>Tech stack</MenuLink>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          smooth
          duration={1000}>
          <MenuLink>Projects</MenuLink>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          smooth
          duration={1000}>
          <MenuLink>Skills</MenuLink>
        </Link>
        <Link
          activeClass="active"
          to="contactme"
          smooth
          duration={1000}>
          <MenuLink>Contact me!</MenuLink>
        </Link>
      </Menu>
    </div>
  );
}

export default MenuComponent;
