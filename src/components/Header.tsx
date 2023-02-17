import React, { useState } from "react";


const navItems = [
  { name: "Home", link: "#hero" },
  { name: "Our program", link: "#program" },
  { name: "Listen", link: "#services" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Or team", link: "#team" },
  { name: "Contact", link: "#contact" },
];

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const renderNavItems = navItems.map((item, intex) => (
    <li key={intex}>
      <a
        onClick={() => {
          setIsMobileNavOpen(false);
        }}
        className='nav-link scrollto'
        href={item.link}
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <header id='header' className='fixed-top d-flex align-items-center'>
      <div className='container d-flex align-items-center'>
        <h1 className='logo me-auto'>
          <a href='index.html'>
            April<span>.</span>
          </a>
        </h1>
        <a href='index.html' className='logo me-auto'>
          <img src='assets/img/logo.png' alt='' />
        </a>
        <nav
          id='navbar'
          className={`navbar order-last order-lg-0 ${
            isMobileNavOpen ? "navbar-mobile" : ""
          }`}
        >
          <ul>{renderNavItems}</ul>
          <i
            className={`bi bi-list mobile-nav-toggle ${
              isMobileNavOpen ? "bi-x" : "bi-list"
            }`}
            onClick={handleMobileNavToggle}
          ></i>
        </nav>
      </div>
    </header>
  );
}
