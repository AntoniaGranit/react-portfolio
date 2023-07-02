/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import { Envelope, Kanban, Braces, Gear, ArrowUpSquare } from 'react-bootstrap-icons';
import { MenuLink, MenuIcon } from '../Styles/Fonts';
import './Menu.css';

const MenuComponent = () => {
  return (
    <div>
      <Menu
        right
        width={260}>
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
          <MenuLink><MenuIcon><Envelope /></MenuIcon> Contact me</MenuLink>
        </Link>
        <Link
          activeClass="active"
          to="landing"
          smooth
          duration={1000}>
          <MenuLink><MenuIcon><ArrowUpSquare /></MenuIcon> Scroll up</MenuLink>
        </Link>
      </Menu>
    </div>
  );
}

export default MenuComponent;
