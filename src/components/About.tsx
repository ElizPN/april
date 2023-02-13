import React from "react";

export function About({}) {
  return (
    <section id='about' className='about section-bg'>
      <div className='container' data-aos='fade-up'>
        <div className='row no-gutters'>
          <div className='content col-xl-5 d-flex align-items-stretch'>
            <div className='content'>
              <h3>Our program</h3>
              <p>
                The program includes the performance of music of various genres,
                eras and cultures in Ukrainian, Swedish, Icelandic, Italian,
                Latin, Belarusian, Greek and other languages.
              </p>
              <a href='#' className='about-btn'>
                <span>About us</span> <i className='bx bx-chevron-right'></i>
              </a>
            </div>
          </div>
          <div className='col-xl-7 d-flex align-items-stretch'>
            <div className='icon-boxes d-flex flex-column justify-content-center'>
              <div className='row'>
                <div
                  className='col-md-6 icon-box'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <i className='bx bx-receipt'></i>
                  <h4>Hallelujah</h4>
                  <p>Help me with short description</p>
                </div>
                <div
                  className='col-md-6 icon-box'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <i className='bx bx-cube-alt'></i>
                  <h4>lascia ch'io pianga</h4>
                  <p>Help me with short description</p>
                </div>
                <div
                  className='col-md-6 icon-box'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  <i className='bx bx-images'></i>
                  <h4>Dona Nobis Pacem</h4>
                  <p>Help me with short description</p>
                </div>
                <div
                  className='col-md-6 icon-box'
                  data-aos='fade-up'
                  data-aos-delay='400'
                >
                  <i className='bx bx-shield'></i>
                  <h4>Sofðu unga ástin mín</h4>
                  <p>Help me with short description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
