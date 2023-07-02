/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import { EnvelopeAt, Kanban, Braces, Gear } from 'react-bootstrap-icons';
import { MenuLink, MenuIcon } from '../Styles/Fonts';
import './Menu.css';

const MenuComponent = () => {
  return (
    <div>
      <Menu
        right
        width={260}
        isOpen={false}>
        <Link
          activeClass="active"
          to="tech"
          smooth
          duration={1000}>
          <MenuLink><MenuIcon><Braces /></MenuIcon> Tech stack</MenuLink>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          smooth
          duration={1000}>
          <MenuLink><MenuIcon><Kanban /></MenuIcon> Projects</MenuLink>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          smooth
          duration={1000}>
          <MenuLink><MenuIcon><Gear /></MenuIcon> Skills</MenuLink>
        </Link>
        <Link
          activeClass="active"
          to="contactme"
          smooth
          duration={1000}>
          <MenuLink><MenuIcon><EnvelopeAt /></MenuIcon> Contact me</MenuLink>
        </Link>
      </Menu>
    </div>
  );
}

export default MenuComponent;
