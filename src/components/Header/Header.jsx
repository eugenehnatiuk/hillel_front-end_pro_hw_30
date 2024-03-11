import React from 'react';
import MenuItem from '../MenuItem/Menuitem.jsx';
import './header.scss';

const menuProps = [
  ['Main', 'header__navmenu-item'],
  ['FAQ', 'header__navmenu-item'],
  ['Content', 'header__navmenu-item'],
  ['Contacts', 'header__navmenu-item'],
];

const Header = ({ headerClass, navClass, navMenuListClass }) => (
  <header className={headerClass}>
    <nav className={navClass}>
      <ul className={navMenuListClass}>
        {menuProps.map(([title, cssClass]) => (
          <MenuItem key={title} navMenuItem={cssClass} title={title} />
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
