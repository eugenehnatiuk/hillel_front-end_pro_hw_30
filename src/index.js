import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';


const mainEl = document.querySelector('main');
const root = ReactDOM.createRoot(mainEl);

root.render(
  <>
    <Header
      headerClass="header"
      navClass="header__navmenu container"
      navMenuListClass="header__navmenu-list "
    />
    <Main sectionClass="main-section container" />
    <Footer footerClass="footer" />
  </>
);
