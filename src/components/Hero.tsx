import React from "react";

export function Hero() {
  return (
    <section id='hero' className='d-flex align-items-center'>
      <div className='container' data-aos='zoom-out' data-aos-delay={100}>
        <div className='row'>
          <div className='col-xl-6'>
            <h1>We are the choir April</h1>
            <h2>
              Each work of the "April" choir is a small musical experiment and
              adventure.
            </h2>
            <a href='#program' className='btn-get-started scrollto'>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
