/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import { Envelope, Kanban, Gear, ArrowUpSquare } from 'react-bootstrap-icons';
import { MenuLink, MenuIcon } from '../Styles/Fonts';
import './Menu.css';

const MenuComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setTimeout(() => setMenuOpen(false), 1000);
  };

  return (
    <div>
      <Menu
        right
        width={260}
        isOpen={menuOpen}
        onStateChange={handleStateChange}
      >
        <Slide triggerOnce duration={550}>
          <Link
            activeClass="active"
            to="skills"
            smooth
            duration={1000}
            onClick={closeMenu}
          >
            <MenuLink>
              <MenuIcon>
                <Gear />
              </MenuIcon>{' '}
              Skills
            </MenuLink>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            smooth
            duration={1000}
            onClick={closeMenu}
          >
            <MenuLink>
              <MenuIcon>
                <Kanban />
              </MenuIcon>{' '}
              Projects
            </MenuLink>
          </Link>
          <Link
            activeClass="active"
            to="contactme"
            smooth
            duration={1000}
            onClick={closeMenu}
          >
            <MenuLink>
              <MenuIcon>
                <Envelope />
              </MenuIcon>{' '}
              Contact me
            </MenuLink>
          </Link>
          <Link
            activeClass="active"
            to="landing"
            smooth
            duration={1000}
            onClick={closeMenu}
          >
            <MenuLink>
              <MenuIcon>
                <ArrowUpSquare />
              </MenuIcon>{' '}
              To the top
            </MenuLink>
          </Link>
        </Slide>
      </Menu>
    </div>
  );
};

export default MenuComponent;
