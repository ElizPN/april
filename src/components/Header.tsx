import React from "react";

export function Header() {
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

        <nav id='navbar' className='navbar order-last order-lg-0'>
          <ul>
            <li>
              <a className='nav-link scrollto active' href='#hero'>
                Home
              </a>
            </li>
            <li>
              <a className='nav-link scrollto' href='#program'>
                Our program
              </a>
            </li>
            <li>
              <a className='nav-link scrollto' href='#services'>
                Video
              </a>
            </li>
            <li>
              <a className='nav-link scrollto ' href='#portfolio'>
                Portfolio
              </a>
            </li>
            <li>
              <a className='nav-link scrollto' href='#team'>
                Our team
              </a>
            </li>
            <li>
              <a className='nav-link scrollto' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
          <i className='bi bi-list mobile-nav-toggle'></i>
        </nav>
      </div>
    </header>
  );
}
